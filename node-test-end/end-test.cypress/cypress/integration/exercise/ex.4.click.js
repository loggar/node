describe('My First Test', function () {
	it('clicks the link "type"', function () {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()
	})
})