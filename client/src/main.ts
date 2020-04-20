/**
 * External dependencies.
 */
import Vue from 'vue';
import Router from 'vue-router';
import VueApollo from 'vue-apollo';

/**
 * Internal dependencies.
 */
import App from './App.vue';
import client from './client';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
    defaultClient: client,
});

new Vue({
    router,
    apolloProvider,
    render: h => h(App),
}).$mount('#app');
