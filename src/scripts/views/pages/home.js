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
    <div id="indicators-carousel" class="relative bg-white dark:bg-gray-800  " data-carousel="static">
    <h1 class="text-3xl lg:text-5xl lg:text-orange-400 xl:text-green-400 text-center py-4">How to Use</h1>
    <div class="overflow-hidden relative h-80 md:h-96 md:mx-20 xl:h-128 ">

        <div class="hidden duration-700 ease-in-out text-center px-4" data-carousel-item="active">
            <img src="https://i.postimg.cc/Y0mbMbYm/component-1.png" class="md:w-4/5 lg:w-3/5 xl:w-3/5 m-auto" alt="">
            <span class="text-xs xl:px-30 "><strong class="text-purple-600">Start</strong> with creating new task, set your deadline and prioritizing tasks by urgency and importance.
                Make sure you fill every field, then save your task by pressing<strong class="text-purple-600"> Save Task</strong> button. </span>
        </div>

        <div class="hidden duration-700 ease-in-out text-center px-4" data-carousel-item>
            <img src="https://i.postimg.cc/s2Rm5VHn/component-2.png" class="md:w-4/5 lg:w-3/5 m-auto" alt="">
            <span class="text-xs"> Go to <strong class="text-purple-600">Eisenhower Matrix</strong> and watch your prioritized task results on 4 quadrants. 
                Choose task that you want to work on by clicking task card and you will see details of your task, 
                then press <strong class="text-purple-600">Work Now!</strong> button and you will directly go to Pomodoro timer to start working.</span>
        </div>

        <div class="hidden duration-700 ease-in-out text-center px-4" data-carousel-item>
            <img src="https://i.postimg.cc/FRrxnT43/component-3.png" class="md:w-4/5 lg:w-3/5 m-auto" alt="">
            <span class="text-xs"> Start working your task by pressing <strong class="text-purple-600">Start</strong> button to start the Pomodoro timer.  
                Checklist the task that you think already <strong class="text-purple-600">complete/finish</strong>. You can watch your work history in the <strong class="text-purple-600">History Bar</strong>.</span>
        </div>
        <div class="hidden duration-700 ease-in-out text-center px-4" data-carousel-item>
            <img src="https://i.postimg.cc/Rh8Qh9nL/component-4.png "class="md:w-4/5 lg:w-3/5  m-auto" alt="">
            <span class="text-xs">In the home page you can wacth your <strong class="text-purple-600">uncompleted tasks</strong> and <strong class="text-purple-600">tasks to complete</strong>.
                You can click the task card to see more details about it.</span>
        </div>
        
        <div class="flex items-center justify-center absolute inset-x-0 bottom-3 z-30 space-x-3">
            <button type="button" class="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        </div>

        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-1/2 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex justify-center items-center w-6 h-6 rounded-full bg-white/30 dark:bg-gray-100/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-3 h-3 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
        </button>

         <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-1/2 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex justify-center items-center w-6 h-6 rounded-full bg-white/30 dark:bg-gray-100/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-3 h-3 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
          </button>
      </div>
  </div>
</div>

    <div class="flex flex-col mx-5 items-center dark:text-white ">
      <div class="md:w-3/4">
      <h1 class="text-3xl lg:text-5xl text-center pt-4 pb-8">How to prioritizing your to do list..</h1>
      <h2 class="text-md text-center">By using <strong class="text-purple-600"> Eisenhower Matrix </strong> you can prioritizing tasks by urgency and 
      importance results in 4 quadrants with different work strategies:
      </h2>
      </div>
        <div class="flex flex-col pt-4 md:flex-row justify-center m-auto ">
          <div class="flex flex-col bg-white dark:bg-gray-800   w-52 h-52 rounded-md drop-shadow-md mx-2 my-2 ">
            <div class="text-xs py-5 px-3 m-auto mx-5">
            <h3 class="text-purple-600 pb-4">1. Do First</h3>
            <span>First focus
            on important tasks
            to be done the same day.</span>
            </div>
          </div>

          <div class="flex flex-col bg-white dark:bg-gray-800  w-52 h-52 rounded-md drop-shadow-md mx-2 my-2">
            <div class="text-xs py-5 px-3 m-auto mx-5">
            <h3 class="text-purple-600 pb-4">2. Schedule</h3>
            <span>Important, but
            not-so-urgent stuff
            should be scheduled.</span>
            </div>
          </div>
          </div>

          <div class="flex flex-col pb-8 md:flex-row  justify-center m-auto">
          <div class="flex flex-col bg-white dark:bg-gray-800  w-52 h-52 rounded-md drop-shadow-md mx-2 my-2">
            <div class="text-xs py-5 px-3 m-auto mx-5">
            <h3 class="text-purple-600 pb-4">3. Delegate</h3>
            <span>What’s urgent,
            but less important,
            delegate to others.</span>
            </div>
          </div>

          <div class="flex flex-col bg-white dark:bg-gray-800 w-52 h-52 rounded-md drop-shadow-md mx-2 my-2">
            <div class="text-xs py-5 px-3 m-auto mx-5">
            <h3 class="text-purple-600 pb-4">4. Don’t Do</h3>
            <span>What’s neither urgent
            nor important,
            don’t do at all.</span>
            </div>
          </div>

        </div>
    </div>

    <div class="bg-white dark:bg-gray-800 flex flex-col items-center dark:text-white ">
      <div class="mx-5 md:mx-10 lg:mx-16">
        <div class="flex py-10 md:flex-row">
          <img src="https://i.postimg.cc/sXy7hY70/Asset-1.png" alt="Pomodoro" class="hidden md:inline md:w-2/4 lg:w-2/5">

          <div class="flex flex-col md:flex-col md:pl-6 lg:pt-14 lg:mx-24  ">
          <h1 class="text-3xl lg:text-5xl md:pt-10 text-center md:text-left"><strong class="text-purple-600">Pomodoro</strong> technique
          to boost your productivity.</h1>
          <h2 class="pt-4 md:py-4 text-center md:text-left lg:pr-20">This technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks</h2>
          </div>
        </div>
      </div>

    <div class="flex flex-col items-center mx-5 py-8">
    <h2 class="text-xl lg:text-3xl  pb-4 md:text-center">How to use Pomodoro Timer?</h2>
      <ol class="list-decimal mx-5 lg:text-1xl ">
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
