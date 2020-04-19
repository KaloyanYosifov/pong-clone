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
import { EntityTypes } from '@/game/types/EntityTypes';

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
    }

    update() {
        let x = 0;

        if (Application.getInstance().getKeyboardManager().isKeyPressed(KeyboardKeys.ARROW_LEFT)) {
            x -= this.speed;
        }

        if (Application.getInstance().getKeyboardManager().isKeyPressed(KeyboardKeys.ARROW_RIGHT)) {
            x += this.speed;
        }

        this.moving = x !== this.position.x;

        if (this.position.x + x < 0 || ((this.position.x + this.size.x) + x) > Application.getInstance().getWidth()) {
            x = 0;
        }

        this.setX(this.position.x + x);
    }

    destroy() {
        super.destroy();
    }

    public getEntityType(): EntityTypes {
        return EntityTypes.PLATFORM;
    }
}

export default Player;
