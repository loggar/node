import test from 'ava';
import { module1 } from '../src/module.1';

test('can import from demo module', t => {
	const expected = 'Hello, from demo module.';
	const result = module1();
	t.is(result, expected);
});
