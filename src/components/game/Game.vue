<template>
    <div ref="gameContainer" class="game-container"></div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { Component, Ref, Vue } from 'vue-property-decorator';
import Engine from '@/game/core/Engine';

/**
 * Internal dependencies.
 */

@Component
export default class Game extends Vue {
    @Ref('gameContainer') gameContainer!: HTMLDivElement;

    protected engine!: Engine;

    mounted() {
        this.engine = new Engine();

        this.engine.init(this.gameContainer);

        setTimeout(() => {
            this.engine.start();
        }, 3000);
    }
}
</script>

<style lang="scss" scoped>
    @import './styles';
</style>
