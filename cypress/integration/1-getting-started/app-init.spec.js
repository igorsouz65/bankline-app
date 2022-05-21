describe('App initialization', () => {

    it('Select correntistas from API on load', () => {
        cy.visit('/movimentacoes-new');

        cy.get('select#iCorrentista option')
        .its('length', { log: false }).then(n => {
            cy.get('select').eq('0').select(Cypress._.random(n - 1))
        })
        
    })
})