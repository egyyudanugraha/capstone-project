import { isToday } from 'date-fns';
import Swal from 'sweetalert2';
import ApptivityApi from '../../data/apptivity-api';
import { modalContent, taskItemTable } from '../template/template-creator';

const Task = {
  async render() {
    return `<div class="grid justify-center grid-cols-[85%] gap-14">
        <div class="add-task">
          <form class="grid md:grid-cols-2 gap-4">
            <div class="title-desc grid gap-2 md:row-span-2">
              <input type="text" class="hidden" id="task_id" name="task_id">
              <input type="text" id="title" placeholder="Task title" class="md:text-xl md:placeholder:text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" required />
              <textarea
                id="description"
                class="resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                rows="9"
                placeholder="Description (optional)"
              ></textarea>
            </div>
            <div class="date-urgency grid gap-4">
              <label for="date" class="grid gap-2 text-slate-600 dark:text-slate-400">
                <span>Deadline</span>
                <input type="datetime-local" class="bg-gray-50 border appearance-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" id="date" required />
              </label>
              <label for="urgency" class="grid gap-2 text-slate-600 dark:text-slate-400">
                <span>Urgency</span>
                <input type="range" id="urgency" max="5" value="0" class="h-2 bg-gray-200 appearance-none rounded-lg cursor-pointer dark:bg-gray-700" />
              </label>

              <label for="important" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id="important" class="sr-only peer focus:ring-0" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] md:after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
                ></div>
                <span class="ml-3 text-sm font-medium text-slate-600 dark:text-gray-300">Important?</span>
              </label>
            </div>
            <div class="grid gap-4 justify-center grid-cols-[80%] md:grid-cols-2 md:col-start-2">
              <button type="reset" class="bg-white border-2 border-slate-200 shadow-md dark:bg-slate-800 dark:text-white text-slate-800 p-3 dark:border-slate-600 rounded-md">Clear</button>
              <button type="submit" class="bg-purple-600 flex items-center gap-1 justify-center text-white p-3 rounded-md shadow-md">
                Save Task
              </button>
            </div>
          </form>
        </div>
        <div class="all-task grid gap-3">
          <h2 class="text-2xl text-slate-900 dark:text-white flex justify-center">All Task</h2>
          <div class="gird sm:flex justify-between gap-2">
            <ul class="w-full sm:max-w-[40vh] mb-2 sm:mb-0 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="flex gap-2 justify-between w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <span>Deadline today</span>
                <span id="deadline-today"></span>
              </li>
              <li class="flex gap-2 justify-between w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                <span>Completed</span>
                <span id="completed"></span>
              </li>
              <li class="flex gap-2 justify-between w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                <span>Uncompleted</span>
                <span id="uncompleted"></span>
              </li>
              <li class="flex gap-2 justify-between w-full px-4 py-2 border-b border-gray-200 rounded-b-lg dark:border-gray-600">
                <span>Total</span>
                <span id="total"></span>
              </li>
            </ul>
            <div id="select-delete" class="flex flex-col md:flex-row gap-2">
              <button class="btn-delete-all focus:outline-none mt-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete All Task</button>
              <select id="filter" class="bg-white md:mt-auto border-slate-200 dark:bg-slate-700 rounded-md dark:border-0 focus:ring-0 text-sm placeholder:text-slate-600 dark:placeholder:text-slate-400 text-slate-800 dark:text-white focus:ring-purple-600">
                <option value="">Show all</option>
                <option value="priority=high">Sort by high priority</option>
                <option value="priority=low">Sort by low priority</option>
                <option value="completed=true">Filter by completed</option>
                <option value="completed=false">Filter by uncompleted</option>
              </select>
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[400px]  scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-500">
            <table class="table-auto w-full overflow-scroll text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-slate-200">
                <tr>
                  <th scope="col" class="px-6 py-3">No</th>
                  <th scope="col" class="px-6 py-3">Task name</th>
                  <th scope="col" class="px-6 py-3 hidden md:block">Urgency</th>
                  <th scope="col" class="px-6 py-3">Deadline</th>
                  <th scope="col" class="px-6 py-3 hidden md:block">Completed</th>
                  <th scope="col" class="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <app-modal></app-modal>
      `;
  },

  tasks: null,
  modal: null,

  async afterRender() {
    this._renderTask();
    this._renderInfo();
    this.modal = new Modal(document.getElementById('modalItemTask'), {
      placement: 'center',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    });

    document.querySelector('#modalItemTask').addEventListener('click', (e) => {
      if (e.target.classList.contains('close-modal') || e.target.classList.contains('work-now')) {
        this.modal.hide();
      }
    });
    const formTask = document.querySelector('form');
    formTask.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.submitter.setAttribute('disabled', 'disabled');

      if (!navigator.onLine) {
        Swal.fire({
          title: 'Oops...',
          icon: 'info',
          text: 'You are offline, but don\'t worry, your task will be saved when you come back online.',
        }).then(() => {
          this._resetForm(formTask, e);
        });
      }

      const taskId = e.target.task_id.value;
      const task = {
        title: e.target.title.value,
        description: e.target.description.value,
        deadline: new Date(e.target.date.value).getTime(),
        urgency: e.target.urgency.value,
        important: e.target.important.checked,
      };

      let responseTask = null;
      if (taskId !== '') {
        e.submitter.innerHTML = this._loadingBtn('Updating');
        responseTask = await ApptivityApi.updateTask(taskId, task);
      } else {
        e.submitter.innerHTML = this._loadingBtn('Adding');
        responseTask = await ApptivityApi.createTask(task);
      }

      Swal.fire({
        title: 'Success!',
        icon: 'success',
        text: responseTask.message,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        this._resetForm(formTask, e);
      });
    });

    // filter
    const filter = document.querySelector('#filter');
    filter.addEventListener('change', async (e) => {
      this._renderTask(e.target.value);
    });

    // update & delete task
    document.querySelector('tbody').addEventListener('click', async (e) => {
      if (e.target.classList.contains('btn-detail')) {
        const task = this.tasks.find((item) => item._id === e.target.dataset.id);
        document.querySelector('#modal-content').innerHTML = modalContent(task);
        this.modal.show();
      } else if (e.target.classList.contains('btn-edit')) {
        const task = this.tasks.find((item) => item._id === e.target.dataset.id);
        formTask.task_id.value = task._id;
        formTask.title.value = task.title;
        formTask.description.value = task.description;
        formTask.date.value = this._convertToLocalTime(task.deadline);
        formTask.urgency.value = task.urgency;
        formTask.important.checked = task.important;
      } else if (e.target.classList.contains('btn-delete')) {
        const task = this.tasks.find((item) => item._id === e.target.dataset.id);
        Swal.fire({
          title: `Are you sure to delete ${task.title}?`,
          text: 'If you delete this task, the history of this task will also be deleted',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
          if (result.isConfirmed) {
            if (!navigator.onLine) {
              Swal.fire({
                title: 'Oops...',
                icon: 'info',
                text: 'You are offline, but don\'t worry, your task will be delete when you come back online.',
              });
            }
            const deleteTask = await ApptivityApi.deleteTask(e.target.dataset.id);

            Swal.fire({
              title: 'Success',
              icon: 'success',
              html: deleteTask.message,
              showConfirmButton: false,
              timer: 2000,
            }).then(() => {
              this._renderInfo();
              this._renderTask();
            });
          }
        });
      }
    });

    // delete all task
    document.querySelector('.btn-delete-all').addEventListener('click', async () => {
      Swal.fire({
        title: 'Are you sure to delete all tasks?',
        text: 'If you delete all tasks, the history of all tasks will also be deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#b91c1c',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (!navigator.onLine) {
            Swal.fire({
              title: 'Oops...',
              icon: 'info',
              text: 'You are offline, but don\'t worry, your task will be delete when you come back online.',
            });
          }
          const deleteAllTask = await ApptivityApi.deleteAllTask();
          Swal.fire({
            title: 'Success',
            icon: 'success',
            html: `${deleteAllTask.message}`,
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            this._renderInfo();
            this._renderTask();
          });
        }
      });
    });
  },

  async _renderTask(params = '') {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    const tasks = await ApptivityApi.getAllTask(params);
    this.tasks = tasks;
    if (tasks.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="6" class="text-center">No task found</td></tr>';
      return;
    }

    tasks.forEach((task, index) => {
      tableBody.innerHTML += taskItemTable(task, index + 1);
    });
  },

  async _renderInfo() {
    const selectorDeadline = document.querySelector('#deadline-today');
    const selectorCompleted = document.querySelector('#completed');
    const selectorUncompleted = document.querySelector('#uncompleted');
    const selectorTotal = document.querySelector('#total');
    const tasks = await ApptivityApi.getAllTask();
    const deadline = tasks.filter((task) => isToday(new Date(task.deadline)) && !task.completed).length;
    const completed = tasks.filter((task) => task.completed).length;
    const uncompleted = tasks.filter((task) => !task.completed).length;
    const total = tasks.length;

    selectorDeadline.innerHTML = `: ${deadline} task`;
    selectorCompleted.innerHTML = `: ${completed} task`;
    selectorUncompleted.innerHTML = `: ${uncompleted} task`;
    selectorTotal.innerHTML = `: ${total} task`;
  },

  _loadingBtn(msg) {
    return `<svg role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    ${msg}...`;
  },

  _loadingBtnReset() {
    return 'Save task';
  },

  _resetForm(selector, event) {
    const formTask = selector;
    const e = event;
    e.submitter.removeAttribute('disabled');
    e.submitter.innerHTML = this._loadingBtnReset();
    formTask.reset();
    this._renderTask();
    this._renderInfo();
  },

  _convertToLocalTime(time) {
    const result = new Date(new Date(time).setMinutes(new Date(time).getMinutes() - new Date(time).getTimezoneOffset())).toISOString();
    return result.substring(0, 23);
  },
};

export default Task;
