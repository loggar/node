var fibonacci = function (total) {
	var results = [0, 1];
	for (var i = 0; i < total; i++) {
		if (i >= 2) {
			results.push(results[i - 2] + results[i - 1]);
		}
	}
	return results[results.length - 1];
};

exports.testGetFibonacciNumber = function (test) {
	test.expect(3);
	test.equal(fibonacci(8), 13, 'Wrong fibonacci!! 8 th fibonacci number is 13.');
	test.equal(fibonacci(9), 21, 'Wrong fibonacci!! 9 th fibonacci number is 21.');
	test.equal(fibonacci(10), 34, 'Wrong fibonacci!! 10 th fibonacci number is 34.');
	test.done();
};