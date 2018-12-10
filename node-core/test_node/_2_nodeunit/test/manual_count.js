exports.testPony = function(test) {
	var count = 0;
	if (false) {
		test.ok(false, 'This should not have passed.');
		count++;
	}
	test.ok(true, 'This should have passed.');
	count++;
	test.equal(count, 2, 'Not all assertions triggered.');
	test.done();
}

exports.testSomething = function(test) {
	test.expect(1);
	test.ok(true, "this assertion should pass");
	test.done();
};

exports.testSomethingElse = function(test) {
	test.ok(false, "this assertion should fail");
	test.done();
};