var path = require('path');
var glob = require('glob');
var _ = require('underscore')._;

var defaultOptions = {
	output: './locale',
	match: './locale/**/*.js',
	locales: ['en']
};

var compiler = function() {
	
	var self = this;
		
	this.options = defaultOptions;
		
};

module.exports = compiler;