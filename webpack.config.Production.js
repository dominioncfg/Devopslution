const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//**Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
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
            }) ]
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules:
            [
                //JS
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                },

                //TypeScript
                {
                    test: /\.(ts|tsx)?$/,
                    loader: 'ts-loader',
                    options: {
                      
                    }
                },
                //CSS           
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "style-loader", options: {
                                sourceMap: true
                            }
                        }
                    ],
                    exclude: /\.module\.css$/
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                    ],
                    include: /\.module\.css$/
                },
                //Sass
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                     /*    {
                            loader: "css-loader", options: {
                                sourceMap: true,
                                url: false
                            }
                        },
                        {
                            loader: "sass-loader", options: {
                                sourceMap: true
                            }
                        } */
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