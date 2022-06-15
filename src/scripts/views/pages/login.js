import Swal from 'sweetalert2';
import ApptivityApi from '../../data/apptivity-api';

const Login = {
  async render() {
    return `<div class="block max-w-lg m-auto mt-10">
    <div class="bg-white p-4 rounded-md shadow-l block mx-4 dark:bg-slate-600" name="card-authentication">
        <div class="block text-center mb-4">
          <h1 class="text-2xl font-bold text-purple-600 dark:text-white">Sign In</h1>
        </div>
        <div class="p-4 rounded-bl-md mt-3 rounded-md dark:bg-slate-700" id="login" role="tabpanel" aria-labelledby="login-tab">
          <form class="grid gap-3" name="login-form" method="post">
            <div class="grid gap-2">
              <label class="block text-slate-700 after:text-pink-600 after:ml-0.5 after:content-['*'] dark:text-white" for="login-email">Email</label>
              <input
                class="block w-full border-none h-11 bg-slate-100 placeholder:text-slate-400 rounded-md dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-400 focus:ring-1 focus:ring-purple-600 invalid:focus:ring-pink-500"
                type="email"
                name="email"
                id="login-email"
                placeholder="Email"
                required
              />
            </div>
            <div class="grid gap-2">
              <label class="block text-slate-700 after:text-pink-600 after:ml-0.5 after:content-['*'] dark:text-white" for="login-password">Password</label>
              <input
                class="block w-full border-none h-11 bg-slate-100 placeholder:text-slate-400 rounded-md dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-400 focus:ring-1 focus:ring-purple-600 invalid:focus:ring-pink-500"
                type="password"
                name="password"
                minlength="8"
                id="login-password"
                placeholder="Password"
                required
              />
            </div>
            <div class="grid grid-flow-col mt-4">
              <button class="block w-full h-11 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded" type="submit">Sign in</button>
            </div>
          </form>
          <p class="dark:text-white text-center mt-3">No have account? <a href="#/register" class="hover:underline text-purple-600 dark:text-white">Sign up</a> </p>
        </div>
      </div>
  </div>`;
  },

  async afterRender() {
    const formLogin = document.querySelector('form');
    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      try {
        Swal.fire({
          title: 'Signing in...',
          allowOutsideClick: false,
          showConfirmButton: false,
          showCancelButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
        });
        const user = await ApptivityApi.login(data);
        formLogin.reset();
        if (user.error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: user.message,
          });
        } else {
          window.location.href = '#/home';
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    });
  },
};

export default Login;
