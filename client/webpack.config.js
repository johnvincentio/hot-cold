// const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_FOLDER = path.resolve(__dirname, './src');
const DIST_FOLDER = path.resolve(APP_FOLDER, './dist');
const DIST_FOLDER_STYLE = path.resolve(DIST_FOLDER, './css');

const config = {
	entry: ['./src/index.jsx', './src/scss/styles.scss'],
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js',
	},

	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		// inline: true,
		port: 8025,
		proxy: {
			'/api/**': { target: 'http://localhost:3001', changeOrigin: true, secure: false },
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				// regular css files
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader/url!file-loader',
					use: ['css-loader'],
					publicPath: DIST_FOLDER_STYLE,
				}),
			},
			{
				// sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new ExtractTextPlugin({
			// define where to save the file
			filename: '[name].bundle.css',
			allChunks: true,
		}),
		new CopyWebpackPlugin([{ from: 'index.html', to: '.' }], { debug: 'info' }),
	],
};

module.exports = config;

/*
		proxy: {
			'/api/**': { target: 'http://[::]:3001', changeOrigin: true, secure: false },
		},
		proxy: {
			'/api': 'http://localhost:3001',
		},

  proxy: {
    "/api": {
      "target": {
        "host": "action-js.dev",
        "protocol": 'http:',
        "port": 80
      },
      ignorePath: true,
      changeOrigin: true,
      secure: false
    }
	}
*/

/*
 devServer: {
	port:8080,
	host: "200.200.106.133",
	https: true,
	compress: true,
	contentBase: './src/public',
	historyApiFallback: true,
	stats: 'minimal',
	proxy: {
		"**": "https://200.200.107.226",
		secure: false
	}
}

 devServer: {
	port:8080,
	host: "200.200.106.133",
	https: true,
	compress: true,
	contentBase: './src/public',
	historyApiFallback: true,
	stats: 'minimal',
        proxy: {
            '**': {
                target: 'https://200.200.107.226',
                secure: false
            }
        }
}

*/
