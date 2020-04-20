<template>
    <form class="login" @submit.prevent="submit">
        <h4>Login</h4>
        <input v-model="name" type="text" name="name" />
        <input v-model="password" type="password" name="password" />

        <p v-if="loading">Loading</p>

        <button type="submit">Submit</button>
    </form>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import gql from 'graphql-tag';
import { Vue, Component } from 'vue-property-decorator';

/**
 * Internal dependencies.
 */

const LOGIN_MUTATION = gql`
    mutation Login($input: LoginUserInput!) {
        user: login(input: $input) {
            id
            name
            token
        }
    }
`;

@Component
export default class Login extends Vue {
    loading = false;
    name = '';
    password = '';

    submit() {
        this.loading = true;

        this.$apollo.mutate({
            mutation: LOGIN_MUTATION,
            variables: {
                input: {
                    name: this.name,
                    password: this.password,
                },
            },
        })
            .then(response => {
                console.log(response.data.user);
                this.name = '';
                this.password = '';
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
</script>

<style lang="scss" scoped>
    @import 'styles';
</style>
