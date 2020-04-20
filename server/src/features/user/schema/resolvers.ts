/**
 * External dependencies.
 */
import { IResolvers } from 'graphql-tools';

/**
 * Internal dependencies.
 */
import { UserInput } from '@/features/user/repositories/UserRepository';
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
        login(_, { input }: { input: UserInput }, { userRepository }: Context) {
            return userRepository.find(input)?.getAttributes();
        },
        signup(_, { input }: { input: UserInput }, { userRepository }: Context) {
            return userRepository.create(input).getAttributes();
        },
    },
};

export {
    resolvers,
};
