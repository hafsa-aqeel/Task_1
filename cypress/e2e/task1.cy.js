/// <reference types="cypress"/>

// demoblaze.cy.js
before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://www.demoblaze.com/', {
      onBeforeLoad(win) {
        win.sessionStorage.clear();
      }
    });
  });
  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });

//   // 1. Create account
//   it('Create account', () => {
//     cy.get('#signin2').click();
//     cy.get('#sign-username').type('opiasao');
//     cy.get('#sign-password').type('opuyiasa');
//     cy.contains('button', 'Sign up').click();
//     cy.on('window:alert', (str) => {
//       expect(str).to.equal('Sign up successful.');
//     });
//   });

  // 2. Login
  it('Login', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type('test');
    cy.get('#loginpassword').type('test');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  });