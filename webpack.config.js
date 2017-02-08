var assign = require('lodash.assign');
var path = require('path');
var webpack = require('webpack');
var PATHS = {
    BUILD: path.join(__dirname, 'build', process.env.DEPLOY_TIMESTAMP || ''),
    LIB: path.join(__dirname, 'lib'),
    SOURCE: path.join(__dirname, 'src')
};
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('main.css');

var config = {
    entry: {
        main: [path.join(PATHS.SOURCE, 'index.js')],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract('style', ['css', 'postcss', 'sass', 'import-glob'])
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    resolve: {
        alias: {
            lib: PATHS.LIB,
            src: PATHS.SOURCE
        },
        extensions: ['', '.js']
    },
    output: {
        filename: 'main.bundle.js',
        path: PATHS.BUILD,
        publicPath: '/joeandliana/'
    },
    plugins: [
        extractSass,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

var devConfig = assign({}, config, {
    entry: [
        'webpack-hot-middleware/client'
    ].concat(config.entry.main),
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ].concat(config.plugins)
});

module.exports = config;
module.exports.devConfig = devConfig;
