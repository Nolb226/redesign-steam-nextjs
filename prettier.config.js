// prettier.config.js
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindFunctions: ['clsx', 'tv'],
}

module.exports = config
