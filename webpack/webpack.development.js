const path = require('path');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
* @typedef { import('webpack').Configuration } Configuration
*
* @type {Configuration}
*/
module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		filename: '[name].bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, '../build'),
		historyApiFallback: true,
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.(s?css)$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		// Temporarily making this dev only
		new CopyPlugin({
			patterns: [
				{
					from: resolve(__dirname, '../src/static'),
				},
				{
					from: resolve(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.min.css'),
					to: resolve(__dirname, '../build/'),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:8].css',
		}),
	],
};
