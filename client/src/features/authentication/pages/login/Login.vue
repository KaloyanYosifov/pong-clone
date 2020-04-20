<template>
    <div class="login">
        <h4>Login</h4>
        <input type="text" name="name" />
        <input type="password" name="password" />
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { Vue, Component } from 'vue-property-decorator';

/**
 * Internal dependencies.
 */

@Component
export default class Login extends Vue {

}
</script>

<style lang="scss" scoped>
    @import 'styles';
</style>
