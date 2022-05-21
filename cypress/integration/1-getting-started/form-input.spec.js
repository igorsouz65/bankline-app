describe('Form input', () => {
    beforeEach(() => {
        cy.visit( '/movimentacoes-new' );
    })

    it('Focuses the input on load', () => {
        cy.focused().should('have.id', 'iDescricao');
    })

    it('Accepts input', () => {
        const value = 'New todo';
        cy.get('#iDescricao')
            .type(value)
            .should('have.value', value);
    })
    
})