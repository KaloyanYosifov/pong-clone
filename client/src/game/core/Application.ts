/**
 * External dependencies.
 */
import { Application as GameApplication } from 'pixi.js';

/**
 * Internal dependencies.
 */
import EntityManager from '@/game/managers/EntityManager';
import KeyboardManager from '@/game/managers/KeyboardManager';
import GraphicContainerManager from '@/game/managers/GraphicContainerManager';

class Application {
    protected static instance: Application | null;

    protected app: GameApplication | null = null;
    protected entityManager: EntityManager | null = null;
    protected keyboardManager: KeyboardManager | null = null;
    protected graphicContainerManager: GraphicContainerManager | null = null;

    private constructor() {
        this.tick = this.tick.bind(this);
    }

    init(element: HTMLElement, width: number, height: number, backgroundColor = 0xffffff) {
        if (this.app) {
            return this;
        }

        this.app = new GameApplication({
            width,
            height,
            backgroundColor,
        });
        this.entityManager = new EntityManager();
        this.keyboardManager = new KeyboardManager();
        this.graphicContainerManager = new GraphicContainerManager(this.app);

        element.appendChild(this.app.view);

        return this;
    }

    start() {
        if (!this.app) {
            return;
        }

        this.app.ticker.add(this.tick);
    }

    stop() {
        if (!this.app) {
            return;
        }

        this.app.ticker.remove(this.tick);
    }

    destroy() {
        if (!this.app) {
            return this;
        }

        this.entityManager && this.entityManager.destroy();
        this.keyboardManager && this.keyboardManager.destroy();
        this.graphicContainerManager && this.graphicContainerManager.destroy();

        this.stop();
        this.app.destroy(true);

        this.app = null;

        return this;
    }

    isInitialized() {
        return !!this.app;
    }

    getApp(): GameApplication {
        return this.app!;
    }

    getGraphicManager(): GraphicContainerManager {
        return this.graphicContainerManager!;
    }

    getEntityManager(): EntityManager {
        return this.entityManager!;
    }

    getKeyboardManager(): KeyboardManager {
        return this.keyboardManager!;
    }

    getWidth() {
        return this.getApp().view.width;
    }

    getHeight() {
        return this.getApp().view.height;
    }

    protected tick() {
        this.entityManager && this.entityManager.update();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Application();
        }

        return this.instance;
    }
}

export default Application;
