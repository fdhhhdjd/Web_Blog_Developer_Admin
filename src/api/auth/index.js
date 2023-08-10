//* PLUGINS
import { ACCESS_TOKEN, PERMISSION_KEY, STATUS, saveToLocalStorage } from '@/commons';
import { axiosInsV1 } from '@/plugins';

// Renew Token
export const getRenewToken = async () => {
  try {
    const response = await axiosInsV1.post('/auth/renew-token', {
      renew_token: STATUS.ENABLE,
    });

    const resultResponse = response.data;

    // Save AccessToken
    saveToLocalStorage(ACCESS_TOKEN, resultResponse.metadata.access_token);

    // Save Permission
    saveToLocalStorage(PERMISSION_KEY, resultResponse.metadata.permission_key);

    return resultResponse;
  } catch (error) {
    console.error(error);
  }
};
