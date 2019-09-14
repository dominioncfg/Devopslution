const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            //JS
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },

            //TypeScript
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                }
            },

            //CSS
            {
                test: /\.css$/,
                use:
                    [
                        "style-loader",
                        {
                            loader: "css-loader", options: {
                                sourceMap: true,
                                url: false
                            }
                        }
                    ],
            },
            //Sass
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader", 
                        options: {
                            sourceMap: true,
                            url: false,
                        }
                    },
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
    ]
});
