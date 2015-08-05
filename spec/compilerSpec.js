
var expect = require('chai').expect,
	Compiler = require('../compiler');

describe('The local compiler', function() {	
	describe('The constructor', function() {
		
		var compiler;
		
		before(function() {
			compiler = new Compiler();
		})
		
		it('exposes the options', function() {
			expect(compiler.options).to.exist;
		});
		
		it('assigns default options', function() {			
			expect(compiler.options).to.have.property('output', './locale');
		});
	});	
});