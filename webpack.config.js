const path = require('path')

module.exports = {
    entry: {
        index: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
        edit: ['core-js/stable', 'regenerator-runtime/runtime', './src/edit.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        port: 3000,
        devMiddleware: {
            publicPath: 'https://localhost:3000/scripts/',
        }
    },
    devtool: 'source-map'
}