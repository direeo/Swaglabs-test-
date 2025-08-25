describe('Shopping Cart Functionality', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should add item to shopping cart', () => {
    cy.get('[data-test^="add-to-cart"]').first().click();
    cy.get('.shopping_cart_badge').should('be.visible').and('contain.text', '1');
    cy.get('[data-test^="remove"]').first().should('be.visible');
  });

  it('should remove item from shopping cart', () => {
    cy.get('[data-test^="add-to-cart"]').first().click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('[data-test^="remove"]').first().click();
    cy.get('.shopping_cart_badge').should('not.exist');
    cy.get('[data-test^="add-to-cart"]').first().should('be.visible');
  });

  it('should open shopping cart', () => {
    cy.get('[data-test^="add-to-cart"]').first().click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('#cart_contents_container').should('be.visible');
  });
});