import 'regenerator-runtime';
import '../input.css';
import '../dist/output.css';
import App from './views/app';

const app = new App({
    hamburger: document.querySelector('#hamburger'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#mainContent'),
});
