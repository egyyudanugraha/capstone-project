import 'regenerator-runtime';
import '../styles/style.css';
import 'flowbite';
import './components/navbar';
import './components/card-matrix';
import './components/modal';
import './components/footer';
import App from './views/app';

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
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
