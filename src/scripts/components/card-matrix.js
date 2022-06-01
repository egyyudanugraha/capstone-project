class CardMatrix extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('.card').classList.add(`bg-${this.dataset.bgcolor}`);
    this.querySelector('.card-head').classList.add(`border-${this.dataset.bordedcolor}`, `dark:border-${this.dataset.bgcolor}`);
    this.querySelector('h2').innerHTML = this.dataset.title;
    this.querySelector('.card-body').setAttribute('id', this.dataset.title.toLowerCase());
    this.querySelector('#subtitle').innerHTML = this.dataset.subtitle;
    this.querySelector('#command').innerHTML = this.dataset.command;
    this.querySelector('.card-body').classList.add(`scrollbar-thumb-${this.dataset.scrollthumb}`, `scrollbar-track-${this.dataset.scrolltrack}`);
  }

  render() {
    this.innerHTML = `<div class="card p-4 dark:bg-gray-700 rounded-md max-h-[95vh] lg:max-h-[50vh] min-h-[40vh]">
            <div class="card-head flex justify-between border-b-2 py-1 dark:bg-gray-700">
                <h2 class="text-3xl text-white"></h2>
                <div class="flex flex-col my-auto">
                <p id="subtitle" class="text-white text-sm underline"></p>
                <p id="command" class="text-white flex justify-end text-xs italic"></p>
                </div>
            </div>
                <div class="card-body my-3 flex flex-col gap-2 w-full p-3 max-h-[80vh] lg:h-[80%] overflow-y-auto scrollbar-thin dark:scrollbar-thumb-slate-800 dark:scrollbar-track-slate-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            </div>
        </div>`;
  }
}

customElements.define('app-card-matrix', CardMatrix);
