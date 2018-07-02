// Try to configurate postcss but it's a fail for the moment
module.exports = {
    parser: 'sugarss',
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'cssnano': {}
    }
}