import ApptivityApi from '../../data/apptivity-api';
import { matrixItem, modalContent, taskNotFound } from '../template/template-creator';

const Matrix = {
  async render() {
    return `<div class="flex flex-col mt-10 md:grid md:grid-cols-2 max-w-3xl gap-3 m-4 md:m-auto">
      <app-card-matrix data-bgColor="purple-600" data-borderColor="pink-500" data-scrollThumb="purple-800"data-scrollTrack="purple-400"
        data-title="DO" data-subtitle="Urgent & Important" data-command="Do it now!">
      </app-card-matrix>
      <app-card-matrix data-bgColor="sky-600" data-borderColor="yellow-300" data-scrollThumb="sky-800"data-scrollTrack="sky-400"
        data-title="DECIDE" data-subtitle="Not Urgent & Important" data-command="Schedule a time to do it">
      </app-card-matrix>
      <app-card-matrix data-bgColor="green-500" data-borderColor="rose-500" data-scrollThumb="green-700"data-scrollTrack="green-400"
        data-title="DELEGATE" data-subtitle="Urgent & Not Important" data-command="Who can do it for you?">
      </app-card-matrix>
      <app-card-matrix data-bgColor="red-600" data-borderColor="orange-500" data-scrollThumb="red-800"data-scrollTrack="red-500"
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
      if (e.target.classList.contains('close-modal')) {
        this.modal.hide();
      }
    });
  },

  _renderItemTask(tasks, element) {
    const selectorContainer = document.querySelector(`#${element}`);
    selectorContainer.innerHTML = '';
    if (tasks.length === 0) selectorContainer.innerHTML = taskNotFound();
    tasks.forEach((task) => selectorContainer.innerHTML += matrixItem(task));
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
