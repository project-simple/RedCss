var path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		"RedCss":'./src/RedCss.js',
		"RedCss.min" : './src/RedCss.js'
	},
	output: {
		library:'RedCss',
		libraryTarget: 'umd',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};