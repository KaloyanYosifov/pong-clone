/**
 * External dependencies.
 */
import Router from 'vue-router';

/**
 * Internal dependencies.
 */
import Game from '@/features/game/pages/game/Game.vue';
import Login from '@/features/authentication/pages/login/Login.vue';

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/game',
        component: Game,
    },
];

const router = new Router({
    routes,
});

export default router;
