const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      _common: path.resolve(__dirname, 'src/common/'),
      _view: path.resolve(__dirname, 'src/view/'),
      _store: path.resolve(__dirname, 'src/store/'),
    },
  },
  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, './dist'),
    // open: true,
    // compress: true,
    // hot: true,
    port: 8080,
    // progress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'SER',
      template: path.resolve(__dirname, './public/index.html'), // шаблон
      // filename: 'index.html', // название выходного файла
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [{loader: 'ts-loader', options: {transpileOnly: true}}],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'css-modules-typescript-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // disable the behavior
        },
      },
    ],
  },
}