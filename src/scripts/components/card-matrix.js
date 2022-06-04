class CardMatrix extends HTMLElement {
  connectedCallback() {
    this.render();
    const addClass = 'card p-4 dark:bg-gray-700 rounded-md md:w-full max-h-[95vh] lg:max-h-[50vh] min-h-[40vh] lg:min-h-[50vh]'.split(' ');
    const removeClass = [...this.classList].slice(1, 5);
    this.classList.remove(...removeClass);
    this.classList.add(...addClass);
  }

  render() {
    this.innerHTML = `
      <div class="card-head flex justify-between gap-2 border-b-2 py-1 dark:bg-gray-700 ${this.classList[1]} ${this.classList[2]}">
        <h2 class="text-3xl text-white">${this.dataset.title}</h2>
        <div class="flex flex-col my-auto">
          <p class="text-white text-sm flex justify-end underline">${this.dataset.subtitle}</p>
          <p class="text-white flex justify-end text-xs italic">${this.dataset.command}</p>
        </div>
      </div>
      <div id="${this.dataset.title.toLowerCase().split(' ')[0]}" class="${this.classList[3]} ${
  this.classList[4]
} card-body overflow-y-auto my-3 flex flex-col gap-2 w-full p-3 max-h-[80vh] lg:h-[80%] scrollbar-thin dark:scrollbar-thumb-slate-800 dark:scrollbar-track-slate-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      </div>`;
  }
}

customElements.define('app-card-matrix', CardMatrix);
