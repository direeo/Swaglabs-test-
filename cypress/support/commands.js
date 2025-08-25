// Custom commands for reusable functionality

// Command to login with valid credentials
Cypress.Commands.add('loginWithValidCredentials', () => {
  cy.fixture('credentials').then((credentials) => {
    cy.visit('/');
    cy.get('#user-name').type(credentials.valid.username);
    cy.get('#password').type(credentials.valid.password);
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });
});

// Command to login with invalid credentials
Cypress.Commands.add('loginWithInvalidCredentials', (username, password) => {
  cy.visit('/');
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

// Command to add item to cart
Cypress.Commands.add('addItemToCart', (itemIndex = 0) => {
  cy.get('[data-test^="add-to-cart"]').eq(itemIndex).click();
});

// Command to remove item from cart
Cypress.Commands.add('removeItemFromCart', (itemIndex = 0) => {
  cy.get('[data-test^="remove"]').eq(itemIndex).click();
});

// Command to verify shopping cart badge count
Cypress.Commands.add('verifyCartBadgeCount', (expectedCount) => {
  if (expectedCount > 0) {
    cy.get('.shopping_cart_badge').should('be.visible').and('contain.text', expectedCount);
  } else {
    cy.get('.shopping_cart_badge').should('not.exist');
  }
});

// Command to sort products by price high to low
Cypress.Commands.add('sortByPriceHighToLow', () => {
  cy.get('[data-test="product_sort_container"]').select('hilo');
});

// Command to verify products are sorted by price high to low
Cypress.Commands.add('verifyPriceSortHighToLow', () => {
  cy.get('.inventory_item_price').then(($prices) => {
    const prices = Array.from($prices).map(el => parseFloat(el.textContent.replace('$', '')));
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).to.be.gte(prices[i + 1]);
    }
  });
});