/**
 * Internal dependencies.
 */
import Application from '@/game/core/Application';

class Engine {
    protected width = 800;
    protected height = 600;
    protected backgroundColor = 0x000000;

    init(element: HTMLElement) {
        if (Application.getInstance().isInitialized()) {
            Application.getInstance().destroy();
        }

        Application.getInstance().init(element, this.width, this.height, this.backgroundColor);
    }

    destroy() {
        Application.getInstance().destroy();
    }
}

export default Engine;
