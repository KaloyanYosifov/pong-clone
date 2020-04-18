/**
 * External dependencies.
 */
import Victor from 'victor';

/**
 * Internal dependencies.
 */
import Entity from '@/game/entities/Entity';
import Rectangle from '@/game/graphics/Rectangle';

class Player extends Entity {
    rectangle: Rectangle;

    constructor() {
        super(new Victor(0, 0), new Victor(128, 64));

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
