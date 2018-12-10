describe('My First Test', function () {
	it("clicking 'type' navigates to a new url", function () {
		cy.visit('https://example.cypress.io')

		cy.contains('type').click()

		// Should be on a new URL which includes '/commands/actions'
		cy.url().should('include', '/commands/actions')
	})
})