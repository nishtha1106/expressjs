let assert = require('chai').assert;
let add= require('../add').addNumbers(7,3);
let multi= require('../multi').multiNumbers(2,3);

describe('App', ()=> {

	it('add should be 10', function() {
		let result = add;
		assert.equal(result,10);
	});

	it('multiply should be 6', ()=> {
		let result = multi;
		assert.equal(result,6);
	});

});