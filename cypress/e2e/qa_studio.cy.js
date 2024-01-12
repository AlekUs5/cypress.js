
describe ('Тестирование https://login.qa.studio/', function () {
    it('Проверка на позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#form > .header').should('be.visible').should('have.text', 'Форма логина'); // надпись форма логина
         cy.get('#mail').type('german@dolnikov.ru'); // input login
         cy.get('#pass').type('iLoveqastudio1'); //input pass
         cy.get('#loginButton').click(); // button_Enter
         cy.get('#messageHeader').should('be.visible').should('have.text', 'Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
         
     }) 
     it('Проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('be.visible').should('have.text', 'Забыли пароль?').click();
         cy.get('#mailForgot').type('german@dolnikov.ru'); // input login
         cy.get('#restoreEmailButton').click(); // button_Enter
         cy.get('#messageHeader').should('be.visible').should('have.text', 'Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
    })
    it('Проверка на негативный кейс авторизации Pass', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#form > .header').should('be.visible').should('have.text', 'Форма логина'); // надпись форма логина
         cy.get('#mail').type('german@dolnikov.ru'); // input login
         cy.get('#pass').type('dvbgftyrfs').type('{enter}'); //input pass and button Enter
         
         cy.get('#messageHeader').should('be.visible').should('have.text', 'Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
    })
     it('Проверка на негативный кейс авторизации Login', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#form > .header').should('be.visible').should('have.text', 'Форма логина'); // надпись форма логина
         cy.get('#mail').type('qastudio@dolnikov.ru'); // input login
         cy.get('#pass').type('iLoveqastudio1').type('{enter}'); //input pass and button Enter
         
         cy.get('#messageHeader').should('be.visible').should('have.text', 'Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
    })
    it('Проверка на негативный кейс авторизации без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form > .header').should('be.visible').should('have.text', 'Форма логина'); // надпись форма логина
        cy.get('#mail').type('germandolnikov.ru'); // input login
        cy.get('#pass').type('iLoveqastudio1').type('{enter}'); //input pass and button Enter
        
        cy.get('#messageHeader').should('be.visible').should('have.text', 'Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
   })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#form > .header').should('be.visible').should('have.text', 'Форма логина'); // надпись форма логина
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // input login
        cy.get('#pass').type('iLoveqastudio1'); //input pass
        cy.get('#loginButton').click(); // button_Enter
        cy.get('#messageHeader').should('be.visible').should('have.text', 'Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
 })
})