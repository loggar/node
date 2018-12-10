var getFibonaccie = function (total) {
	var results = [0, 1];
	for(var i=0; i<total; i++) {
		if(i>=2) {
			results.push(results[i-2] + results[i-1]);
		}
	}
	return results[results.length-1];
};

module.exports = getFibonaccie;