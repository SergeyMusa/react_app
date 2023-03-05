// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        progress: true,
    },
    entry: {
        main: path.resolve(__dirname, './src/index.jsx'), // index.jsx
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/index.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        // new WebpackJSXExport(),
    ],
    module: {
        rules: [
            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }],
            },
            // JavaScript
            {
                test: /\.?js$|jsx/, // test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
            },
            // {
            //     test: /\.jsx?$/,
            //     loader: "babel-loader",
            //     // use: ['babel-loader'],
            //     exclude: /(node_modules)/,
            //     options:{
            //         presets:[ "@babel/preset-react"]    // используемые плагины
            //     }
                // query: {
                //     // plugins: ["react-hot-loader/babel", 'transform-runtime'],
                //     presets: ['es2015', 'react'] //, 'stage-0'
                // },
            // },
            // { test: /\.jsx?$/, loader: 'babel?stage=0', exclude: /node_modules/ },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['typescript-loader'],
            },
            // img
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
                //  use: ["file-loader"]
            },
        ],
    }
}