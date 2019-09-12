const webpack = require('webpack');
const path = require('path');

//**Plugins


//**Files and folders
const outputFolder = path.resolve(__dirname, 'wwwroot', 'bundles');
const publicPath = path.resolve(__dirname, 'wwwroot');
const inputFolder = path.resolve(__dirname, 'ClientApp');
const mainJS = path.resolve(inputFolder, "js", "main.ts");
const mainSCSS = path.resolve(inputFolder, "scss", "styles.scss");

//**Input/Output
var EntryConfig = {
    main: [mainJS, mainSCSS]
};
var OutputConfig = {
    filename: '[name].bundle.js',
    path: outputFolder,
    publicPath: publicPath
};
//Return Object
const CommonConfig = {
    entry: EntryConfig,
    output: OutputConfig,
    module: {
        rules: []
    },
    resolve: {
        extensions: ['.js','.ts']
    },
    plugins: []
};
module.exports = CommonConfig;