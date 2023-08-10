//* LIBRARY
import axios from 'axios';

//* COMMONS
import { getRenewToken } from '@/api/auth';
import {
  ACCESS_TOKEN,
  Configs,
  HEADER,
  StatusCodes,
  URL,
  getFromLocalStorage,
  headerBrowser,
} from '@/commons';

//* ROUTERS

// Configs Destructuring object
const {
  app: { timeout_axios },
} = Configs;

export const axiosInsV1 = axios.create({
  baseURL: '/api/admin/v1',
  timeout: timeout_axios,
});

axiosInsV1.interceptors.request.use(
  (config) => {
    config.headers = { ...config.headers, ...headerBrowser() }; // Merge commonHeaders with existing headers

    if (config.url !== URL._RENEW_TOKEN) {
      const auth = getFromLocalStorage(ACCESS_TOKEN);

      if (auth) {
        config.headers.authorization = `${HEADER.BEARER_HEADER} ${auth}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;

axiosInsV1.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalConfig = err?.config;
    if (
      originalConfig &&
      originalConfig?.url !== URL._LOGIN &&
      err.response &&
      err.response?.status === StatusCodes.UNAUTHORIZED &&
      !originalConfig._retry &&
      !isRefreshing
    ) {
      originalConfig._retry = true;
      originalConfig.headers = { ...originalConfig.headers };

      try {
        // Start Renew Token
        await getRenewToken();

        isRefreshing = false;

        return axiosInsV1(originalConfig);
      } catch (_error) {
        console.log(_error);

        // Clear Key Localsorage
        routers.push({ path: '/login' });

        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  }
);
