///<reference types="cypress" />

describe('Validar pagina', () => {
    it('test 1', () => {
        cy.visit('https://demoqa.com/');
        
        //mocha
        cy.contains('TOOLSQA.COM').should('exist');

        //clicando em elements
        //1 forma
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body').click();

        
    })

    //teste negativo
    it('teste negativo', () => {
        expect(true).to.equal(false);
    })
})