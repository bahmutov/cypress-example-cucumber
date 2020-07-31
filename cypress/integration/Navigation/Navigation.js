import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I am on Navigation page', () => {
  cy.visit('https://example.cypress.io')
  cy.get('.navbar-nav').contains('Commands').click()
  cy.get('.dropdown-menu').contains('Navigation').click()
});

Then('location includes {string}', (text) => {
  cy.location('pathname').should('include', text)
})

Then('location should not include {string}', (text) => {
  cy.location('pathname').should('not.include', text)
})

When('I go {string}', (direction) => {
  cy.go(direction)
})

defineParameterType({
  name: "goNumber",
  regexp: /-?\d+/,
  transformer(s) {
    return parseInt(s, 10);
  }
});

When('I go by {goNumber}', (direction) => {
  cy.go(direction)
})
