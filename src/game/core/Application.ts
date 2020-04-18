/**
 * External dependencies.
 */
import { Application as GameApplication } from 'pixi.js';

/**
 * Internal dependencies.
 */
import GraphicContainerManager from '@/game/managers/GraphicContainerManager';
import EntityManager from '@/game/managers/EntityManager';

class Application {
    protected static instance: Application | null;

    protected app: GameApplication | null = null;
    protected graphicContainerManager: GraphicContainerManager | null = null;
    protected entityManager: EntityManager | null = null;

    private constructor() {}

    init(element: HTMLElement, width: number, height: number, backgroundColor = 0xffffff) {
        if (this.app) {
            return this;
        }

        this.app = new GameApplication({
            width,
            height,
            backgroundColor,
        });
        this.graphicContainerManager = new GraphicContainerManager(this.app);
        this.entityManager = new EntityManager();

        element.appendChild(this.app.view);

        return this;
    }

    destroy() {
        if (!this.app) {
            return this;
        }

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

    static getInstance() {
        if (!this.instance) {
            this.instance = new Application();
        }

        return this.instance;
    }
}

export default Application;
