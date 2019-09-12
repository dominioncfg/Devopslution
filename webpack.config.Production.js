const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//**Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',

    optimization: {
        minimizer: [
            //Minimize JS
            new TerserJSPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                sourceMap: true
            }),
            //Minimize CSS
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    sourceMap: true,
                    map: {
                        inline: false,
                        annotation: true
                    }
                }
            })]
    },

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
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
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
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader", options: {
                            sourceMap: true,
                            url: false
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
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
});
