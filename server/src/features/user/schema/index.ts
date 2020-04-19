/**
 * External dependencies.
 */
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
/**
 * Internal dependencies.
 */
import { resolvers } from './resolvers';
import typeDefs from './schema.graphql';

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});
