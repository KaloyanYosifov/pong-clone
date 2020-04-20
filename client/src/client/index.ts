/**
 * External dependencies.
 */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

/**
 * Internal dependencies.
 */

const link = createHttpLink({
    uri: 'http://localhost:4000',
});
const cache = new InMemoryCache();
const client = new ApolloClient({
    link,
    cache,
});

export default client;
