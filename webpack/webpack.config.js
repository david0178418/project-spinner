const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {
	NODE_ENV = '',
} = process.env;

const IS_DEV = NODE_ENV === 'development';

const envConfig = IS_DEV ?
	require('./webpack.development') :
	require('./webpack.production');

/**
* @typedef { import('webpack').Configuration } Configuration
*
* @type {Configuration}
*/
module.exports = merge(envConfig, {
	entry: [
		resolve(__dirname, '../src/index.ts'),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@common': resolve(__dirname, '../src/common/'),
			'@components': resolve(__dirname, '../src/components/'),
			'@pages': resolve(__dirname, '../src/pages/'),
			'@root': resolve(__dirname, '../src/'),
		},
	},
	output: {
		path: resolve(__dirname, '../build'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'linaria/loader',
						options: {
							sourceMap: !IS_DEV,
						},
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: IS_DEV ? 'tsconfig.json' : 'tsconfig.prod.json',
						},
					},
				],
				exclude: [
					/static/,
					/node_modules/,
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
	plugins: [
		new DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(NODE_ENV),
			},
		}),
		new CleanWebpackPlugin(),
		// Replacing with bash command since this is weirdly minifying
		// which in turn is creating more weird issues with requirejs.
		// Making dev only
		// new CopyPlugin({
		// 	patterns: [
		// 		{
		// 			from: resolve(__dirname, '../src/static'),
		// 		},
		// 	],
		// }),
		new HtmlWebpackPlugin({
			publicPath: '',
			template: resolve(__dirname, '../src/index.html'),
		}),
	],
});
