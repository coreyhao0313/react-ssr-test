const path = require("path");
const nodeExternals = require('webpack-node-externals');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
　　entry: ['@babel/polyfill', './src/server.js'],
    externals: [nodeExternals()],
　　module: {
　　　　rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
        　　　　test: /\.jpg|png|gif$/,
        　　　　use: {
        　　　　　　loader: "url-loader",
        　　　　　　options: {
        　　　　　　　　name: "[name]_[hash].[ext]",
        　　　　　　　　outputPath: "images/",
        　　　　　　　　limit: 2048
        　　　　　　}
        　　　　}
        　  },
            {
        　　　　test: /\.eot|ttf|svg|woff$/,
        　　　　use: {
        　　　　　　loader: "file-loader"
        　　　　}
        　  },
            {
        　　　　test: /\.scss$/,
        　　　　use: [
        　　　　　　"style-loader",
        　　　　　　{
        　　　　　　　　loader: "css-loader",
        　　　　　　　　options: {
        　　　　　　　　　　importLoaders: 2
        　　　　　　　　}
        　　　　　　},
        　　　　　　"sass-loader",
        　　　　　　"postcss-loader"
        　　　　]
            },
            {
        　　　　test: /\.css$/,
        　　　　use: [
        　　　　　　"style-loader",
        　　　　　　"css-loader",
        　　　　　　"postcss-loader"
        　　　　]
        　　}
        ]
    },
// 　　plugins: [
// 　　　　new HtmlWebpackPlugin({
// 　　　　　　template: "src/index.html"
// 　　　　}),
// 　　　　new CleanWebpackPlugin()
// 　　],
　　output: {
　　　　filename: "bundle.js",
　　　　path: path.resolve(__dirname, "../dist")
　　}
};

/*
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        index: ['./src/server.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } }
        ]
    }
};
*/