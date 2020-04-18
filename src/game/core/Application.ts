/**
 * External dependencies.
 */
import * as PIXI from 'pixi.js';

class Application {
    protected static instance: Application | null;

    protected app: PIXI.Application | null = null;

    private constructor() {}

    init(element: HTMLElement, width: number, height: number, backgroundColor = 0xffffff) {
        if (this.app) {
            return this;
        }

        this.app = new PIXI.Application({
            width,
            height,
            backgroundColor,
        });

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

    getApp(): PIXI.Application {
        return this.app!;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Application();
        }

        return this.instance;
    }
}

export default Application;
