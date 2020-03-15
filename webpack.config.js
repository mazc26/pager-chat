const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    devtool: 'eval-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test:/\.s?css$/,
          use:['style-loader','css-loader', 'sass-loader']
        },
        {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      ]
    },
    devServer: {
      contentBase:  path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      })
    ]
  };