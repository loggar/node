const ex = require('../../src/ex/ex.1.basic');

describe('ex1', function () {
	it('should add 2 and 3 to give 5', function () {
		expect(ex.add(2, 3)).toEqual(5);
	});
});