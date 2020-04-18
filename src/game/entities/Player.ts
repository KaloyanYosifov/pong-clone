/**
 * External dependencies.
 */
import Victor from 'victor';
import keyboardJS from 'keyboardjs';

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

        this.rectangle = new Rectangle(this.position.clone(), this.size.clone());

        this.moveLeft = this.moveLeft.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveDown = this.moveDown.bind(this);

        keyboardJS.bind('left', this.moveLeft);
        keyboardJS.bind('right', this.moveRight);
        keyboardJS.bind('up', this.moveUp);
        keyboardJS.bind('down', this.moveDown);
    }

    update() {
        this.rectangle.update();
    }

    destroy() {
        super.destroy();

        this.rectangle.destroy();
    }

    protected moveLeft() {
        this.setX(this.position.x - 10);
        this.rectangle.setPosition(this.position);
    }

    protected moveUp() {
        this.setY(this.position.y - 10);
        this.rectangle.setPosition(this.position);
    }

    protected moveRight() {
        this.setX(this.position.x + 10);
        this.rectangle.setPosition(this.position);
    }

    protected moveDown() {
        this.setY(this.position.y + 10);
        this.rectangle.setPosition(this.position);
    }
}

export default Player;
