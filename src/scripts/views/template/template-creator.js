const _convertDate = (date) => {
  const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${day} ${monthString[month - 1]} ${year}`;
};

const _urgencyToString = (urgent) => {
  if (urgent < 3) {
    return 'Low';
  } else if (urgent === 3) {
    return 'Normal';
  } else {
    return 'High';
  }
};

const taskItemTable = (task) => `<tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">${task.title}</th>
<td class="px-6 py-4">${_urgencyToString(task.urgency)}</td>
<td class="px-6 py-4">${_convertDate(task.deadline)}</td>
<td class="px-6 py-4">${task.completed ? 'Yes' : 'No'}</td>
<td class="px-6 py-4 text-center">
  <a href="#/tasks" data-id="${task._id}" class="btn-edit font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
  <a href="#/tasks" data-id="${task._id}" class="btn-delete font-medium mx-1 text-red-600 hover:underline">Delete</a>
</td>
</tr>`;

export { taskItemTable };
