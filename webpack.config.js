const path = require('path');

// Import error for postcss process
//var autoprefixer = require('autoprefixer');
//var precss       = require('precss');
//var postcss       = require('postcss');

module.exports = {
    // Main file for app
    entry: {
        js: './src/index.js'
    },
    // Output file compiled
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // Task to sass file
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            // Task to images files
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // Task to fonts files
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    watch: true
};