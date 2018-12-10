var index = require("../src/module.1");
var chai = require("chai");
var expect = chai.expect;

/*
describe("Broken Async Code", function () {
	it('Async test', function () {
		setTimeout(function () {
			//failing test
			expect(true).to.be.false;
		}, 1000);
	});
});
*/

describe("Fixed Async Code", function () {
	it('Async test', function (done) {     // Done added here.
		setTimeout(function () {
			//failing test
			expect(true).to.be.false;
			done();     // Tells mocha to run next test.
		}, 1000);
	});
});
