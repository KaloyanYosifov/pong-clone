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

class Ball extends Entity {
    protected speed: number;
    protected invert: boolean;
    protected xRando: number;

    constructor() {
        const size = new Victor(32, 32);
        const position = new Victor(
            (Application.getInstance().getWidth() / 2) - (size.x / 2),
            Application.getInstance().getHeight() / 2 - (size.y / 2),
        );

        super(position, size);

        const graphics = new Graphics();
        this.invert = false;
        this.speed = 2;
        this.xRando = 0;

        graphics.beginFill(0xffffff);
        graphics.drawCircle(0, 0, 25);
        graphics.endFill();

        this.getContainer().addChild(graphics);
    }

    update() {
        if (this.invert) {
            this.setPosition(new Victor(this.position.x - this.xRando, this.position.y - this.speed));
        } else {
            this.setPosition(new Victor(this.position.x + this.xRando, this.position.y + this.speed));
        }

        if (this.position.y + this.size.y > Application.getInstance().getHeight()) {
            this.invert = true;
            this.xRando = Math.cos(Math.random() * 2);
        } else if ((this.position.y - (this.size.y / 2)) < 0) {
            this.invert = false;
            this.xRando = Math.sin(Math.random() * 2);
        }
    }
}

export default Ball;
