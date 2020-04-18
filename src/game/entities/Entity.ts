/**
 * External dependencies.
 */

import Victor from 'victor';
import Application from '@/game/core/Application';

abstract class Entity {
    protected constructor(
        protected position: Victor,
        protected size: Victor,
    ) {
        Application.getInstance().getEntityManager().addEntity(this);
    }

    abstract update(): void;

    destroy() {
        Application.getInstance().getEntityManager().removeEntity(this);
    }

    setPosition(position: Victor) {
        this.position = position.clone();

        return this;
    }

    setX(x: number) {
        this.position.x = x;

        return this;
    }

    setY(y: number) {
        this.position.y = y;

        return this;
    }

    getPosition() {
        return this.position;
    }

    getSize() {
        return this.size;
    }

    getX() {
        return this.position.x;
    }

    getY() {
        return this.position.y;
    }

    getWidth() {
        return this.size.x;
    }

    getHeight() {
        return this.size.y;
    }
}

export default Entity;
