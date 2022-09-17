/// <reference types="cypress"/>

context('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the login page and display next button', () => {
    cy.get('p').contains('Next')
  })
})

export {}
