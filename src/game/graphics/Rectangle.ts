/**
 * External dependencies.
 */
import { Graphics, Container } from 'pixi.js';
import Victor from 'victor';

/**
 * Internal dependencies.
 */
import Application from '@/game/core/Application';
import Shape from '@/game/graphics/Shape';

class Rectangle extends Shape {
    graphics: Graphics | null;
    container: Container | null;

    constructor(position: Victor, protected size: Victor, color = 0xffffff) {
        super(position);

        this.graphics = new Graphics();

        this.graphics.beginFill(color);
        this.graphics.drawRect(0, 0, size.x, size.y);
        this.graphics.endFill();

        this.container = new Container();

        this.container.x = position.x;
        this.container.y = position.y;
        this.container.width = size.x;
        this.container.height = size.y;

        this.container.addChild(this.graphics);

        Application.getInstance().getGraphicManager().addContainer(this.container);
    }

    update() {
        if (!this.container) {
            return;
        }

        this.container.x = this.position.x;
        this.container.y = this.position.y;
        this.container.width = this.size.x;
        this.container.height = this.size.y;

        if (this.graphics) {
            this.graphics.width = this.size.x;
            this.graphics.height = this.size.y;
        }
    }

    getSize() {
        return this.size;
    }

    getContainer(): Container {
        return this.container!;
    }

    destroy(): void {
        if (!this.container) {
            return;
        }

        this.container.destroy({
            children: true,
        });

        Application.getInstance().getGraphicManager().removeContainer(this.container);

        this.container = null;
        this.graphics = null;
    }
}

export default Rectangle;
