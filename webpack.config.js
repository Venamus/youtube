// Imports
const path = require('path');
const config = {
  // Entry
  entry: './src/Index.js',

  // Output
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  // Plugins
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    historyApiFallback: true,
    inline: true,
    open: true,
    compress: true,
    port: 9000
  }
};

// Exports
module.exports = config;
