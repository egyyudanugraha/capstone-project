import Auth from '../views/pages/auth';
import Home from '../views/pages/home';
import Matrix from '../views/pages/matrix';

const routes = {
  '/': Home,
  '/task': 'task',
  '/matrix': Matrix,
  '/pomodoro': 'pomodoro',
  '/profile': Auth,
};

export default routes;
