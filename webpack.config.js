const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const  CompressionPlugin = require('compression-webpack-plugin')



const PATH = {
    app: path.join(__dirname, '/src/main.js'),
    build: path.join(__dirname, '/dist')
}

module.exports = {
    
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        PATH.app
    ],
    output: {
        filename: '[name].js',
        path: PATH.build,
        publicPath:'/',
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ['style-loader',
                        {
                            loader:"css-loader",
                            options:{
                                modules:true,
                               
                            },
                        }
                    ,'sass-loader'
                ],
                 exclude: path.join(__dirname, 'node_modules')
               
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', "css-loader", 'sass-loader'],
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
           
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"[name][hash].[ext]",
                        limit:100,
                        outputPath:"./img"
                    }
                }
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),

        // js压缩
        new UglifyJsPlugin(),
        
         // gizp压缩
         new CompressionPlugin(),

        
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
            '@static': path.join(__dirname, 'src/static'),
            '@actions': path.join(__dirname, 'src/store/actions'),
            '@public': path.join(__dirname, 'public'),
            '@filters': path.join(__dirname, 'src/filters')
        }
    },
    devServer: {
        hot: true,
        
        proxy: {
            '/avatar': {
                target: 'http://statics.zhuishushenqi.com',
                changeOrigin: true,

            },
            'ranking': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true
            },
            //获取分类
            'cats': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true
            },
            'chapters':{
                target: 'http://chapterup.zhuishushenqi.com',
                changeOrigin: true
            },
            '/': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true
            },
           
        }
    }
}