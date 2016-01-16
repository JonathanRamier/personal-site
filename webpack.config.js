/**
 * Personal-site
 *
 * @file webpack.config.js
 * @author Jonathan RAMIER <jramier@live.fr>
 * @licence NONE
 * @version 1.0
 */

var plugins             ,
    path                = require('path'),
    ENV                 = process.env.NODE_ENV,
    src                 = path.join(__dirname, 'src'),
    dist                = path.join(__dirname, 'dist'),
    HtmlWebpackPlugin   = require('html-webpack-plugin'),
    ExtractTextPlugin   = require('extract-text-webpack-plugin'),
    devtool             = (ENV === 'production') ? 'source-map' : 'eval-source-map';



plugins = [
    new HtmlWebpackPlugin({
        title: 'Jonathan RAMIER - Personal Website',
        template: 'src/index.html',
        //favicon: 'toto',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            useShortDoctype: true,
            removeOptionalTags: true,
            minifyURLs: true,
            quoteCharacter: "'"
        }
    })
];


/**
 * ===================================================================
 *
 *                          Production Mode
 *
 * ===================================================================
 */
if (ENV === 'production') {

    var prod_plugins = [
        new OccurenceOrderPlugin(true),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ];


    plugins.concat(prod_plugins);
}


/**
 * ===================================================================
 *
 *                          Development Mode
 *
 * ===================================================================
 */
if (ENV === 'development') {

    var dev_plugins = [
    ];

    plugins.concat(dev_plugins);
}




/**
 * ===================================================================
 *
 *                          Webpack configuration
 *
 * ===================================================================
 */
module.exports = {

    context: src,
    devtool: devtool,
    entry: [
        './app.ts'
    ],
    output: {
        sourceMapFilename: 'bundle.map',
        filename: 'site-bundle.js',
        path: dist
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: plugins
};