module.exports = {
    transpileDependencies: [],
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            title: 'Risksis'
        }
    },
    chainWebpack(config) {
        config.plugins.delete('prefetch')
    }
}
