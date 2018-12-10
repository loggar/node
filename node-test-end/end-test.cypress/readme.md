# Cypress

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

## Install

```shell
npm install --save-dev cypress
```

## opening Cypress

cli

```shell
npx cypress open
# or
./node_modules/.bin/cypress open
```

npm script

```json
{
  // package.json

  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

```shell
npm run cypress:open
```

And explore the Cypress Examples `cypress/integration/examples/*.*.spec.js`

## Write a Simple Test

```js
// cypress/integration/exercise/ex.1.spec.js
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})
```

* describe and it come from Mocha
* expect comes from Chai

## Write a Real Test

```js
// cypress/integration/exercise/ex.2.visit.spec.js
describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')
  })
})
```

```js
// cypress/integration/exercise/ex.3.query.js
describe('My First Test', function() {
  it('finds the content "type"', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})
```

```js
// cypress/integration/exercise/ex.4.click.js
describe('My First Test', function() {
  it('clicks the link "type"', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  })
})
```

```js
// cypress/integration/exercise/ex.5.assertion.js
describe('My First Test', function() {
  it("clicking 'type' navigates to a new url", function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})
```

```js
// cypress/integration/exercise/ex.6.get.js
describe('My First Test', function() {
  it("Gets, types and asserts", function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
```

## pause, debug

```js
// cypress/integration/exercise/ex.7.pause.js
describe('My First Test', function() {
  it("clicking 'type' shows the right headings", function() {
    cy.visit('https://example.cypress.io')
    cy.pause()
    cy.contains('type').click()
     // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
```
