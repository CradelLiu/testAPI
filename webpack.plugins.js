const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = [
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename: './css/[name].css?[hash]'}),
    new webpack.ProvidePlugin({
        Vue: 'vue/dist/vue',
        axios: 'axios',
    }),
    new webpack.optimize.SplitChunksPlugin({
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '-',
        name: true,
        cacheGroups: {
            vue: {
                test: /[\\/]node_modules[\\/]vue[\\/]/,
                priority: -10,
                name: 'vue'
            },
            axios: {
                test: /[\\/]node_modules[\\/]axios[\\/]/,
                priority: -20,
                name: 'axios'
            }
        }
    }),
    new HtmlWebpackPlugin({
        template: './src/testAPI.html',
        filename: 'testAPI.html',
        chunks: ['vue', 'axios', 'testAPI'],
        hash: true,
        minify: {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            removeComments: true,
        }
    })
];