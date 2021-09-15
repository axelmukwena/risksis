module.exports = {
    transpileDependencies: [],
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            title: 'Risksis'
        }
    },
    pluginOptions: {
        compression: {
            gzip: {
                filename: '[file].gz[query]',
                algorithm: 'gzip',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8
            }
        }
    }
}
