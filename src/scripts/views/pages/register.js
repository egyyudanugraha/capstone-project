import Swal from 'sweetalert2';
import ApptivityApi from '../../data/apptivity-api';

const Register = {
  async render() {
    return `<div class="block max-w-lg m-auto mt-10">
    <div class="bg-white p-4 rounded-md shadow-l block mx-4 dark:bg-slate-600" name="card-authentication">
      <div class="block text-center mb-4">
        <h1 class="text-2xl font-bold text-purple-600 dark:text-white">Sign Up</h1>
      </div>
      <div class="p-4 rounded-bl-md mt-3 rounded-md dark:bg-slate-700" id="register" role="tabpanel" aria-labelledby="register-tab">
        <form class="grid gap-3" name="login-form" method="post">
          <div class="grid gap-2">
            <label class="block text-slate-700 after:text-pink-600 after:ml-0.5 after:content-['*'] dark:text-white" for="firstName">First Name</label>
            <input
              class="block w-full border-none h-11 bg-slate-100 placeholder:text-slate-400 rounded-md dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-400 focus:ring-1 focus:ring-purple-600 invalid:focus:ring-pink-500"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div class="grid gap-2">
            <label class="block text-slate-700 after:text-pink-600 after:ml-0.5 after:content-['*'] dark:text-white" for="lastName">Last Name</label>
            <input
              class="block w-full border-none h-11 bg-slate-100 placeholder:text-slate-400 rounded-md dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-400 focus:ring-1 focus:ring-purple-600 invalid:focus:ring-pink-500"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              required
            />
          </div>
          <div class="grid gap-2">
            <label class="block text-slate-700 after:text-pink-600 after:ml-0.5 after:content-['*'] dark:text-white" for="login-email">Email</label>
            <input
              class="block w-full border-none h-11 bg-slate-100 placeholder:text-slate-400 rounded-md dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-400 focus:ring-1 focus:ring-purple-600 invalid:focus:ring-pink-500"
              type="email"
              name="email"
              id="email"
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
              id="password"
              placeholder="Password (min 8)"
              required
            />
          </div>
          <div class="grid grid-flow-col mt-4">
            <button class="block w-full h-11 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded" type="submit">Sign up</button>
          </div>
        </form>
        <p class="dark:text-white text-center mt-3">Already have an account? <a href="#/login" class="hover:underline text-purple-600 dark:text-white">Sign In</a> </p>
      </div>
    </div>
  </div>`;
  },

  async afterRender() {
    document.querySelector('app-navbar').classList.add('hidden');
    const formRegister = document.querySelector('form');
    formRegister.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      try {
        Swal.fire({
          title: 'Signing up...',
          allowOutsideClick: false,
          showConfirmButton: false,
          showCancelButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
        });
        const user = await ApptivityApi.register(data);
        formRegister.reset();
        if (user.name === 'ValidationError' || user.code === 11000) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: user.message || 'Something went wrong!',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: user.message,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '#/login';
            }
          });
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

export default Register;
