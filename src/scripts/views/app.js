import Swal from 'sweetalert2';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import URLParser from '../routes/url-parser';
import checkAuth from '../utils/auth';

class App {
  constructor({ hamburger, drawer, content }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = URLParser.UrlWithCombiner();
    const page = routes[url];

    try {
      const auth = await checkAuth();
      if (!auth && !['#/login', '#/register'].includes(window.location.hash)) {
        window.location.hash = '#/login';
        Swal.fire({
          title: 'Oops...',
          text: 'Session expired, please login again',
          icon: 'error',
        });

        return;
      }

      if (auth && ['#/login', '#/register'].includes(window.location.hash)) {
        window.location.hash = '/';
        Swal.fire({
          title: 'Oops...',
          text: 'You are already logged in',
          icon: 'warning',
        });
      } else if (auth) {
        document.querySelector('app-navbar').classList.remove('hidden');
      }

      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;
