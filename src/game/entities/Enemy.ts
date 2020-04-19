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
import { EntityTypes } from '@/game/types/EntityTypes';

class Enemy extends Entity {
    protected speed: number;

    constructor() {
        const size = new Victor(256, 32);
        const position = new Victor(
            (Application.getInstance().getWidth() / 2) - (size.x / 2),
            size.y / 2,
        );

        super(position, size);

        this.speed = 10;
        const graphics = new Graphics();

        graphics.beginFill(0xffff00);
        graphics.drawRect(0, 0, this.size.x, this.size.y);
        graphics.endFill();

        this.getContainer().addChild(graphics);
    }

    update() {

    }

    public getEntityType(): EntityTypes {
        return EntityTypes.PLATFORM;
    }
}

export default Enemy;
