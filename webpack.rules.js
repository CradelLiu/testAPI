const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [{
    test: /\.jsx?$/,
    use: 'babel-loader',
}, {
    test: /\.css$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
}, {
    test: /\.s(c|a)ss$/,
    include: path.resolve(__dirname, 'src'),
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
}, {
    test: /\.vue$/,
    include: path.resolve(__dirname, 'src'),
    use: 'vue-loader'
}, { //解析html文件的图片路径中的图片依赖
    test: /\.html$/,
    include: path.resolve(__dirname, 'src'),
    use: 'html-withimg-loader'
}, {
    test: /\.(png|jpe?g|svg|ico|gif)\??.*$/,
    use: 'file-loader?limit=500&name=./img/[name].[ext]'
}, {
    test: /\.(x?ttf|woff2?|eot|otf)\??.*$/,
    use: 'file-loader?name=./font/[name].[ext]'
}];