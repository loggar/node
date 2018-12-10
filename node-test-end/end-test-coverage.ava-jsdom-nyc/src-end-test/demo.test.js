import test from 'ava';

test('can query for DOM elements', t => {
	document.body.innerHTML = '<p>Hello, world</p>';

	const para = document.querySelector('p');

	t.is(para.innerHTML, 'Hello, world');
});