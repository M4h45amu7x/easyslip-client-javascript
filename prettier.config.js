module.exports = {
    plugins: [require('@trivago/prettier-plugin-sort-imports')],
    trailingComma: 'all',
    tabWidth: 4,
    printWidth: 120,
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
