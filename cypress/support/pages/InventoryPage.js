class InventoryPage {
  // Selectors
  elements = {
    inventoryContainer: '#inventory_container',
    productItems: '.inventory_item',
    addToCartButtons: '[data-test^="add-to-cart"]',
    removeFromCartButtons: '[data-test^="remove"]',
    shoppingCartBadge: '.shopping_cart_badge',
    shoppingCartLink: '.shopping_cart_link',
    sortDropdown: '[data-test="product_sort_container"]',
    productNames: '.inventory_item_name',
    productPrices: '.inventory_item_price',
    burgerMenu: '#react-burger-menu-btn',
    logoutLink: '#logout_sidebar_link'
  };

  // Actions
  addItemToCart(itemIndex = 0) {
    cy.get(this.elements.addToCartButtons).eq(itemIndex).click();
  }

  removeItemFromCart(itemIndex = 0) {
    cy.get(this.elements.removeFromCartButtons).eq(itemIndex).click();
  }

  openShoppingCart() {
    cy.get(this.elements.shoppingCartLink).click();
  }

  sortByPriceHighToLow() {
    cy.get(this.elements.sortDropdown).select('hilo');
  }

  sortByPriceLowToHigh() {
    cy.get(this.elements.sortDropdown).select('lohi');
  }

  sortByNameAZ() {
    cy.get(this.elements.sortDropdown).select('az');
  }

  sortByNameZA() {
    cy.get(this.elements.sortDropdown).select('za');
  }

  openBurgerMenu() {
    cy.get(this.elements.burgerMenu).click();
  }

  logout() {
    this.openBurgerMenu();
    cy.get(this.elements.logoutLink).click();
  }

  // Assertions
  shouldBeOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.elements.inventoryContainer).should('be.visible');
  }

  shouldShowShoppingCartBadge(count) {
    if (count > 0) {
      cy.get(this.elements.shoppingCartBadge).should('be.visible').and('contain.text', count);
    } else {
      cy.get(this.elements.shoppingCartBadge).should('not.exist');
    }
  }

  shouldShowRemoveButton(itemIndex = 0) {
    cy.get(this.elements.removeFromCartButtons).eq(itemIndex).should('be.visible');
  }

  shouldShowAddButton(itemIndex = 0) {
    cy.get(this.elements.addToCartButtons).eq(itemIndex).should('be.visible');
  }

  shouldBeSortedByPriceHighToLow() {
    cy.get(this.elements.productPrices).then(($prices) => {
      const prices = Array.from($prices).map(el => parseFloat(el.textContent.replace('$', '')));
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).to.be.gte(prices[i + 1]);
      }
    });
  }

  shouldBeSortedByPriceLowToHigh() {
    cy.get(this.elements.productPrices).then(($prices) => {
      const prices = Array.from($prices).map(el => parseFloat(el.textContent.replace('$', '')));
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).to.be.lte(prices[i + 1]);
      }
    });
  }
}

export default new InventoryPage();