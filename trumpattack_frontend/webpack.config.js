const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
	// Functions for customizing webpack based on environment
	const addPlugin = (add, plugin) => add ? plugin : undefined;
	const ifProd = plugin => addPlugin(env.prod, plugin);

	// Remove undefined values
	const removeEmpty = array => array.filter(i => Boolean(i));

	return {
		entry: {
			app: './index.js',
			vendor: [
				'lodash',
				'react',
				'react-dom',
				'react-redux',
				'react-router',
				'redux',
				'redux-logger',
				'redux-thunk'
			]
		},
		output: {
			filename: '/bundle.[name].[hash].js',
			path: path.resolve(__dirname, 'dist'),
			pathinfo: !env.prod
		},
		context: path.resolve(__dirname, 'src'),
		devtool: env.prod ? 'source-map' : 'eval',
		bail: env.prod,
		module: {
			loaders: [
				{test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
				env.prod ? {
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
				} : {
					test: /\.scss$/, loaders: ['style', 'css', 'sass']
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					loaders: [
						'file?hash=sha512&digest=hex&name=/[hash].[ext]',
						'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
					]
				}
			]
		},
		externals: {
			'react/addons': true,
			'react/lib/ExecutionEnvironment': true,
			'react/lib/ReactContext': true
		},
		plugins: removeEmpty([
			new HtmlWebpackPlugin({
				template: './index.html',
				favicon: './favicon.ico'
			}),
			// Split in vendor
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),
			// Split css
			ifProd(new ExtractTextPlugin('/bundle.style.[chunkhash].css')),
			// Remove duplicated plugins
			ifProd(new webpack.optimize.DedupePlugin()),
			// Minimize
			ifProd(new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			})),
			ifProd(new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			})),
			// Uglify code if production
			ifProd(new webpack.optimize.UglifyJsPlugin({
				compress: {
					screw_ie8: true,
					warnings: false
				}
			}))
		])
	};
};
