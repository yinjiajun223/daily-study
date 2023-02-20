exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    // extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'],
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        './.eslintrc-auto-import.json'
    ],

    rules: {
        // override/add rules settings here, such as:
    }
};