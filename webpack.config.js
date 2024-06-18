const path = require('path');

module.exports = {
  entry: './src/js/chat-bot.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader',   // Turns CSS into CommonJS module
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
