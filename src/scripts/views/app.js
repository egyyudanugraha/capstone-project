import DrawerInitiator from "../utils/drawer-initiator";

class App {
    constructor({ hamburger, drawer, content }) {
        this._hamburger = hamburger;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            hamburger: this._hamburger,
            drawer: this._drawer,
            content: this._content,
        })
    }
}

export default App;
