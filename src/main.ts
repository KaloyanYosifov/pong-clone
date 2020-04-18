/**
 * External dependencies.
 */
import Vue from 'vue';

/**
 * Internal dependencies.
 */
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
