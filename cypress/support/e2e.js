// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// cypress/support/e2e.js
beforeEach(() => {
    cy.setCookie('CONSENT', 'YES+cb.20210328-17-p0.en+FX+100');
  });

import './commands'


Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test on uncaught exceptions
    return false;
  });
  
  Cypress.on('window:before:load', (win) => {
    // Prevent the function from being called
    win.solveSimpleChallenge = () => {};
  });
  