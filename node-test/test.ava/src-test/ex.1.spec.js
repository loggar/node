import test from 'ava';

import { offset } from '../src/ex.1'

// test.todo('Offset a number by an amount');
test('Offset a number by an amount', t => {
	t.is(offset(10, 50), 60);
	t.is(offset(-10, 50), 40);
	t.is(offset(10.5, 50), 60.5);
});

// test.todo('Offset a number(string-int-format) by an amount');
test('Offset a number(string-int-format) by an amount', t => {
	t.is(offset('10', 50), 60);
});

test.todo('Offset a number(string-float-format) by an amount');
