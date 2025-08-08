/// <reference types="cypress" />
import "../../cypress/support/page/pageFilme"
describe('US001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  //CT001 
  /*
  it('Busca de filmes com palavra-chave válida', () => {
    cy.get('#search-input').type('marvel')
    cy.contains('#search-button', 'Buscar').click()

    cy.get('#results-section').should('contain', 'Marvel')
  })

  it('Busca de filmes com palavra-chave válida de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[0].titulo)
      cy.contains('#search-button', 'Buscar').click()

      cy.get('#results-section').should('contain', filmes[0].titulo)
    })
  })
  */

  //CT001 
  it('Busca todos os filmes com palavra-chave válida de uma lista', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.contains('#search-button', 'Buscar').click()
      cy.get('#results-section').should('contain', filmes.titulo)
    })
  })

  //CT002
  it('Busca de filmes sem palavra-chave válida', () => {
    cy.clicarBusca()
    cy.alertMensagem()
  })

  //CT003
  /*
  it('Busca de filmes com palavra-chave válida com espaço', () => {
    cy.addFilme('Marvel ')
    cy.clicarBusca()
    cy.verificarResultado()
    //Deve aparecer resultados mesmo com espaço após o texto
  })
  */

  //CT004
  it('Busca de filmes sem resultados', () => {
    cy.addFilme('Ma')
    cy.clicarBusca()
    cy.verificarResultado('')
    //Não deve aparecer resultado
  })

  //CT005
  it('Limpeza da Busca de Filmes', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[2].titulo)
      cy.contains('#search-button', 'Buscar').click()
      cy.get('#results-section').should('contain', filmes[2].titulo)
    })
    cy.limparBusca()
  })

})