import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  LOGOUT: `${CONFIG.BASE_URL}/logout`,
  USER: `${CONFIG.BASE_URL}/user`,
  TASK: `${CONFIG.BASE_URL}/task`,
  TASK_DETAIL: (id) => `${CONFIG.BASE_URL}/task/${id}`,
  MATRIX: `${CONFIG.BASE_URL}/matrix`,
};

export default API_ENDPOINT;
