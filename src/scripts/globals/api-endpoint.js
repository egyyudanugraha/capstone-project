import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  LOGOUT: `${CONFIG.BASE_URL}/logout`,
  LOGOUT_ALL: `${CONFIG.BASE_URL}/logoutall`,
  USER: `${CONFIG.BASE_URL}/user`,
  USER_PASSWORD: `${CONFIG.BASE_URL}/user/password`,
  TASK: `${CONFIG.BASE_URL}/task`,
  TASK_DETAIL: (id) => `${CONFIG.BASE_URL}/task/${id}`,
  MATRIX: `${CONFIG.BASE_URL}/matrix`,
  HISTORY: `${CONFIG.BASE_URL}/history`,
  NEWS: (query) => `${CONFIG.BASE_NEWS_URL(query)}`,
};

export default API_ENDPOINT;
