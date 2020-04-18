/**
 * Internal dependencies.
 */
import Victor from 'victor';

abstract class Shape {
    protected constructor(
        protected position: Victor,
    ) {}

    abstract update(): void;

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

    abstract destroy(): void;
}

export default Shape;
