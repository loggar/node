// Don't do this!
/*
test('the data is peanut butter', () => {
	function callback(data) {
		expect(data).toBe('peanut butter');
	}

	fetchData(callback);
});
*/

test('the data is peanut butter', done => {
	function callback(data) {
		expect(data).toBe('peanut butter');
		done();
	}

	fetchData(callback);
});