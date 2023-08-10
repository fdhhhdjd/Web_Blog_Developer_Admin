//* ROUTERS
import routers from '@/routers';

//* COMMON
import { StatusCodes } from '@/commons';

//* API
import { getRenewToken } from '@/api/auth';

export const handleRefreshing = (axiosIns) => {
  let isRefreshing = false;

  axiosIns.interceptors.response.use(
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
          isRefreshing = true;

          // Start Renew Token
          await getRenewToken();

          isRefreshing = false;

          return axiosIns(originalConfig);
        } catch (_error) {
          // Clear Key Localsorage
          routers.push({ path: '/login' });
          isRefreshing = false;

          return Promise.reject(_error);
        }
      }

      return Promise.reject(err);
    }
  );
};
