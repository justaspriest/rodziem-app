const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main/javascript/app.js'
    },
    output: {
        filename: 'js/rodziem-app.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
};
