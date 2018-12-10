var app = require("../src/Add");

describe("Add", function () {
	it("The function should add 2 numbers", function () {
		var v = app.AddNumber(1, 2);
		expect(v).toBe(3);
	});

	it("The function should add 2 numbers - this must fail.", function () {
		var v = app.AddNumber(1, 2);
		expect(v).toBe(0);
	});
});