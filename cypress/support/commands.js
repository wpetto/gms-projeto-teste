// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('alertMensagem', () => {
    cy.on('window:alert', (mensagem) => {  //Pega a alert e verifica se o texto está incluso
        expect(mensagem).to.include('Por favor, digite o nome de um filme')
    })
})

Cypress.Commands.add('clicarBusca', () => {
    cy.contains('#search-button', 'Buscar').click()
})

Cypress.Commands.add('addFilme', (filme) => {
    cy.get('#search-input').type(filme)
})

Cypress.Commands.add('verificarResultado', (filme) => {
    cy.get('#results-section').should('contain', filme)
})

Cypress.Commands.add('limparBusca', () => {
    cy.contains('#clear-button', 'Limpar Busca').click()
})
