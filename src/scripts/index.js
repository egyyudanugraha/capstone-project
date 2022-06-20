import 'regenerator-runtime';
import '../styles/style.css';
import 'flowbite';
import './components/navbar';
import './components/card-matrix';
import './components/modal';
import './components/btn-mode';
import './components/footer';
import App from './views/app';
import registerServiceWorker from './utils/sw-register';
import NotificationHelper from './utils/notification-helper';

const app = new App({
  hamburger: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  registerServiceWorker();
  NotificationHelper.init();
});

window.addEventListener('scroll', () => {
  const btnMode = document.getElementById('btn-mode');
  if (Math.round(window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    btnMode.classList.add('translate-y-20');
  } else {
    btnMode.classList.remove('translate-y-20');
  }
});
