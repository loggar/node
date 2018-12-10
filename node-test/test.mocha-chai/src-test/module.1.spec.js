var index = require("../src/module.1");
var chai = require("chai");
var expect = chai.expect;

describe("module.1 tests", function () {
	it("addTwoNumbers returns a number", function () {
		expect(index.addTwoNumbers(0, 0)).to.be.a("number");
	});
});

describe("index.js tests", function () {
	it("addTwoNumbers returns a number", function () {
		expect(index.addTwoNumbers(0, 0)).to.be.a("number");
	});
	it("addTwoNumbers can add 1 + 2", function () {
		expect(index.addTwoNumbers(1, 2)).to.equal(3);
	});
});
