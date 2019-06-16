const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const PATH = {
    app: path.join(__dirname, '/src/main.js'),
    build: path.join(__dirname, '/dist')
}

module.exports = {
    entry: {
        app: PATH.app
    },
    output: {
        filename: '[name].js',
        path: PATH.build
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env','@babel/react']
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    resolve: {
        alias: {
            '@':path.join(__dirname, 'src'),
            'store':path.join(__dirname, 'src/store'),
            'view':path.join(__dirname, 'src/view'),
            'common':path.join(__dirname, 'src/common'),
            'components': path.join(__dirname, 'src/components'),
            'utils': path.join(__dirname, 'src/utils'),
        }
    }
}