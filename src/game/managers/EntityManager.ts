/**
 * Internal dependencies.
 */
import Entity from '@/game/entities/Entity';

class EntityManager {
    protected entities: Entity[] = [];

    all() {
        return this.entities;
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    removeEntity(entity: Entity) {
        this.entities = this.entities.filter(localEntity => localEntity !== entity);
    }

    update() {
        for (const entity of this.entities) {
            entity.update();
        }
    }

    destroy() {
        for (const entity of this.entities) {
            entity.destroy();
        }

        this.entities = [];
    }
}

export default EntityManager;
