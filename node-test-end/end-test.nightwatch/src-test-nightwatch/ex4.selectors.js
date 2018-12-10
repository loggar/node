this.demoTestGoogle = function (browser) {
	browser
		.useXpath() // every selector now must be xpath
		.click("//tr[@data-recordid]/span[text()='Search Text']")
		.useCss() // we're back to CSS now
		.setValue('input[type=text]', 'nightwatch')
};
