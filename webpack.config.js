const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory:path.resolve(__dirname,'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
plugins:[new HtmlWebpackPlugin(
  {
    title: 'Todo list page',
    filename: 'index.html',
    template: 'src/template.html'
  }
)],
};