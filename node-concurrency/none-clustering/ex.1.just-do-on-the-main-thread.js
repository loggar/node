function doComputationWorkSync(input) {
	return input + ' entered.'
}

function myRequestHandler(request, response) {
	// Let's bring everything to a grinding halt for half a second.
	var results = doComputationWorkSync(request.somesuch);
	console.log(results);
}

myRequestHandler({
	somesuch: 'value_1'
});