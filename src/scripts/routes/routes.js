import Auth from '../views/pages/auth';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/task': 'task',
  '/matrix': 'matrix',
  '/pomodoro': 'pomodoro',
  '/profile': Auth,
};

export default routes;
