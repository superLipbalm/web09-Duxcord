import { API_URL } from '@utils/constants/API_URL';
import { postFetchOptions } from '@utils/fetchOptions';

const tryLogin = async (loginID: string, password: string) => {
  const response = await fetch(API_URL.USER.POST_SIGN_IN, postFetchOptions({ loginID, password }));
  const responseText = await response.text();

  return { status: response.status, responseText };
};

const trySignUp = async (loginID: string, username: string, password: string) => {
  const response = await fetch(
    API_URL.USER.POST_SIGN_UP,
    postFetchOptions({ loginID, username, password }),
  );
  const responseText = await response.text();

  return { status: response.status, responseText };
};

export { tryLogin, trySignUp };
