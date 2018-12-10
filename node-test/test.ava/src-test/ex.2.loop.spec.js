import test from 'ava';

const bounds = function (arrs) {
	let p1, p2;
	if (!arrs) return [[0, 0], [100, 100]];
	p1 = !arrs[0] ? [0, 0] : arrs[0];
	p2 = !arrs[1] ? [100, 100] : arrs[1];
	return [p1, p2];
}

test('loop examples', t => {
	const cases = [
		{ input: undefined, expected: [[0, 0], [100, 100]] },
		{ input: [[0, 0], [1000, 1000]], expected: [[0, 0], [1000, 1000]] },
		{ input: [[-100, -100], [0, 0]], expected: [[-100, -100], [0, 0]] },
	];

	cases.forEach(item => {
		t.deepEqual(bounds(item.input), item.expected);
	});
});
