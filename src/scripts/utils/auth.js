import ApptivityApi from '../data/apptivity-api';

const checkAuth = async () => {
  const res = await ApptivityApi.getUser();
  if (res.error) {
    localStorage.removeItem('access_token');
    return false;
  }
  return true;
};

export default checkAuth;
