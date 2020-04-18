/**
 * Internal dependencies.
 */
import Victor from 'victor';

abstract class Shape {
    protected constructor(
        protected position: Victor,
    ) {}

    getPosition() {
        return this.position;
    }

    abstract destroy(): void;
}

export default Shape;
