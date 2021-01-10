const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
* @typedef { import('webpack').Configuration } Configuration
*
* @type {Configuration}
*/
module.exports = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.(s?css)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					'linaria/loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:8].css',
		}),
	],
};
