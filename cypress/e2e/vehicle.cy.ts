/// <reference types="cypress" />

describe('Select Vehicle Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('should mock a successful API response', () => {
    // cy.visit('/')
    // cy.intercept('/api/data', { message: 'Mocked data response' }).as('mockedResponse')
    cy.get('[data-testid="api-trigger"]').click()
  })
})