/**
 * External dependencies.
 */
const tsConfigPaths = require('tsconfig-paths');

/**
 * Init config paths
 * so the server can work in node not just ts-node
 */
const baseUrl = './';
const paths = {
    '@/*': [
        './*',
    ],
};
const cleanup = tsConfigPaths.register({
    baseUrl,
    paths,
});

import '@/server';

// When path registration is no longer needed
cleanup();
