const DrawerInitiator = {
  init({ hamburger, drawer, content }) {
    this._collapse = new Collapse(drawer, { triggerEl: hamburger });

    content.addEventListener('click', () => {
      this._collapse.collapse();
    });
  },
};

export default DrawerInitiator;
