/* global __dirname */
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		"index": path.resolve(__dirname, "./src/index.js")
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js"
	},
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: [{
				loader: "babel-loader",
				options: {
					presets: [
						["es2015", {
							modules: false
						}]
					],
					plugins: []
				}
			}]
		}]
	},
	plugins: [
	]
};
