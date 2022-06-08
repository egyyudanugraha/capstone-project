import Home from '../views/pages/home';
import Task from '../views/pages/task';
import Matrix from '../views/pages/matrix';
import Pomodoro from '../views/pages/pomodoro';
import Article from '../views/pages/article';
import Profile from '../views/pages/profile';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Home,
  '/tasks': Task,
  '/matrix': Matrix,
  '/pomodoro': Pomodoro,
  '/article': Article,
  '/profile': Profile,
  '/login': Login,
  '/register': Register,
};

export default routes;
