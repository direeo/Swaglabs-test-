
describe('Product Sorting Functionality', () => {

  //  function to normalize product names for a robust, case-insensitive check.
  const normalizeName = (text) => text.trim().toLowerCase();

  // function to convert price strings (e.g., "$29.99") into numbers (29.99).
  const normalizePrice = (text) => parseFloat(text.replace('$', ''));

  // function to verify if an array is sorted in the specified order.
  const isSorted = (arr, order) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (order === 'asc' && arr[i] > arr[i + 1]) {
        return false;
      }
      if (order === 'desc' && arr[i] < arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  beforeEach(() => {
    cy.loginWithValidCredentials();

    cy.location('pathname', { timeout: 10000 }).should('include', '/inventory.html');
    
    cy.get('.inventory_item', { timeout: 10000 }).should('have.length.greaterThan', 0);
  });


  it('sorts products by Name (A to Z)', () => {
    cy.get('[data-test="product-sort-container"]').select('az');

    cy.get('.inventory_item_name').then(($elements) => {
      const names = $elements.toArray().map(el => normalizeName(el.innerText));
      expect(isSorted(names, 'asc')).to.be.true;
    });
  });

  it('sorts products by Name (Z to A)', () => {
    cy.get('[data-test="product-sort-container"]').select('za');
    cy.get('.inventory_item_name').then(($elements) => {
      const names = $elements.toArray().map(el => normalizeName(el.innerText));
      expect(isSorted(names, 'desc')).to.be.true;
    });
  });

  it('sorts products by Price (Low to High)', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.get('.inventory_item_price').then(($elements) => {
      const prices = $elements.toArray().map(el => normalizePrice(el.innerText));
      expect(isSorted(prices, 'asc')).to.be.true;
    });
  });

  it('sorts products by Price (High to Low)', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo');
    cy.get('.inventory_item_price').then(($elements) => {
      const prices = $elements.toArray().map(el => normalizePrice(el.innerText));
      expect(isSorted(prices, 'desc')).to.be.true;
    });
  });
});
