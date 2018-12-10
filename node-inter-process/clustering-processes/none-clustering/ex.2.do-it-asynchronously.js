function doComputationWorkSync(input) {
	return input + ' entered.'
}

function doComputationWork(input, callback) {
	// Because the internal implementation of this asynchronous
	// function is itself synchronously run on the main thread,
	// you still starve the entire process.
	var output = doComputationWorkSync(input);
	process.nextTick(function () {
		callback(null, output);
	});
}

function myRequestHandler(request, response) {
	// Even though this *looks* better, we're still bringing everything
	// to a grinding halt.
	doComputationWork(request.somesuch, function (err, results) {
		if (err) console.log(err);
		console.log(results);
	});
}

myRequestHandler({
	somesuch: 'value_1'
});

myRequestHandler({
	somesuch: 'value_2'
});

myRequestHandler({
	somesuch: 'value_3'
});
