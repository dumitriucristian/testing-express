module.exports = {
    parser: "@typescripnt-eslint/parse",
    extends: [
        "plugin:@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parseOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {}
}