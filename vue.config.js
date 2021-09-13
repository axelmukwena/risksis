var path = require('path')

module.exports = {
    transpileDependencies: [],
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            title: 'Risksis'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                src: path.resolve(__dirname, 'src')
            }
        }
    }
}
