import Home from '../views/pages/home';
import Matrix from '../views/pages/matrix';
import Task from '../views/pages/task';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Profile from '../views/pages/profile';

const routes = {
  '/': Home,
  '/tasks': Task,
  '/matrix': Matrix,
  '/pomodoro': 'pomodoro',
  '/profile': Profile,
  '/login': Login,
  '/register': Register,
};

export default routes;
