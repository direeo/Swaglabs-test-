describe('Product Sorting Functionality', () => {
  beforeEach(() => {
    cy.loginWithValidCredentials(); // ✅ custom command from commands.js
  });

  it('should sort products A-Z', () => {
    cy.get('[data-test="product_sort_container"]').select('az');
    cy.get('.inventory_item_name').then(($items) => {
      const itemTexts = [...$items].map(item => item.innerText);
      const sortedTexts = [...itemTexts].sort((a, b) => a.localeCompare(b));
      expect(itemTexts).to.deep.equal(sortedTexts);
    });
  });

  it('should sort products Z-A', () => {
    cy.get('[data-test="product_sort_container"]').select('za');
    cy.get('.inventory_item_name').then(($items) => {
      const itemTexts = [...$items].map(item => item.innerText);
      const sortedTexts = [...itemTexts].sort((a, b) => b.localeCompare(a));
      expect(itemTexts).to.deep.equal(sortedTexts);
    });
  });

  it('should sort products by Price Low-High', () => {
    cy.get('[data-test="product_sort_container"]').select('lohi');
    cy.get('.inventory_item_price').then(($items) => {
      const prices = [...$items].map(item => parseFloat(item.innerText.replace('$', '')));
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });

  it('should sort products by Price High-Low', () => {
    cy.get('[data-test="product_sort_container"]').select('hilo');
    cy.get('.inventory_item_price').then(($items) => {
      const prices = [...$items].map(item => parseFloat(item.innerText.replace('$', '')));
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });
});
