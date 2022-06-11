import ApptivityApi from '../../data/apptivity-api';
import { matrixItem, modalContent, taskNotFound } from '../template/template-creator';

const Matrix = {
  async render() {
    return `<div class="flex flex-col mt-10 md:grid md:grid-cols-2 max-w-3xl gap-3 m-4 md:m-auto">
      <app-card-matrix class="bg-purple-600 border-pink-500 dark:border-purple-600 scrollbar-thumb-purple-800 scrollbar-track-purple-400"
        data-title="DO" data-subtitle="Urgent & Important" data-command="Do it now!">
      </app-card-matrix>
      <app-card-matrix class="bg-sky-600 border-yellow-300 dark:border-sky-600 scrollbar-thumb-sky-800 scrollbar-track-sky-400"
        data-title="DECIDE" data-subtitle="Not Urgent & Important" data-command="Schedule a time to do it">
      </app-card-matrix>
      <app-card-matrix class="bg-green-600 border-rose-500 dark:border-green-600 scrollbar-thumb-green-700 scrollbar-track-green-400"
        data-title="DELEGATE" data-subtitle="Urgent & Not Important" data-command="Who can do it for you?">
      </app-card-matrix>
      <app-card-matrix class="bg-red-600 border-orange-500 dark:border-red-600 scrollbar-thumb-red-800 scrollbar-track-red-400"
        data-title="DELETE" data-subtitle="Not Urgent & Not Important" data-command="Eliminate it">
      </app-card-matrix>
      <app-modal></app-modal>`;
  },

  tasks: null,
  content: ['do', 'decide', 'delegate', 'delete'],
  modal: null,

  async afterRender() {
    const matrix = await ApptivityApi.getMatrix();
    this.tasks = await ApptivityApi.getAllTask();
    this.content.forEach((item) => {
      this._renderItemTask(matrix[item], item);
    });
    this.modal = new Modal(document.getElementById('modalItemTask'), {
      placement: 'center',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    });

    document.querySelector('#modalItemTask').addEventListener('click', (e) => {
      if (e.target.classList.contains('close-modal') || e.target.classList.contains('work-now')) {
        this.modal.hide();
      }
    });
  },

  _renderItemTask(tasks, element) {
    const selectorContainer = document.querySelector(`#${element}`);
    selectorContainer.innerHTML = '';
    if (tasks.length === 0) selectorContainer.innerHTML = taskNotFound('No task found');
    tasks.forEach((task) => (selectorContainer.innerHTML += matrixItem(task)));
    selectorContainer.addEventListener('click', async (e) => {
      if (e.target.classList.contains('btn-modal')) {
        const task = this.tasks.find((item) => item._id === e.target.dataset.id);
        document.querySelector('#modal-content').innerHTML = modalContent(task);
        this.modal.show();
      }
    });
  },
};

export default Matrix;
