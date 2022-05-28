import 'regenerator-runtime';
import '../styles/style.css';
import 'flowbite';
import './components/navbar';
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
});
