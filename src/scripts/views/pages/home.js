import { compareAsc, isToday } from 'date-fns';
import ApptivityApi from '../../data/apptivity-api';
import { deadlineItem, modalContent, taskNotFound } from '../template/template-creator';

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
  </div>
  
  <div class="my-14">
    <div class="how-to-use px-2 flex flex-col gap-8 py-6 bg-white dark:bg-slate-800">
      <h1 class="text-3xl lg:text-4xl text-center text-slate-900 dark:text-slate-100">How to Use</h1>
      <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img src="https://i.postimg.cc/Znk1JPbk/Component-1.png" class="block h-[60%] mx-auto object-cover" alt="adding task" />
            <div class="carousel-caption hidden md:block absolute text-center">
              <p class="text-slate-900">
                <strong class="text-purple-600">Start</strong>
                with creating new task, set your deadline and prioritizing tasks by urgency and importance. Make sure you fill every field, then save your task by pressing
                <strong class="text-purple-600">Save Task</strong>
                button.
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="https://i.postimg.cc/NF7PYWCT/Component-2.png" class="block h-[60%] mx-auto object-cover" alt="prioritized with eisenhower matrix" />
            <div class="carousel-caption hidden md:block absolute text-center">
              <p class="text-slate-900">
                Go to <strong class="text-purple-600">Eisenhower Matrix</strong> and watch your prioritized task results on 4 quadrants. Choose task that you want to work on by clicking task card and you will see details of your task, then
                press <strong class="text-purple-600">Work Now!</strong> button and you will directly go to Pomodoro timer to start working.
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="https://i.postimg.cc/G3kfky32/Component-3.png" class="block h-[60%] mx-auto object-cover" alt="pomodoro timer" />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl">Third slide label</h5>
              <p class="text-slate-900">
                Start working your task by pressing <strong class="text-purple-600">Start</strong> button to start the Pomodoro timer. Checklist the task that you think already <strong class="text-purple-600">complete/finish</strong>. You
                can watch your work history in the <strong class="text-purple-600">History Bar</strong>.
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="https://i.postimg.cc/xTn4g1qP/Component-4.png" class="block h-[60%] mx-auto object-cover" alt="pomodoro timer" />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl">Third slide label</h5>
              <p class="text-slate-900">
                In the home page you can wacth your <strong class="text-purple-600">uncompleted tasks</strong> and <strong class="text-purple-600">tasks to complete</strong>. You can click the task card to see more details about it.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="my-4 md:hidden">
        <ol class="list-decimal grid gap-2 marker:text-purple-600 mx-5 text-slate-900 dark:text-slate-100 lg:text-1xl">
          <li>
            <strong class="text-purple-600">Start</strong>
            with creating new task, set your deadline and prioritizing tasks by urgency and importance. Make sure you fill every field, then save your task by pressing
            <strong class="text-purple-600">Save Task</strong>
            button.
          </li>
          <li>
            Go to <strong class="text-purple-600">Eisenhower Matrix</strong> and watch your prioritized task results on 4 quadrants. Choose task that you want to work on by clicking task card and you will see details of your task, then
            press <strong class="text-purple-600">Work Now!</strong> button and you will directly go to Pomodoro timer to start working.
          </li>
          <li>
            Start working your task by pressing <strong class="text-purple-600">Start</strong> button to start the Pomodoro timer. Checklist the task that you think already <strong class="text-purple-600">complete/finish</strong>. You can
            watch your work history in the <strong class="text-purple-600">History Bar</strong>.
          </li>
          <li>In the home page you can wacth your <strong class="text-purple-600">uncompleted tasks</strong> and <strong class="text-purple-600">tasks to complete</strong>. You can click the task card to see more details about it.</li>
        </ol>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-4 mx-5 mb-10 items-center dark:text-white">
    <div class="md:w-3/4">
      <h1 class="text-3xl lg:text-5xl text-center mb-2">How to <span class="border-b-2 font-medium border-purple-600">prioritizing</span> your to do list</h1>
      <h2 class="text-md text-center">
        By using <strong class="text-purple-600"> Eisenhower Matrix </strong> you can prioritizing tasks by urgency and importance results in <span class="border-b-2 font-medium border-purple-600">4 quadrants</span> with different work
        strategies
      </h2>
    </div>
    <div class="grid md:grid-cols-2 gap-2">
      <div class="p-6 bg-white dark:bg-gray-800 rounded-md drop-shadow-md">
        <h3 class="text-purple-600 pb-4 font-bold text-lg">1. Do First</h3>
        <span>First focus on important tasks to be done the same day.</span>
      </div>

      <div class="p-6 bg-white dark:bg-gray-800 rounded-md drop-shadow-md">
        <h3 class="text-purple-600 pb-4 font-bold text-lg">2. Schedule</h3>
        <span>Important, but not-so-urgent stuff should be scheduled.</span>
      </div>

      <div class="p-6 bg-white dark:bg-gray-800 rounded-md drop-shadow-md">
        <h3 class="text-purple-600 pb-4 font-bold text-lg">3. Delegate</h3>
        <span>What's urgent, but less important, delegate to others.</span>
      </div>

      <div class="p-6 bg-white dark:bg-gray-800 rounded-md drop-shadow-md">
        <h3 class="text-purple-600 pb-4 font-bold text-lg">4. Don't Do</h3>
        <span>What's neither urgent nor important, don't do at all.</span>
      </div>
    </div>
  </div>

  <div class="mt-5 bg-white dark:bg-gray-800 flex flex-col items-center dark:text-white">
    <div class="mx-5 md:mx-10 lg:mx-16">
      <div class="flex py-10 md:flex-row">
        <img src="https://i.postimg.cc/sXy7hY70/Asset-1.png" alt="Pomodoro" class="hidden md:inline md:w-2/4 lg:w-2/5" />

        <div class="flex flex-col md:flex-col md:pl-6 lg:pt-14 lg:mx-24">
          <h1 class="text-3xl lg:text-5xl md:pt-10 text-center md:text-left"><strong class="text-purple-600">Pomodoro</strong> technique to boost your productivity.</h1>
          <h2 class="pt-4 md:py-4 text-center md:text-left lg:pr-20">
            This technique uses a timer to break down work into intervals, traditionally <span class="border-b-2 font-medium border-purple-600">25 minutes</span> in length, separated by short breaks
          </h2>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center mx-5 py-8">
      <h2 class="text-xl lg:text-3xl pb-4 md:text-center">How to use <span class="border-b-2 font-medium border-purple-600">Pomodoro</span> Timer?</h2>
      <ol class="list-decimal marker:text-purple-600 mx-5 lg:text-1xl">
        <li>Add tasks to work</li>
        <li>Select a task to work on</li>
        <li>Start timer and focus on the task for 25 minutes</li>
        <li>Take a break for 5 minutes when the alarm ring</li>
        <li>Iterate 3-4 until you finish the tasks</li>
      </ol>
    </div>
  </div>
  `;
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
};

export default Home;
