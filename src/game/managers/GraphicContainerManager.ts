/**
 * External dependencies.
 */
import { Application, Container } from 'pixi.js';

class GraphicContainerManager {
    protected graphics: Container[] = [];

    constructor(protected app: Application) {}

    addContainer(container: Container) {
        this.graphics.push(container);
        this.app.stage.addChild(container);
    }

    removeContainer(container: Container) {
        this.graphics = this.graphics.filter(graphic => graphic !== container);
        this.app.stage.removeChild(container);
    }

    destroy() {
        for (const graphic of this.graphics) {
            graphic.destroy({
                children: true,
            });

            this.app.stage.removeChild(graphic);
        }

        this.graphics = [];
    }
}

export default GraphicContainerManager;
