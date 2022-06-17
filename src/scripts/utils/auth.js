import ApptivityApi from '../data/apptivity-api';
import Auth from '../data/key-idb';

const checkAuth = async () => {
  const res = await ApptivityApi.getUser();
  if (res.error) {
    await Auth.deleteAccessToken();
    return false;
  }
  return true;
};

export default checkAuth;
