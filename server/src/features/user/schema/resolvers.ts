/**
 * External dependencies.
 */
import { IResolvers } from 'graphql-tools';

/**
 * Internal dependencies.
 */
import { CreateUserInput } from '@/features/user/repositories/UserRepository';
import { Context } from '@/server';
import { authenticated } from '@/utils/middlewares';

const resolvers: IResolvers = {
    Query: {
        me: authenticated((_, __, { user }) => {
            return user!.getAttributes();
        }),
        users(_, __, { userRepository }: Context) {
            return userRepository.all().map(user => user.getAttributes());
        },
    },

    Mutation: {
        signup(_, { input }: { input: CreateUserInput }, { userRepository }: Context) {
            return userRepository.create(input).getAttributes();
        },
    },
};

export {
    resolvers,
};
