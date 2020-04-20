/**
 * External dependencies.
 */
import { ApolloServer } from 'apollo-server';

/**
 * Internal dependencies.
 */
import { webtoken } from '@/webtoken';
import usersSchema from '@/features/user/schema';
import { UserRepository } from '@/features/user/repositories/UserRepository';
import { User } from '@/features/user/models/User';

export interface Context {
    user: User | null;
    userRepository: UserRepository;
}

const server = new ApolloServer({
    schema: usersSchema,
    context({ req }) {
        const token = req.header('Authorization') || '';
        const data = webtoken.verify(token);
        let user = null;

        if (data) {
            user = UserRepository.getInstance().findById(data.id);
        }

        return {
            user,
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
