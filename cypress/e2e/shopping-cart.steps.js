import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/LoginPage';
import InventoryPage from '../../support/pages/InventoryPage';
import ShoppingCartPage from '../../support/pages/ShoppingCartPage';

Given('I am logged in to the application', () => {
  cy.fixture('credentials').then((credentials) => {
    LoginPage.visit();
    LoginPage.login(credentials.valid.username, credentials.valid.password);
  });
});

Given('I am on the inventory page', () => {
  InventoryPage.shouldBeOnInventoryPage();
});

Given('I have an item in my shopping cart', () => {
  InventoryPage.addItemToCart(0);
  InventoryPage.shouldShowShoppingCartBadge(1);
});

Given('I have items in my shopping cart', () => {
  InventoryPage.addItemToCart(0);
  InventoryPage.addItemToCart(1);
  InventoryPage.shouldShowShoppingCartBadge(2);
});

Given('I am on the shopping cart page', () => {
  InventoryPage.openShoppingCart();
  ShoppingCartPage.shouldBeOnCartPage();
});

When('I add an item to the shopping cart', () => {
  InventoryPage.addItemToCart(0);
});

When('I add the first item to the shopping cart', () => {
  InventoryPage.addItemToCart(0);
});

When('I add the second item to the shopping cart', () => {
  InventoryPage.addItemToCart(1);
});

When('I remove the item from the shopping cart', () => {
  InventoryPage.removeItemFromCart(0);
});

When('I click on the shopping cart', () => {
  InventoryPage.openShoppingCart();
});

When('I click continue shopping', () => {
  ShoppingCartPage.continueShopping();
});

Then('the shopping cart badge should show {string}', (count) => {
  const expectedCount = parseInt(count);
  InventoryPage.shouldShowShoppingCartBadge(expectedCount);
});

Then('the add button should change to remove button', () => {
  InventoryPage.shouldShowRemoveButton(0);
});

Then('I should be able to remove the item', () => {
  InventoryPage.shouldShowRemoveButton(0);
});

Then('both items should show remove buttons', () => {
  InventoryPage.shouldShowRemoveButton(0);
  InventoryPage.shouldShowRemoveButton(1);
});

Then('the shopping cart badge should not be visible', () => {
  InventoryPage.shouldShowShoppingCartBadge(0);
});

Then('the remove button should change back to add button', () => {
  InventoryPage.shouldShowAddButton(0);
});

Then('I should be redirected to the cart page', () => {
  ShoppingCartPage.shouldBeOnCartPage();
});

Then('I should see all added items', () => {
  ShoppingCartPage.shouldShowCartItems(2);
});

Then('I should see the continue shopping button', () => {
  ShoppingCartPage.shouldShowContinueShoppingButton();
});

Then('I should see the checkout button', () => {
  ShoppingCartPage.shouldShowCheckoutButton();
});

Then('I should be redirected back to the inventory page', () => {
  InventoryPage.shouldBeOnInventoryPage();
});