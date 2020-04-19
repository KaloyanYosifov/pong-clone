/**
 * Internal dependencies.
 */
import { CreateUserInput } from '@/features/user/repositories/UserRepository';
import { Context } from '@/server';

const resolvers = {
    Query: {
        users(_: any, __: any, { userRepository }: Context) {
            return userRepository.all().map(user => user.getAttributes());
        },
    },

    Mutation: {
        signup(_: any, { input }: { input: CreateUserInput }, { userRepository }: Context) {
            return userRepository.create(input).getAttributes();
        },
    },
};

export {
    resolvers,
};
