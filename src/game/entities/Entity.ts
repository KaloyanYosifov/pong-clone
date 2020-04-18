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
