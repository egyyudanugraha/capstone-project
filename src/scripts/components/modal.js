class Modal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div id="modalItemTask" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div id="modal-content" class="relative p-4 w-full max-w-5xl h-full md:h-auto"></div>
      </div>`;
  }
}

customElements.define('app-modal', Modal);
