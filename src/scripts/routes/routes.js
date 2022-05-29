import Auth from '../views/pages/auth';
import Home from '../views/pages/home';
import Matrix from '../views/pages/matrix';
import Task from '../views/pages/task';

const routes = {
  '/': Home,
  '/tasks': Task,
  '/matrix': Matrix,
  '/pomodoro': 'pomodoro',
  '/profile': Auth,
};

export default routes;
