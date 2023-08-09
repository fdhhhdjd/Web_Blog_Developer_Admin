//* LIBRARY
import axios from 'axios';

//* COMMONS
import { ACCESS_TOKEN, Configs, HEADER, STATUS, getFromLocalStorage, renewToken } from '@/commons';

// Configs Destructuring object
const {
  app: { timeout_axios },
} = Configs;

export const axiosInsV1 = axios.create({
  baseURL: '/api/admin/v1',
  timeout: timeout_axios,
  withCredentials: STATUS.ENABLE,
  headers: {
    Accept: HEADER.ACCEPT_HEADER,
  },
});

axiosInsV1.interceptors.request.use(
  (config) => {
    config.headers = config.headers ?? {};
    if (config.url !== renewToken) {
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
