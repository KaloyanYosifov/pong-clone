<template>
    <div id="app">
        <Game />
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { Component, Vue } from 'vue-property-decorator';

/**
 * Internal dependencies.
 */
import Game from '@/components/game/Game.vue';

@Component({
    components: {
        Game,
    },
})
export default class App extends Vue {
}
</script>
