/**
 * External dependencies.
 */
import { ApolloServer } from 'apollo-server';

/**
 * Internal dependencies.
 */
import usersSchema from '@/features/user/schema';
import { UserRepository } from '@/features/user/repositories/UserRepository';

export interface Context {
    userRepository: UserRepository;
}

const server = new ApolloServer({
    schema: usersSchema,
    context() {
        return {
            userRepository: UserRepository.getInstance(),
        };
    },
});

server.listen({
    port: 4000,
})
    .then(response => {
        console.log(response.url);
    });
