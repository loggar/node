const ex = require('../../src/ex/ex.2.conditional');

describe('ex2', function () {
	it('should return a value based on conditions', function () {
		expect(ex.add2(2, 3)).toEqual(5);
	});
	it('should return null when no value is passed', function () {
		expect(ex.add2()).toBeNull;
	});
});
