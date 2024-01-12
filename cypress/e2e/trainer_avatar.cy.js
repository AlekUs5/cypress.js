Cypress.Commands.add('payAvatar', (num) => {
    cy.get('.shop__list > li')
         .not('.feature-empty')
         .children('.shop__button')
         .eq(num)
         .click();                 
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Super Aleks');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__adv').click();         
})

describe('Покупка аватара', function () {
    it('Change Trainer Avatar', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('hejejo9968@telvetto.com');
         cy.get('#password').type('Cypress8');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click(); // enter to shop
         cy.payAvatar(0);
         cy.payAvatar(1);
         cy.payAvatar(2);
         cy.payAvatar(3);
         cy.payAvatar(4);
         cy.payAvatar(5);
         cy.payAvatar(6);
         cy.payAvatar(7);
         cy.payAvatar(8);
         cy.payAvatar(9);
         cy.payAvatar(10);
    
    })
})
 