const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/**
* @typedef { import('webpack').Configuration } Configuration
*
* @type {Configuration}
*/
module.exports = {
	mode: 'production',
	optimization: {
		minimizer: [
			new TerserPlugin(),
			new OptimizeCssAssetsPlugin(),
		],
	},
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
