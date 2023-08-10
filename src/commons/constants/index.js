// Todo: NODE ENV
export const NODE = {
  DEV: 'development',
  PRO: 'production',
};

// Todo: NAME REDUX
export const REDUX_NAME = {
  AUTH: 'auth_slice',
};

// Todo: TIME
export const TIME = {
  _1_SECOND: 1000,
  _3_SECOND: 3 * 1000,
  _5_SECOND: 5 * 1000,
  _8_SECOND: 8 * 1000,
};

// Todo: ROUNDED NUMBER DECIMAL
export const ROUND = {
  NUMBER: 3,
};

// Todo: STATUS
export const STATUS = {
  ENABLE: true,
  DISABLE: false,
};

// Todo: MINIMUM QUANTITY
export const MINIMUM_QUANTITY = 1;

// Todo: DATA TYPE
export const DATA_TYPE = {
  STRING: 'string',
};

// Todo: VALIDATE CHARACTER
export const CHARACTER = {
  _25: 25,
};

// Todo: TYPE TOAST
export const TOAST = {
  BOTTOM_CENTER: 'bottom-center',
  TOP_RIGHT: 'top-right',
  THEME: {
    DARK: 'dark',
    LIGHT: 'light',
  },
};

// Todo: Header
export const HEADER = {
  OS_TYPE_HEADER: 'web',
  OS_VERSION_HEADER: '1.0',
  APP_VERSION_HEADER: '1.0',
  ACCEPT_HEADER: 'application/json',
  BEARER_HEADER: 'Bearer',

  API_KEY: 'X-API-KEY',
  DEVICE_ID: 'X-DEVICE-ID',
  IP: 'X-FORWARDED-FOR',
  AUTHORIZATION: 'authorization',
  // Cookie
  HEADER_HEADER_FORWARDED_HOST: 'x-forwarded-host',
  HEADER_DOMAIN: 'localhost',
  CONTENT_LENGTH: 'content-length',
  CONTENT_TYPE: 'Content-Type',
};

// Todo: API
export const URL = {
  _RENEW_TOKEN: '/auth/renew-token',
  _LOGIN: '/auth/login',
};
