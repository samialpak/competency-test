const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { 
        path: path.join(__dirname, "build"), 
        filename: "index.bundle.js" 
    },
    mode: process.env.NODE_ENV || "production",
    resolve: { 
        modules: [path.resolve(__dirname, "src"), "node_modules"] 
    },
    devServer: { 
        contentBase: path.join(__dirname, "src"), 
        port: 9000 
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: 'index.html',
            favicon: "./public/favicon.ico",
            inject: true
        })        
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                format: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
    },
};