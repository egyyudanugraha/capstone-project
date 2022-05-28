const Matrix = {
  async render() {
    return `<div class="flex flex-col mt-10 md:grid md:grid-cols-2 max-w-3xl gap-3 m-4 md:m-auto">
      <div class="card bg-purple-600 dark:bg-gray-700 p-4 rounded-md max-h-[95vh] lg:max-h-[50vh]">
        <div class="card-head flex justify-between border-b-2 border-b-pink-500 dark:border-purple-600 py-1">
          <h2 class="text-3xl text-white">DO</h2>
          <div class="flex flex-col my-auto">
            <p class="text-white text-sm underline">Urgent & Important</p>
            <p class="text-white flex justify-end text-xs italic">Do it now!</p>
          </div>
        </div>
        <div
          class="card-body my-3 flex flex-col gap-2 w-full p-3 max-h-[80vh] lg:h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-purple-400 dark:scrollbar-thumb-slate-800 dark:scrollbar-track-slate-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        >
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s kjkajksj akjskja akjskajsk kajskajks kjas</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
        </div>
      </div>
      <div class="card bg-sky-600 dark:bg-gray-700 p-4 rounded-md max-h-[95vh] lg:max-h-[50vh]">
        <div class="card-head flex justify-between border-b-2 border-b-yellow-300 dark:border-sky-600 py-1">
          <h2 class="text-3xl text-white">DECIDE</h2>
          <div class="flex flex-col my-auto">
            <p class="text-white text-sm underline">Not Urgent & Important</p>
            <p class="text-white flex justify-end text-xs italic">Schedule a time to do it</p>
          </div>
        </div>
        <div
          class="card-body my-3 flex flex-col gap-2 w-full p-3 max-h-[80vh] lg:h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-800 scrollbar-track-sky-400 dark:scrollbar-thumb-slate-800 dark:scrollbar-track-slate-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        >
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s kjkajksj akjskja akjskajsk kajskajks kjas</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
        </div>
      </div>
      <div class="card bg-green-500 dark:bg-gray-700 p-4 rounded-md max-h-[95vh] lg:max-h-[50vh]">
        <div class="card-head flex justify-between border-b-2 border-b-rose-500 dark:border-green-500 py-1">
          <h2 class="text-3xl text-white">DELEGATE</h2>
          <div class="flex flex-col my-auto">
            <p class="text-white text-sm underline">Urgent & Not Important</p>
            <p class="text-white flex justify-end text-xs italic">Who can do it for you?</p>
          </div>
        </div>
        <div
          class="card-body my-3 flex flex-col gap-2 w-full p-3 max-h-[80vh] lg:h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-400 dark:scrollbar-thumb-slate-800 dark:scrollbar-track-slate-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        >
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s kjkajksj akjskja akjskajsk kajskajks kjas</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
        </div>
      </div>
      <div class="card bg-red-600 dark:bg-gray-700 p-4 rounded-md max-h-[95vh] lg:max-h-[50vh]">
        <div class="card-head flex justify-between border-b-2 border-b-orange-500 dark:border-red-600 py-1">
          <h2 class="text-3xl text-white">DELETE</h2>
          <div class="flex flex-col my-auto">
            <p class="text-white text-sm underline">Not Urgent & Not Important</p>
            <p class="text-white flex justify-end text-xs italic">Eliminate it</p>
          </div>
        </div>
        <div
          class="card-body my-3 flex flex-col gap-2 w-full p-3 max-h-[80vh] lg:h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-red-500 dark:scrollbar-thumb-slate-800 dark:scrollbar-track-slate-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        >
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s kjkajksj akjskja akjskajsk kajskajks kjas</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
          <div class="item bg-slate-50 dark:bg-gray-800 dark:text-white p-2 rounded-md">Task 1200s</div>
        </div>
      </div>
    </div>`;
  },

  async afterRender() {
    console.log('afterRender');
  },
};

export default Matrix;
