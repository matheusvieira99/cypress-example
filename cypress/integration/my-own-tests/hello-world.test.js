///<reference types="cypress" />

describe('Validar pagina', () => {
        beforeEach(() => {
            cy.visit('https://demoqa.com/');
            
            //mocha
            cy.contains('TOOLSQA.COM').should('have.text', '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.');
    
            //clicando em elements
            //usando css selector
            cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body').click();
    
            //mudar tamanho da tela
            //cy.viewport('samsung-note9');
            cy.viewport(1280,720);

        });

    it('Validar checkbox', () => {
        cy.get('#item-1').click();
        cy.get('#tree-node > ol > li > span > button > svg').first().click();
        cy.get('#tree-node > ol > li > ol > li:nth-child(1) > span > button > svg').click();
        cy.get('#tree-node > ol > li > ol > li:nth-child(1) > ol > li:nth-child(1) > span > label > span.rct-checkbox > svg').click();
        cy.get('#tree-node').should('contain.html', 'class="rct-icon rct-icon-check"');


    })

    //teste negativo
    // it('teste negativo', () => {
    //     expect(true).to.equal(false);
    // })
})