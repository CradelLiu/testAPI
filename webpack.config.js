const rulesConfig = require('./webpack.rules.js');
const pluginsConfig = require('./webpack.plugins.js');

const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        testAPI: ["./src/testAPI.js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js?[hash]",
    },
    resolve: {
        extensions: [".js", ".json", '.css', '.scss', '.vue'],
    },
    module: {rules: rulesConfig},
    plugins: pluginsConfig,
};

if (process.env.NODE_ENV === 'development') {
    config.devtool = "source-map";
    config.devServer = {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8090,
        open: true,
        hot: true,
        inline: true,
        overlay: {
            errors: true
        }
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    )
} else if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    )
}

module.exports = config;