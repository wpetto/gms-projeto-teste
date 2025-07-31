/// <reference types="cypress" />

describe('US001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
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
    cy.get('#search-input')
    cy.contains('#search-button', 'Buscar').click()
    cy.on('window:alert', (mensagem) => {  //Pega a alert e verifica se o texto está incluso
      expect(mensagem).to.include('Por favor, digite o nome de um filme')
    })
  })

  //CT003
  it('Busca de filmes com palavra-chave válida com espaço', () => {
    cy.get('#search-input').type('marvel ')
    cy.contains('#search-button', 'Buscar').click()

    cy.get('#results-section').should('contain', 'Marvel')
    //Deve aparecer resultados mesmo com espaço após o texto
  })

  //CT004
  it('Busca de filmes sem resultados', () => {
    cy.get('#search-input').type('ma')
    cy.contains('#search-button', 'Buscar').click()

    cy.get('#results-section').should('contain', 'Filme não encontrado.')
    //Não deve aparecer resultado
  })

  //CT005
  it('Limpeza da Busca de Filmes', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[2].titulo)
      cy.contains('#search-button', 'Buscar').click()

      cy.get('#results-section').should('contain', filmes[2].titulo)

      cy.contains('#clear-button', 'Limpar Busca').click()
      cy.get('#results-section').should('contain', '')
    })
  })

})