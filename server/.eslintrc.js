module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-case-declarations': 'off',
        'no-void': 'off',
        'no-trailing-spaces': ['error', {
            skipBlankLines: true,
        }],
        'comma-dangle': ['error', 'always-multiline', {
            arrays: 'always',
            objects: 'always',
            imports: 'never',
            exports: 'never',
            functions: 'never',
        }],
        indent: ['error', 4, { 'SwitchCase': 1 }],
        semi: ['error', 'always'],
    },
};

