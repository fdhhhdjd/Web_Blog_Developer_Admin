//* LIBRARY
import axios from 'axios';

//* COMMONS
import { ACCESS_TOKEN, Configs, HEADER, URL, getFromLocalStorage, headerBrowser } from '@/commons';

//* ROUTERS
import { handleRefreshing } from '../main';

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

// Is refetching Token
handleRefreshing(axiosInsV1);
