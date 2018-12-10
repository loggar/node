const OperateSample = require('../../src/ex/OperateSample')

const oper = new OperateSample()

describe("Add", function () {
	it("should add all numbers of arr", function () {
		var v = oper.add(1, 2)
		expect(v).toBe(3)
	});

	it("should add all numbers of arr", function () {
		var v = oper.add(1, 2, 3, 4)
		expect(v).toBe(10)
	});
});
