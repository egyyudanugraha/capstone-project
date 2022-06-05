import { format, formatDistanceStrict, formatDistanceToNowStrict } from 'date-fns';

const _convertDate = (date) => {
  const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const time = dateObj.toLocaleTimeString();

  return `${day} ${monthString[month - 1]} ${year}, ${time}`;
};

const _urgencyToString = (urgent) => {
  if (urgent < 3) {
    return 'Low';
  } if (urgent === 3) {
    return 'Normal';
  }
  return 'High';
};

const taskItemTable = (task) => `<tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<th scope="row" class="px-6 py-4 md:min-w-[170px] font-medium text-gray-900 dark:text-white whitespace-nowrap">${task.title}</th>
<td class="px-6 py-4 hidden md:block">${_urgencyToString(task.urgency)}</td>
<td class="px-6 py-4">${_convertDate(task.deadline)}</td>
<td class="px-6 py-4 hidden md:block">${task.completed ? 'Yes' : 'No'}</td>
<td class="px-6 py-4 text-center">
  <button data-id="${task._id}" class="btn-detail text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-modal-toggle="modalItemTask">Detail</button>
  <button data-id="${task._id}" class="btn-edit focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Edit</button>
  <button data-id="${task._id}" class="btn-delete focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
</td>
</tr>`;

const historyItemTable = (task) => `<tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<th scope="row" class="px-6 py-4 md:min-w-[170px] font-medium text-gray-900 dark:text-white whitespace-nowrap">${task.task}</th>
<td class="px-6 py-4">${formatDistanceStrict(new Date(task.start_date), new Date(task.end_date))}</td>
<td class="px-6 py-4">${format(new Date(task.end_date), 'PPPPpp')}</td>
</tr>`;

const matrixItem = (task) => `<button data-id="${task._id}" class="btn-modal block bg-slate-50 hover:bg-slate-100 text-left text-slate-800 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white p-2 rounded-md" type="button" data-modal-toggle="modalItemTask">
${task.title}
</button>`;

const deadlineItem = (task) => `<button data-id="${task._id}" class="btn-modal flex bg-slate-50 hover:bg-slate-100 text-left text-slate-800 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white p-2 rounded-md" type="button" data-modal-toggle="modalItemTask">
<span class="w-[80%]">${task.title}</span>
<span class="text-xs m-auto">${formatDistanceToNowStrict(new Date(task.deadline), { addSuffix: true })}</span>
</button>`;

const pomodorItemTask = (task) => `<div class="item bg-white rounded-md p-2 w-full flex gap-2">
<input type="checkbox" data-id="${task._id}" class="checkbox w-8 h-8 bg-slate-400 checked:text-amber-500 focus:ring-amber-500 rounded-md border-0 my-auto"/>
<span class="text-md text-slate-800 my-auto">${task.title}</span>
</div>`;

const taskNotFound = (msg) => `
<p class="text-center text-white dark:text-white italic text-sm">${msg}, 
<a href="#/tasks" class="underline underline-offset-1 not-italic hover:decoration-purple-600">create a new task</a></p>
`;

const modalContent = (task) => `
<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <!-- Modal header -->
    <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">${task.title}</h3>
    </div>
    <!-- Modal body -->
    <div class="p-6 space-y-6 flex flex-col md:flex-row gap-3 text-slate-800  dark:text-white">
        <div class="detailTask md:w-[65%] ">
            <div class="description my-2">
                <span class="font-bold">Description</span>
                <p>${task.description}</p>
            </div>
            <div class="completed my-2">
                <span class="font-semibold">Completed</span>
                <p>${task.completed}</p>
            </div>
            <div class="urgency my-2">
                <span class="font-semibold">Urgency</span>
                <p>${task.urgency > 3 ? 'High' : task.urgency > 2 ? 'Normal' : 'Low'}</p>
            </div>
            <div class="important my-2">
                <span class="font-semibold">Important</span>
                <p>${task.important ? 'Yes' : 'No'}</p>
            </div>
        </div>
        <div class="deadline text-center">
            <span class="font-semibold">Deadline</span>
            <p class="my-1 text-7xl border-b-2 border-purple-600">${format(new Date(task.deadline), 'p')}</p>
            <p class="my-1 text-xl">${format(new Date(task.deadline), 'PP')}</p>
            <span class="bg-purple-600 text-white text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-purple-600 dark:text-white">
              <svg class="mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
              ${formatDistanceToNowStrict(new Date(task.deadline), { addSuffix: true })}
            </span>
        </div> 
    </div>
    <!-- Modal footer -->
    <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <a href="#/pomodoro" class="work-now text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Work now!</a>
        <button type="button" class="close-modal text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Close</button>
    </div>
</div>
`;

export {
  taskItemTable, matrixItem, taskNotFound, modalContent, pomodorItemTask, historyItemTable, deadlineItem,
};
