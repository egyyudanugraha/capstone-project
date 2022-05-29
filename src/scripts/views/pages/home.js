const Home = {
  async render() {
    return `<div class="dashboard flex flex-col gap-8">
    <div class="grid md:grid-cols-2">
      <div class="rounded-lg mx-6">
        <table class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 flex justify-center text-xl text-slate-800 dark:text-slate-100">Recommended tasks to complete</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>
            <div class="w-full max-h-[50vh] pb-4 overflow-y-auto grid my-3 gap-2 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-500">
              
              <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                <div class="text-[11px] my-auto">3 Hari lagi</div>
                </div>
            </div>
          </td>
        </tr>
          </tbody>
        </table>
      </div>
      <div class="rounded-lg mx-6">
        <table class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 flex justify-center text-xl text-slate-800 dark:text-slate-100">Uncompleted Tasks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="w-full max-h-[50vh] pb-4 overflow-y-auto grid my-3 gap-2 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-500">
                  <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                    <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                  </div>
                  <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                    <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                  </div>
                  <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                    <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                  </div>
                  <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                    <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                  </div>
                  <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                    <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                  </div>
                  <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                    <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                  </div>
                  <div class="bg-white shadow-md h-12 rounded-md mx-4 dark:bg-slate-800 flex justify-between px-6">
                    <div class="text-lg my-auto max-w-[50%] text-slate-700 dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">Task 1 (max 30 char) 12121212 3 Task 1 (max 30 char) 12121212 3</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Recommended Article -->
    <div class="mt-10 mx-2">
      <h3 class="flex justify-center text-2xl leading-6 mb-6 font-medium text-slate-800 dark:text-slate-100">Recommended Articles</h3>
      <div class="articles flex gap-3 flex-wrap justify-center">
        <div class="max-w-md md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="https://source.unsplash.com/600x400/?tech" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-md md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="https://source.unsplash.com/600x400/?tech" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-md md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="https://source.unsplash.com/600x400/?tech" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-md md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="https://source.unsplash.com/600x400/?tech" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-md md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="https://source.unsplash.com/600x400/?tech" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-md md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="https://source.unsplash.com/600x400/?tech" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  },

  async afterRender() {
    console.log('afterRender');
  },
};

export default Home;
