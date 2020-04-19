/**
 * External dependencies.
 */
import Victor from 'victor';
import { Graphics } from 'pixi.js';

/**
 * Internal dependencies.
 */
import Entity from '@/game/entities/Entity';
import Application from '@/game/core/Application';
import { KeyboardKeys } from '@/game/utils/KeyboardKeys';

class Player extends Entity {
    protected speed: number;

    constructor() {
        const size = new Victor(256, 32);
        const position = new Victor(
            (Application.getInstance().getWidth() / 2) - (size.x / 2),
            Application.getInstance().getHeight() - (size.y + (size.y / 2)),
        );

        super(position, size);

        this.speed = 10;
        const graphics = new Graphics();

        graphics.beginFill(0xff0000);
        graphics.drawRect(0, 0, this.size.x, this.size.y);
        graphics.endFill();

        this.getContainer().addChild(graphics);

        this.moveLeft = this.moveLeft.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveDown = this.moveDown.bind(this);
    }

    update() {
        let x = this.position.x;
        let y = this.position.y;

        if (Application.getInstance().getKeyboardManager().isKeyPressed(KeyboardKeys.ARROW_UP)) {
            y -= this.speed;
        }

        if (Application.getInstance().getKeyboardManager().isKeyPressed(KeyboardKeys.ARROW_DOWN)) {
            y += this.speed;
        }

        if (Application.getInstance().getKeyboardManager().isKeyPressed(KeyboardKeys.ARROW_LEFT)) {
            x -= this.speed;
        }

        if (Application.getInstance().getKeyboardManager().isKeyPressed(KeyboardKeys.ARROW_RIGHT)) {
            x += this.speed;
        }

        if (x !== this.position.x || y !== this.position.y) {
            this.moving = true;
        } else {
            this.moving = false;
        }

        this.setPosition(new Victor(x, y));
    }

    destroy() {
        super.destroy();
    }

    protected moveLeft() {
        this.setX(this.position.x - 10);
    }

    protected moveUp() {
        this.setY(this.position.y - 10);
    }

    protected moveRight() {
        this.setX(this.position.x + 10);
    }

    protected moveDown() {
        this.setY(this.position.y + 10);
    }
}

export default Player;
