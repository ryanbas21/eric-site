const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, './public'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	//devtool: 'source-map',
	module: {
		loaders: [
		{
			test: /\.js$/,
			loader: 'babel-loader'
		},
	 {
		 test: /\.(jpe?g|png|gif|svg)$/i, loader: "file"
	 },
	 {
		 test: /\.css$/, loaders: ["style","css"]
 	 }
 ]},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		outputPath: path.join(__dirname, './public'),
		proxy: {
				'/': {
					bypass: function (req, res, proxyOptions) {
						return '/public/index.html';
					}
				},
						'**': { target: 'http://localhost:3000', secure: false }
			}
		},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new WriteFilePlugin()
	]
};
