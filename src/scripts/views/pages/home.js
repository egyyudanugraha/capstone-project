import { compareAsc, isToday } from 'date-fns';
import ApptivityApi from '../../data/apptivity-api';
import NewsApi from '../../data/news-api';
import {
  cardArticle, deadlineItem, modalContent, taskNotFound,
} from '../template/template-creator';

const Home = {
  allTask: null,
  modal: null,

  async render() {
    const tasks = await ApptivityApi.getAllTask('completed=false');
    this.allTask = tasks;

    return `<div class="dashboard flex flex-col gap-10">
    <div class="flex flex-col md:grid md:grid-cols-2 max-w-3xl md:max-w-full gap-3 mx-6 md:mx-14">
      <app-card-matrix class="bg-amber-600 border-yellow-200 dark:border-amber-600 scrollbar-thumb-amber-800 scrollbar-track-amber-500"
        data-title="Deadline Today" data-subtitle="Tasks to complete" data-command="List tasks deadline today">
      </app-card-matrix>
      <app-card-matrix class="bg-teal-600 border-cyan-400 dark:border-teal-600 scrollbar-thumb-teal-800 scrollbar-track-teal-400"
        data-title="All Tasks" data-subtitle="Uncompleted tasks" data-command="List all tasks uncompleted">
      </app-card-matrix>
      <app-modal></app-modal>
    </div>

    <!-- Recommended Article -->
    <div class="mx-2">
      <h3 class="flex justify-center text-2xl leading-6 mb-6 font-medium text-slate-800 dark:text-slate-100">Recommended article of the week</h3>
      <div class="articles grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center mx-4 md:mx-8">
        
      </div>
    </div>
  </div>`;
  },

  async afterRender() {
    const deadlineContent = document.querySelector('#deadline');
    const allContent = document.querySelector('#all');

    this._renderItemTask(deadlineContent, 'deadline');
    this._renderItemTask(allContent);

    const loadDeadline = setInterval(() => {
      this._renderItemTask(deadlineContent, 'deadline');
      this._renderItemTask(allContent);
    }, 60000); // 1 minute

    window.addEventListener('hashchange', () => {
      clearInterval(loadDeadline);
    });

    this.modal = new Modal(document.getElementById('modalItemTask'), {
      placement: 'center',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    });

    [deadlineContent, allContent].forEach((element) => {
      element.addEventListener('click', async (e) => {
        if (e.target.classList.contains('btn-modal') || e.target.parentElement.classList.contains('btn-modal')) {
          const taskDetail = this.allTask.find((item) => item._id === e.target.dataset.id || item._id === e.target.parentElement.dataset.id);
          document.querySelector('#modal-content').innerHTML = modalContent(taskDetail);
          this.modal.show();
        }
      });
    });

    this._renderRecommendedArticle();

    document.querySelector('#modalItemTask').addEventListener('click', (e) => {
      if (e.target.classList.contains('close-modal') || e.target.classList.contains('work-now')) {
        this.modal.hide();
      }
    });
  },

  async _renderItemTask(selector, filter = 'all') {
    const content = selector;
    let tasks = this.allTask;
    if (filter === 'deadline') {
      tasks = tasks.filter((task) => isToday(new Date(task.deadline)));
    }

    tasks = tasks.sort((a, b) => compareAsc(a.deadline, b.deadline));

    content.innerHTML = '';
    if (tasks.length === 0) content.innerHTML = taskNotFound('No task found');
    tasks.forEach((task) => {
      content.innerHTML += deadlineItem(task);
    });
  },

  async _renderRecommendedArticle() {
    const articlesContent = document.querySelector('.articles');
    articlesContent.innerHTML = '';
    const articles = await NewsApi.getNews('productivity', 4);
    articles.forEach((article) => {
      articlesContent.innerHTML += cardArticle(article);
    });
  },
};

export default Home;
