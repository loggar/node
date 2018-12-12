import { readFile } from 'fs';
readFile('./foo.txt', (err, source) => {
	if (err) {
		console.error(err);
	} else {
		console.log(source);
	}
});