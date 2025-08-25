import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../support/pages/LoginPage';

Given('I open the login page', () => {
  LoginPage.visit();
});

When('I enter valid username and password', () => {
  cy.fixture('credentials').then((credentials) => {
    LoginPage.enterUsername(credentials.valid.username);
    LoginPage.enterPassword(credentials.valid.password);
  });
});

When('I enter invalid username and password', () => {
  cy.fixture('credentials').then((credentials) => {
    LoginPage.enterUsername(credentials.invalid.username);
    LoginPage.enterPassword(credentials.invalid.password);
  });
});

When('I enter locked out user credentials', () => {
  cy.fixture('credentials').then((credentials) => {
    LoginPage.enterUsername(credentials.locked.username);
    LoginPage.enterPassword(credentials.locked.password);
  });
});

When('I click the login button', () => {
  LoginPage.clickLogin();
});

When('I click the login button without entering credentials', () => {
  LoginPage.clickLogin();
});

When('I enter only password', () => {
  cy.fixture('credentials').then((credentials) => {
    LoginPage.enterPassword(credentials.valid.password);
  });
});

When('I enter only username', () => {
  cy.fixture('credentials').then((credentials) => {
    LoginPage.enterUsername(credentials.valid.username);
  });
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('#inventory_container').should('be.visible');
});

Then('I should see an error message', () => {
  LoginPage.shouldShowError();
});

Then('I should remain on the login page', () => {
  LoginPage.shouldBeOnLoginPage();
});

Then('I should see a locked out error message', () => {
  LoginPage.shouldShowError();
  LoginPage.shouldHaveErrorMessage('Epic sadface: Sorry, this user has been locked out.');
});

Then('I should see an error message for empty credentials', () => {
  LoginPage.shouldShowError();
  LoginPage.shouldHaveErrorMessage('Epic sadface: Username is required');
});

Then('I should see an error message for empty username', () => {
  LoginPage.shouldShowError();
  LoginPage.shouldHaveErrorMessage('Epic sadface: Username is required');
});

Then('I should see an error message for empty password', () => {
  LoginPage.shouldShowError();
  LoginPage.shouldHaveErrorMessage('Epic sadface: Password is required');
});