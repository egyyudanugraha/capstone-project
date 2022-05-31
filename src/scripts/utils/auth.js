import ApptivityApi from '../data/apptivity-api';

const checkAuth = async () => {
  const res = await ApptivityApi.getUser();
  if (res.statusCode === 401) {
    localStorage.removeItem('access_token');
    return false;
  } else {
    return true;
  }
};

export default checkAuth;
