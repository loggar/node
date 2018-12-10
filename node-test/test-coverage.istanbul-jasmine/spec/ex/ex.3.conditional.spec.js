const ex = require('../../src/ex/ex.3.conditional');

describe('ex3', function () {
	it('should return expected value ', function () {
		expect(ex.doSomething({ val: 2 })).toEqual(2);
	});
	it('should return expected value ', function () {
		expect(ex.doSomething()).toBeUndefined;
	});
});
