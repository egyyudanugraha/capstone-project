class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('p-4', 'bg-white', 'rounded-t-lg', 'flex', 'flex-col', 'md:p-6', 'dark:bg-gray-800', 'mt-10');
    this.innerHTML = `
        <div class="copyright flex md:justify-between w-full">
          <span class="text-sm text-gray-500 m-auto sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">Apptivity</a></span>
          <span class="text-sm text-gray-500 m-auto sm:text-center dark:text-gray-400"> Powered by <a href="https://flowbite.com" class="hover:underline">Flowbite</a></span>
        </div>
        <ul class="flex flex-wrap m-auto items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/egyyudanugraha/capstone-project" class="mr-4 hover:underline md:mr-6">About Us</a>
          </li>
          <li>
            <a href="https://github.com/egyyudanugraha/capstone-project/graphs/contributors" class="hover:underline">Contact</a>
          </li>
        </ul>
    `;
  }
}

customElements.define('app-footer', Footer);
