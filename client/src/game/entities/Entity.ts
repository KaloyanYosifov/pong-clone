/**
 * External dependencies.
 */
import { Container, Point } from 'pixi.js';
import Victor from 'victor';

/**
 * Internal dependencies.
 */
import Application from '@/game/core/Application';
import { EntityTypes } from '@/game/types/EntityTypes';

abstract class Entity {
    protected moving = false;
    protected container: Container | null = null;

    protected constructor(
        protected position: Victor,
        protected size: Victor,
    ) {
        this.container = new Container();
        this.container.position = new Point(this.position.x, this.position.y);
        this.container.width = this.size.x;
        this.container.height = this.size.y;

        Application.getInstance().getGraphicManager().addContainer(this.container!);
        Application.getInstance().getEntityManager().addEntity(this);
    }

    abstract update(): void;

    abstract getEntityType(): EntityTypes;

    destroy() {
        Application.getInstance().getGraphicManager().removeContainer(this.container!);
        Application.getInstance().getEntityManager().removeEntity(this);
    }

    setPosition(position: Victor) {
        this.position = position.clone();
        if (this.container) {
            this.container.position = new Point(this.position.x, this.position.y);
        }

        return this;
    }

    setX(x: number) {
        this.setPosition(new Victor(x, this.position.y));

        return this;
    }

    setY(y: number) {
        this.setPosition(new Victor(this.position.x, y));

        return this;
    }

    setSize(size: Victor) {
        this.size = size.clone();

        if (this.container) {
            this.container.width = this.size.x;
            this.container.height = this.size.y;
        }

        return this;
    }

    setWidth(width: number) {
        this.setSize(new Victor(width, this.size.y));

        return this;
    }

    setHeight(height: number) {
        this.setSize(new Victor(this.size.x, height));

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

    isMoving() {
        return this.moving;
    }

    intersects(entity: Entity) {
        if (
            entity.getPosition().y + entity.getSize().y > this.position.y &&
            entity.getPosition().y < this.position.y + this.size.y
        ) {
            if (
                entity.getPosition().x < this.position.x + this.size.x &&
                entity.getPosition().x + entity.getSize().x > this.position.x
            ) {
                return true;
            }
        }

        return false;
    }

    protected getContainer() {
        return this.container!;
    }
}

export default Entity;
