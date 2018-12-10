import { Selector } from 'testcafe';

fixture`Getting Started`
	.page`http://devexpress.github.io/testcafe/example`;

test('test ex2', async t => {
	await t
		.typeText('#developer-name', 'John Smith')
		.click('#submit-button');

	const articleHeader = await Selector('.result-content').find('h1');

	// Obtain the text of the article header
	let headerText = await articleHeader.innerText;

	console.log(headerText);
});
