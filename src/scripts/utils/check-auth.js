import Auth from '../data/key-idb';

const checkAuth = async () => {
  const auth = await Auth.getAccessToken();
  if (!auth && !['', '#/login', '#/register'].includes(window.location.hash)) {
    window.location.hash = '#/login';
    Swal.fire({
      title: 'Oops...',
      text: 'Session expired, please login again',
      icon: 'error',
    });
  }

  if (auth && ['#/login', '#/register'].includes(window.location.hash)) {
    window.location.hash = '#/home';
    Swal.fire({
      title: 'Oops...',
      text: 'You are already logged in',
      icon: 'warning',
    });
  }

  if (['', '#/login', '#/register'].includes(window.location.hash)) {
    document.querySelector('app-navbar').classList.add('hidden');
    document.querySelector('main').classList.remove('mt-10');
    document.querySelector('app-footer').classList.remove('mt-10');
  } else {
    document.querySelector('app-navbar').classList.remove('hidden');
    document.querySelector('main').classList.add('mt-10');
    document.querySelector('app-footer').classList.add('mt-10');
  }
};

export default checkAuth;
