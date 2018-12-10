fixture`Getting Started`
	.page`http://devexpress.github.io/testcafe/example`;

test('test ex1', async t => {
	await t
		.typeText('#developer-name', 'John Smith')
		.click('#submit-button');
});
