import Home from '../views/pages/home';
import Matrix from '../views/pages/matrix';
import Task from '../views/pages/task';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Home,
  '/tasks': Task,
  '/matrix': Matrix,
  '/pomodoro': 'pomodoro',
  '/profile': 'profile',
  '/login': Login,
  '/register': Register,
};

export default routes;
