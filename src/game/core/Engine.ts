/**
 * Internal dependencies.
 */
import Application from '@/game/core/Application';
import Player from '@/game/entities/Player';
import Ball from '@/game/entities/Ball';

class Engine {
    protected width = 800;
    protected height = 600;
    protected backgroundColor = 0x000000;

    init(element: HTMLElement) {
        if (Application.getInstance().isInitialized()) {
            Application.getInstance().destroy();
        }

        Application.getInstance().init(element, this.width, this.height, this.backgroundColor);

        this.initEntities();
    }

    start() {
        Application.getInstance().start();
    }

    destroy() {
        Application.getInstance().destroy();
    }

    protected initEntities() {
        new Ball();
        new Player();
    }
}

export default Engine;
