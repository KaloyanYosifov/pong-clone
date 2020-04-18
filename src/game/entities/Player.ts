/**
 * External dependencies.
 */
import Victor from 'victor';

/**
 * Internal dependencies.
 */
import Entity from '@/game/entities/Entity';
import Rectangle from '@/game/graphics/Rectangle';
import Application from '@/game/core/Application';

class Player extends Entity {
    rectangle: Rectangle;

    constructor() {
        const size = new Victor(256, 32);
        const position = new Victor(
            (Application.getInstance().getWidth() / 2) - (size.x / 2),
            Application.getInstance().getHeight() - (size.y + (size.y / 2)),
        );

        super(position, size);

        this.rectangle = new Rectangle(this.position, this.size);
    }

    public update() {
    }

    public destroy() {
        super.destroy();

        this.rectangle.destroy();
    }
}

export default Player;
