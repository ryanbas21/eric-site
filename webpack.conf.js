const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: '.',
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
		new webpack.HotModuleReplacementPlugin()
	]
};
