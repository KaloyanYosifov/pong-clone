<template>
    <div id="app">
        <router-view></router-view>
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
import Game from '@/features/game/pages/game/Game.vue';

@Component({
    components: {
        Game,
    },
})
export default class App extends Vue {
}
</script>
