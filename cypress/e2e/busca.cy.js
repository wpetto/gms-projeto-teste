/// <reference types="cypress" />

describe('US-00-Funcionalidade: busca de filmes', () => {
  beforeEach(() => {
     cy.visit('/')
  });

  it.skip('Deve buscar filmes com sucesso', () => {
    cy.get('#search-input').type('marvel')
    cy.contains('#search-button','Buscar').click()
    cy.get('#results-section').should('contain' , 'Marvel')
  })

  it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
    cy.get('#search-input').type(filmes[0].titulo)
    cy.contains('#search-button','Buscar').click()
    cy.get('#results-section').should('contain', filmes[0].titulo)
  })
  })

  it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').each((filmes) => {
    cy.get('#search-input').clear().type(filmes.titulo)
    cy.contains('#search-button','Buscar').click()
    cy.get('#results-section').should('contain', filmes.titulo)
  })
  })
    
})