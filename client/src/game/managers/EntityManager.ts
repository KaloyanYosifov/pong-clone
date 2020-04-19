/**
 * Internal dependencies.
 */
import Entity from '@/game/entities/Entity';
import { EntityTypes } from '@/game/types/EntityTypes';

class EntityManager {
    protected entities: { [key in EntityTypes]?: Entity[] } = {};

    all() {
        return this.entities;
    }

    getByType(type: EntityTypes) {
        return this.entities[type];
    }

    addEntity(entity: Entity) {
        const entityType = entity.getEntityType();
        if (!(entityType in this.entities)) {
            this.entities[entityType] = [];
        }

        this.entities[entityType]!.push(entity);
    }

    removeEntity(entity: Entity) {
        this.entities[entity.getEntityType()] = this.entities[entity.getEntityType()]!.filter(localEntity => localEntity !== entity);
    }

    update() {
        const entityKeys = Object.keys(this.entities);

        for (const entityKey of entityKeys) {
            for (const entity of this.entities[(entityKey as EntityTypes)]!) {
                entity.update();
            }
        }
    }

    destroy() {
        const entityKeys = Object.keys(this.entities);

        for (const entityKey of entityKeys) {
            for (const entity of this.entities[(entityKey as EntityTypes)]!) {
                entity.destroy();
            }
        }

        this.entities = {};
    }
}

export default EntityManager;
