const fs = require('fs');
const path = require('path');

const ex4 = {
	readStatus: function (fileName, callback) {
		fs.readFile(path.join(__dirname, fileName), 'utf-8', (err, data) => {
			if (err) {
				return callback(err, null);
			}
			if (data && data.length > 0) {  // here
				return callback(null, data)
			} else {
				return callback(null, null)
			}
		});
	}
}

// test
describe('ex4', function () {
	// the error scenario is not covered.
	it('should read the data from the test file  ', function (done) {
		ex4.readStatus('ex.test.txt', (err, data) => {
			expect(err).toBeNull;
			expect(data).toBe('this is a test file')
			done();
		});
	});

	// does not cover !data case
	it('should throw an error if the file is not read  ', function (done) {
		ex4.readStatus('notexist', (err, data) => {
			expect(err.code).toEqual('ENOENT')
			expect(data).toBeNull;
			done();
		});
	});

	it('should throw an error if the file is not read  ', function (done) {
		ex4.readStatus('ex.test.nodata.txt', (err, data) => {
			expect(err).toBeNull;
			expect(data).toBeNull;
			done();
		});
	});
});