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
import { degreesToRadians } from '@/game/utils/helpers';

class Ball extends Entity {
    protected speed: number;
    protected invert: boolean;
    protected xAlignment: number;
    protected entityMoveShot: number;

    constructor() {
        const size = new Victor(32, 32);
        const position = new Victor(
            (Application.getInstance().getWidth() / 2) - (size.x / 2),
            Application.getInstance().getHeight() / 2 - (size.y / 2),
        );

        super(position, size);

        const graphics = new Graphics();
        this.speed = 2;
        this.xAlignment = 0;
        this.invert = false;
        this.entityMoveShot = 0;

        graphics.beginFill(0xffffff);
        graphics.drawCircle(0, 0, 25);
        graphics.endFill();

        this.getContainer().addChild(graphics);
    }

    update() {
        const x = this.xAlignment;
        let y = this.speed;
        const entities = Application.getInstance().getEntityManager().all();

        for (const entity of entities) {
            if (entity === this) {
                continue;
            }

            if (this.position.y + this.size.y > entity.getPosition().y) {
                this.invert = true;

                const centerOfEntitity = entity.getX() + (entity.getWidth() / 2);

                if (this.position.x > centerOfEntitity) {
                    this.xAlignment = Math.sin(degreesToRadians(90)) * (this.speed + this.entityMoveShot);
                } else if (centerOfEntitity > this.position.x) {
                    this.xAlignment = Math.sin(degreesToRadians(270)) * (this.speed + this.entityMoveShot);
                }

                if (entity.isMoving()) {
                    this.entityMoveShot = 10;
                }

                break;
            }
        }

        if (this.entityMoveShot > 0) {
            y += this.entityMoveShot;
            this.entityMoveShot -= 0.05;
        }

        if (this.invert) {
            y *= -1;
        }

        this.setPosition(new Victor(this.position.x + x, this.position.y + y));

        if (this.position.y + this.size.y > Application.getInstance().getHeight()) {
            this.invert = true;
        } else if ((this.position.y - (this.size.y / 2)) < 0) {
            this.invert = false;
        }

        if (this.position.x + this.size.x > Application.getInstance().getWidth()) {
            this.xAlignment = Math.sin(degreesToRadians(270)) * (this.speed + this.entityMoveShot);
        }

        if (this.position.x < 0) {
            this.xAlignment = Math.sin(degreesToRadians(90)) * (this.speed + this.entityMoveShot);
        }
    }
}

export default Ball;
