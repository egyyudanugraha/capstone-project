import ApptivityApi from '../data/apptivity-api';

const checkAuth = async () => {
  const res = await ApptivityApi.checkAuth();
  if (res.statusCode === 401) {
    localStorage.removeItem('access_token');
    return false;
  }
  return true;
};

export default checkAuth;
