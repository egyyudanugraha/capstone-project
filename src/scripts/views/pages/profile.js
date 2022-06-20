import Swal from 'sweetalert2';
import ApptivityApi from '../../data/apptivity-api';
import Auth from '../../data/key-idb';

const Profile = {
  async render() {
    return `
    <div class="flex flex-col px-8 gap-4 mx-auto my-6 xl:px-5 lg:flex-row max-w-7xl mb-10">
    <div class="flex flex-col w-full p-5 overflow-hidde bg-white dark:bg-slate-700 border dark:border-0 rounded-lg lg:w-2/3 lg:flex-2">
      <div class="bg-white dark:bg-slate-700 shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h1 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">Profile</h1>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-50">Informasi Pengguna</p>
        </div>
        <div class="border-t border-gray-200 dark:border-slate-900">
            <div class="bg-gray-50 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div class="text-sm font-medium text-gray-500 dark:text-white">Nama Depan</div>
              <input
                type="text"
                name="firstName"
                disabled
                class="mt-1 disabled:bg-transparent dark:disabled:bg-transparent bg-white dark:bg-slate-800 border-0 w-full text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2"
                placeholder="Nama depan"
              />
            </div>
            <div class="bg-white dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div class="text-sm font-medium text-gray-500 dark:text-white">Nama Belakang</div>
              <input
                type="text"
                name="lastName"
                disabled
                class="mt-1 disabled:bg-transparent dark:disabled:bg-transparent bg-white dark:bg-slate-800 border-0 w-full text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2"
                placeholder="Nama belakang"
              />
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div class="text-sm font-medium text-gray-500 dark:text-white">Email</div>
              <input
                type="email"
                disabled
                class="mt-1 disabled:bg-transparent dark:disabled:bg-transparent bg-white dark:bg-slate-800 border-0 w-full text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2"
                placeholder="Email"
              />
            </div>
            <div class="bg-white dark:bg-slate-700 px-4 py-5 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
              <button
                type="button"
                class="btn-edit w-full inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              >Edit</button>
              <button
                type="button"
                class="btn-logout w-full inline-block px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out"
              >Logout</button>
              <button
                type="button"
                class="btn-logout-all w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out"
              >Logout All Device</button>
              <button
                type="button"
                class="btn-delete-user w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >Delete account</button>
            </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full p-5 overflow-hidde bg-white dark:bg-slate-700 border dark:border-0 rounded-lg lg:w-2/3 lg:flex-2">
      <div class="bg-white dark:bg-slate-700 shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h1 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">Change Password</h1>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-50">Change your password</p>
        </div>
        <div class="border-t border-gray-200 dark:border-slate-900">
          <div class="bg-gray-50 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div class="text-sm font-medium text-gray-500 dark:text-white">Old password</div>
            <input type="password" name="old_password" class="mt-1 bg-white dark:bg-slate-800 border-0 w-full text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2 focus:ring-purple-600 invalid:focus:ring-pink-500" placeholder="Old password" minlength="8" required/>
          </div>
          <div class="bg-white dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div class="text-sm font-medium text-gray-500 dark:text-white">New password</div>
            <input type="password" name="new_password" class="mt-1 bg-white dark:bg-slate-800 border-0 w-full text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2 focus:ring-purple-600 invalid:focus:ring-pink-500" placeholder="New password" minlength="8" required/>
          </div>
          <div class="bg-gray-50 dark:bg-slate-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div class="text-sm font-medium text-gray-500 dark:text-white">Confirm new password</div>
            <input type="password" name="confirm_password" class="mt-1 bg-white dark:bg-slate-800 border-0 w-full text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2 focus:ring-purple-600 invalid:focus:ring-pink-500" placeholder="Confirm new password" minlength="8" required/>
          </div>
          <div class="bg-white dark:bg-slate-700 px-4 py-5 flex flex-col md:grid justify-center">
            <button
              type="button"
              class="btn-password w-full inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >Change password</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  },

  userData: {},

  async afterRender() {
    const typeText = document.querySelectorAll('[type="text"]');
    const btnEdit = document.querySelector('.btn-edit');
    const btnPass = document.querySelector('.btn-password');

    const user = await ApptivityApi.getUser();
    typeText.forEach((item) => {
      item.value = user.data[item.name];
    });
    document.querySelector('[type="email"]').value = user.data.email;

    // Edit Profile
    btnEdit.addEventListener('click', async () => {
      if (btnEdit.innerHTML === 'Edit') {
        typeText.forEach((el) => {
          el.removeAttribute('disabled');
          this.userData[el.name] = el.value;
        });
        btnEdit.innerHTML = 'Save';
      } else {
        const userNew = {};
        typeText.forEach((el) => {
          el.setAttribute('disabled', 'disabled');
          userNew[el.name] = el.value;
        });
        btnEdit.innerHTML = 'Updating...';
        const updateUser = await ApptivityApi.updateUser(userNew);
        if (!updateUser.error) {
          this._swAlert(updateUser);
        } else {
          this._swAlert(updateUser);
          typeText.forEach((el) => {
            el.value = this.userData[el.name];
          });
        }
      }
    });

    // Logout
    const btnLogout = document.querySelector('.btn-logout');
    btnLogout.addEventListener('click', () => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!',
      }).then(async (result) => {
        if (result.value) {
          const logout = await ApptivityApi.logout();
          if (!logout.error) {
            Swal.fire({
              title: 'Logged out!',
              icon: 'success',
              timer: 1500,
            }).then(() => {
              window.location.hash = '#/login';
            });
          } else {
            this._swAlert(logout);
          }
        }
      });
    });

    // Logout all devices
    const btnLogoutAll = document.querySelector('.btn-logout-all');
    btnLogoutAll.addEventListener('click', () => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out from all devices',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!',
      }).then(async (result) => {
        if (result.value) {
          const logout = await ApptivityApi.logoutAll();
          if (!logout.error) {
            Swal.fire({
              title: 'Logged out!',
              icon: 'success',
              timer: 1500,
            }).then(() => {
              window.location.hash = '#/login';
            });
          } else {
            this._swAlert(logout);
          }
        }
      });
    });

    // Delete account
    const btnDelete = document.querySelector('.btn-delete-user');
    btnDelete.addEventListener('click', () => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this account!',
        html: '<p>Type <b>Confirm</b> to delete account.</p>',
        icon: 'warning',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: '#7c3aed',
        showLoaderOnConfirm: true,
        preConfirm: async (confirm) => {
          if (confirm === 'Confirm') {
            const deleteUser = await ApptivityApi.deleteUser();
            if (!deleteUser.error) {
              Swal.fire({
                title: 'Deleted!',
                icon: 'success',
                message: deleteUser.message,
                timer: 3000,
              }).then(() => {
                localStorage.removeItem('access_token');
                window.location.hash = '#/login';
              });
            } else {
              this._swAlert(deleteUser);
            }
          } else {
            Swal.showValidationMessage('Type Confirm to delete account.');
          }
        },
      });
    });

    // Edit Password
    btnPass.addEventListener('click', async () => {
      const password = document.querySelector('[name="old_password"]').value;
      const newPassword = document.querySelector('[name="new_password"]').value;
      const confirmPass = document.querySelector('[name="confirm_password"]').value;
      btnPass.innerHTML = 'Updating password...';
      if (newPassword === confirmPass) {
        const updatePass = await ApptivityApi.updatePassword({ password, newPassword });
        if (!updatePass.error) {
          Swal.fire({
            title: 'Password changed!',
            icon: 'success',
            text: `${updatePass.message}, please re-login!`,
            timer: 3000,
          }).then(async () => {
            await ApptivityApi.logoutAll();
            await Auth.deleteAccessToken();
          }).then(() => window.location.hash = '#/login');
        } else {
          this._swAlert(updatePass);
        }
      } else {
        this._swAlert({ error: true, message: 'New password and confirm password not match' });
      }
    });
  },

  _swAlert({ message, error }) {
    Swal.fire({
      title: error ? 'Error' : 'Success',
      text: message,
      icon: error ? 'error' : 'success',
      showConfirmButton: false,
      timer: 4000,
    }).then(() => {
      document.querySelector('.btn-edit').innerHTML = 'Edit';
      document.querySelector('.btn-password').innerHTML = 'Change password';
      document.querySelector('[name="confirm_password"]').value = '';
      document.querySelector('[name="new_password"]').value = '';
      document.querySelector('[name="old_password"]').value = '';
    });
  },
};

export default Profile;
