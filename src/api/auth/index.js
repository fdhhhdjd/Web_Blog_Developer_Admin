//* PLUGINS
import { axiosInsV1 } from '@/plugins';

//* COMMONS
import { ACCESS_TOKEN, PERMISSION_KEY, STATUS, saveToLocalStorage } from '@/commons';

// Renew Token
export const getRenewToken = async () => {
  const response = await axiosInsV1.post('/auth/renew-token', {
    renew_token: STATUS.ENABLE,
  });

  const resultResponse = response.data;

  // Save AccessToken
  saveToLocalStorage(ACCESS_TOKEN, resultResponse.metadata.access_token);

  return resultResponse;
};
