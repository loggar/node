import { Selector } from 'testcafe';

fixture`Getting Started`
	.page`http://devexpress.github.io/testcafe/example`;

test('test ex3', async t => {
	await t
		.typeText('#developer-name', 'John Smith')
		.click('#submit-button')

		// Use the assertion to check if the actual header text is equal to the expected one
		.expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});
