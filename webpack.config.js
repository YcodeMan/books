const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const PATH = {
    app: path.join(__dirname, '/src/main.js'),
    build: path.join(__dirname, '/dist')
}

module.exports = {
    entry: [
        'react-hot-loader/patch',
        __dirname + '/src/main.js'
    ],
    output: {
        filename: '[name].js',
        path: PATH.build,
        publicPath:'/',
    },
   
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    }
                    , 'sass-loader', 
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    }
                }
            },
            // 配置热加载
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            },
            // { 
            //     test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            //     loader: 'url-loader'
            // }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            '@store': path.join(__dirname, 'src/store'),
            '@views': path.join(__dirname, 'src/views'),
            '@common': path.join(__dirname, 'src/common'),
            '@components': path.join(__dirname, 'src/components'),
            '@utils': path.join(__dirname, 'src/utils'),
            '@api': path.join(__dirname, 'src/api'),
            '@router': path.join(__dirname, 'src/router'),
            '@actions': path.join(__dirname, 'src/store/actions'),
            '@public': path.join(__dirname, 'public')

        }
    },
    devServer: {
        hot: true,
        proxy: {
            '/': {
                target: 'http://api.zhuishushenqi.com'
            },
            'ranking': {
                target: 'http://api.zhuishushenqi.com'
            },
            
        }
    }
}