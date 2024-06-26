// NHÚNG CSS VÀO JS
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

// TÁCH CSS RIÊNG
// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

// module.exports = {
//   entry: './src/js/chat-bot.js',
//   output: {
//     filename: 'index.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: 'styles.css',
//     }),
//   ],
//   optimization: {
//     minimize: true, 
//     minimizer: [
//       new TerserPlugin(),
//       new OptimizeCssAssetsPlugin(), 
//     ],
//   },
//   devServer: {
//     contentBase: './dist',
//     hot: true,
//   },
// };
