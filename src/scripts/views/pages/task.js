const Task = {
  async render() {
    return `<div class="grid justify-center grid-cols-[85%] gap-14">
        <div class="add-task">
          <form class="grid md:grid-cols-2 gap-4">
            <div class="title-desc grid gap-2">
              <input type="text" id="title" placeholder="Task title" class="bg-transparent border-0 focus:ring-0 text-2xl placeholder:text-slate-600 dark:placeholder:text-slate-400 text-slate-800 dark:text-white" required />
              <textarea
                id="description"
                class="resize-none bg-transparent border-0 focus:ring-0 text-sm placeholder:text-slate-600 dark:placeholder:text-slate-400 text-slate-800 dark:text-white"
                rows="3"
                placeholder="Description"
                required
              ></textarea>
            </div>
            <div class="date-urgency grid gap-4">
              <label for="date" class="grid gap-2 text-slate-600 dark:text-slate-400">
                <span>Deadline</span>
                <input type="datetime-local" class="bg-transparent border-0" id="date" required />
              </label>
              <label for="urgency" class="grid gap-2 text-slate-600 dark:text-slate-400">
                <span>Urgency</span>
                <input type="range" id="urgency" max="5" value="0" class="h-2 bg-gray-200 appearance-none rounded-lg cursor-pointer dark:bg-gray-700" />
              </label>

              <label for="important" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id="important" class="sr-only peer focus:ring-0" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
                <span class="ml-3 text-sm font-medium text-slate-600 dark:text-gray-300">Important?</span>
              </label>
            </div>
            <div class="grid gap-4 justify-center grid-cols-[80%] md:grid-cols-2 md:col-start-2">
              <button type="reset" class="bg-white border-2 border-slate-200 shadow-md dark:bg-slate-800 dark:text-white text-slate-800 p-3 dark:border-slate-600 rounded-md">Clear</button>
              <button type="submit" class="bg-purple-600 text-white p-3 rounded-md shadow-md">Add task</button>
            </div>
          </form>
        </div>
        <div class="all-task grid gap-3">
          <h2 class="text-2xl text-slate-900 dark:text-white flex justify-center">All Task</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[400px]">
            <table class="table-auto w-full overflow-scroll text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-slate-200">
                <tr>
                  <th scope="col" class="px-6 py-3">Task name</th>
                  <th scope="col" class="px-6 py-3 hidden md:block">Descriptionn</th>
                  <th scope="col" class="px-6 py-3">Deadline</th>
                  <th scope="col" class="px-6 py-3">Completed</th>
                  <th scope="col" class="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Task 1</th>
                  <td class="px-6 py-4 max-w-[100px] hidden md:block">This is task 1ka kajkas</td>
                  <td class="px-6 py-4">29 Januari 2022</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4 text-center">
                    <a href="#" class="font-medium mx-1 text-blue-600 dark:text-purple-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium mx-1 text-red-600 hover:underline">Delte</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
  },

  async afterRender() {
    console.log('After');
  },
};

export default Task;
