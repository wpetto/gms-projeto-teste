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
