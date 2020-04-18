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
    container: Container | null;

    constructor(position: Victor, protected size: Victor, color = 0xffffff) {
        super(position);

        const graphics = new Graphics();

        graphics.beginFill(color);
        graphics.drawRect(position.x, position.y, size.x, size.y);
        graphics.endFill();

        this.container = new Container();
        this.container.addChild(graphics);

        Application.getInstance().getGraphicManager().addContainer(this.container);
    }

    getSize() {
        return this.size;
    }

    public destroy(): void {
        if (!this.container) {
            return;
        }

        this.container.destroy({
            children: true,
        });

        Application.getInstance().getGraphicManager().removeContainer(this.container);

        this.container = null;
    }
}

export default Rectangle;
