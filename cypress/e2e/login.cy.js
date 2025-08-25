describe('Login Functionality', () => {
  beforeEach(() => {
    // Add retry and better error handling
    cy.visit('https://www.saucedemo.com', { 
      timeout: 120000,
      failOnStatusCode: false 
    });
    
    // Wait for the page to be fully loaded
    cy.get('body', { timeout: 60000 }).should('be.visible');
  });

  it('should display login form elements', () => {
    cy.get('.login_container', { timeout: 30000 }).should('be.visible');
    cy.get('#user-name', { timeout: 30000 }).should('be.visible');
    cy.get('#password', { timeout: 30000 }).should('be.visible');
    cy.get('#login-button', { timeout: 30000 }).should('be.visible');
  });

  it('should login with valid credentials', () => {
    cy.get('#user-name', { timeout: 30000 }).type('standard_user');
    cy.get('#password', { timeout: 30000 }).type('secret_sauce');
    cy.get('#login-button', { timeout: 30000 }).click();
    
    // Wait for redirect and verify
    cy.url({ timeout: 60000 }).should('include', '/inventory.html');
    cy.get('#inventory_container', { timeout: 30000 }).should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    cy.get('#user-name', { timeout: 30000 }).type('invalid_user');
    cy.get('#password', { timeout: 30000 }).type('invalid_password');
    cy.get('#login-button', { timeout: 30000 }).click();
    
    cy.get('[data-test="error"]', { timeout: 30000 }).should('be.visible');
    cy.get('[data-test="error"]', { timeout: 30000 }).should('contain.text', 'Epic sadface');
  });

  it('should show error with empty credentials', () => {
    cy.get('#login-button', { timeout: 30000 }).click();
    cy.get('[data-test="error"]', { timeout: 30000 }).should('be.visible');
    cy.get('[data-test="error"]', { timeout: 30000 }).should('contain.text', 'Username is required');
  });
});