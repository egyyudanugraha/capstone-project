import Auth from '../../data/key-idb';

const Landing = {
  _logged: null,
  async render() {
    this._logged = await Auth.getAccessToken();
    return `  
      <section class="bg-slate-100 dark:bg-gray-900">
        <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div class="w-[80%] sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black">
              Manage your task with
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">Apptivity</span>
            </h1>
            <p class="mt-5 sm:mt-10 lg:w-10/12 text-slate-700 dark:text-slate-100 font-normal text-center text-sm sm:text-lg">
            <span class="text-purple-600">Apptivity</span> is a website-based productivity tool that is used to make it easier for users to control productivity or work using the 
            <span class="border-b-2 font-medium border-purple-600">Eisenhower Matrix</span>, <span class="border-b-2 font-medium border-purple-600">Pomodoro techniques</span> and there are also various articles that discuss all things related to productivity.
            </p>
          </div>
          <div class="flex justify-center items-center">
            <button id="get_started"
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 bg-purple-700 transition duration-150 ease-in-out hover:bg-purple-600 text-lg font-semibold lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 border border-purple-700 py-2 sm:py-4"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="bg-white dark:bg-gray-800">
        <path
          class="fill-slate-100 dark:fill-gray-900"
          fill-opacity="1"
          d="M0,192L48,208C96,224,192,256,288,234.7C384,213,480,139,576,106.7C672,75,768,85,864,122.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
  
      <section id="features" class="mx-0 text-center py-20 px-5 bg-white dark:bg-gray-800">
        <h2 class="mb-8 text-4xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">Features</h2>
        <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="block group justify-self-center group-hover:ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Eisenhower Matrix</h5>
            <p class="font-normal text-gray-700 group-hover:text-gray-100 dark:text-gray-400">Helping you determine priorities and workloads</p>
          </div>
          <div class="block group justify-self-center group-hover:ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Pomodoro</h5>
            <p class="font-normal text-gray-700 group-hover:text-gray-100 dark:text-gray-400">A timer that divides multiple sessions for your work time management</p>
          </div>
          <div class="block group justify-self-center group-hover:ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Deadline</h5>
            <p class="font-normal text-gray-700 group-hover:text-gray-100 dark:text-gray-400">You will be notified when the job is approaching the deadline</p>
          </div>
          <div class="block group justify-self-center group-hover:ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Installable</h5>
            <p class="font-normal text-gray-700 group-hover:text-gray-100 dark:text-gray-400">PWA supported, Apptivity can be installed on all devices</p>
          </div>
          <div class="block group justify-self-center group-hover:ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Offline Mode</h5>
            <p class="font-normal text-gray-700 group-hover:text-gray-100 dark:text-gray-400">You can still work even if there is no internet network</p>
          </div>
          <div class="block group justify-self-center group-hover:ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Background Sync</h5>
            <p class="font-normal text-gray-700 group-hover:text-gray-100 dark:text-gray-400">All changes to your task will be saved when you return online</p>
          </div>
        </div>
      </section>
  
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="bg-white dark:bg-gray-800">
        <path
          class="fill-slate-100 dark:fill-gray-900"
          fill-opacity="1"
          d="M0,192L17.1,197.3C34.3,203,69,213,103,213.3C137.1,213,171,203,206,218.7C240,235,274,277,309,250.7C342.9,224,377,128,411,112C445.7,96,480,160,514,181.3C548.6,203,583,181,617,144C651.4,107,686,53,720,32C754.3,11,789,21,823,48C857.1,75,891,117,926,144C960,171,994,181,1029,186.7C1062.9,192,1097,192,1131,170.7C1165.7,149,1200,107,1234,112C1268.6,117,1303,171,1337,165.3C1371.4,160,1406,96,1423,64L1440,32L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>
  
      <section id="about" class="text-center mx-0 py-20 px-5 bg-slate-100 dark:bg-gray-900 p-10">
        <h2 class="mb-8 text-4xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">About Us</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <picture>
                <source srcset="./images/arijaya.webp" type="image/webp">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" data-src="./images/arijaya.jpg" alt="I Nyoman Arijaya Putra"></img>
              </picture>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">I Nyoman Arijaya Putra</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Front-End Developer</span>
              <div class="flex mt-4 space-x-3 lg:mt-6">
                <a
                  href="https://github.com/ArijayaPutra" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-white"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    /></svg
                  >GitHub</a
                >
                <a
                  href="https://www.instagram.com/arijayaa/" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-gray-800 dark:fill-slate-100"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    /></svg
                  >Message</a
                >
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <picture>
                <source srcset="./images/yuda.webp" type="image/webp">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" data-src="./images/yuda.jpg" alt="Egy Yuda Nugraha"></img>
              </picture>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Egy Yuda Nugraha</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Full-Stack Developer</span>
              <div class="flex mt-4 space-x-3 lg:mt-6">
                <a
                  href="https://github.com/egyyudanugraha" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-white"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    /></svg
                  >GitHub</a
                >
                <a
                  href="https://www.instagram.com/_yuda23_/" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-gray-800 dark:fill-slate-100"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    /></svg
                  >Message</a
                >
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <picture>
                <source srcset="./images/aditya.webp" type="image/webp">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" data-src="./images/aditya.jpg" alt="M. Aditya Sahrin"></img>
              </picture>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">M. Aditya Sahrin</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Front-End Developer</span>
              <div class="flex mt-4 space-x-3 lg:mt-6">
                <a
                  href="https://github.com/adityaSahrin" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-white"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    /></svg
                  >GitHub</a
                >
                <a
                  href="https://www.instagram.com/aditya.sahrin/" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-gray-800 dark:fill-slate-100"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    /></svg
                  >Message</a
                >
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center py-10">
              <picture>
                <source srcset="./images/seli.webp" type="image/webp">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" data-src="./images/seli.jpg" alt="Seli Saputri"></img>
              </picture>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Seli Saputri</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Front-End Developer</span>
              <div class="flex mt-4 space-x-3 lg:mt-6">
                <a
                  href="https://github.com/selyvalov" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-white"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    /></svg
                  >GitHub</a
                >
                <a
                  href="https://www.instagram.com/selyvalovee/" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="mr-2" viewBox="0 0 24 24">
                    <path
                      class="fill-gray-800 dark:fill-slate-100"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    /></svg
                  >Message</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <svg xmlns="http://www.w3.org/2000/svg" class="bg-slate-100 dark:bg-gray-900" viewBox="0 0 1440 320">
        <path
          class="fill-white dark:fill-gray-800"
          fill-opacity="1"
          d="M0,288L21.8,293.3C43.6,299,87,309,131,293.3C174.5,277,218,235,262,218.7C305.5,203,349,213,393,218.7C436.4,224,480,224,524,202.7C567.3,181,611,139,655,138.7C698.2,139,742,181,785,208C829.1,235,873,245,916,256C960,267,1004,277,1047,250.7C1090.9,224,1135,160,1178,138.7C1221.8,117,1265,139,1309,160C1352.7,181,1396,203,1418,213.3L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>`;
  },

  async afterRender() {
    document.querySelector('#get_started').addEventListener('click', async () => {
      if (this._logged) {
        window.location.href = '#/home';
      } else {
        window.location.hash = '#/login';
      }
      // window.location.reload();
    });
  },
};

export default Landing;
