describe('Checkout Functionality', () => {
  beforeEach(() => {
    cy.loginWithValidCredentials(); // ✅ your custom command from commands.js
    cy.get('[data-test^="add-to-cart"]').first().click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
  });

  it('should display checkout form', () => {
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').should('be.visible');
    cy.get('[data-test="lastName"]').should('be.visible');
    cy.get('[data-test="postalCode"]').should('be.visible');
    cy.get('[data-test="continue"]').should('be.visible');
  });

  it('should fill checkout form and continue', () => {
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('#checkout_summary_container').should('be.visible');
  });

  it('should show error with empty form', () => {
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'First Name is required');
  });
});
