class LoginPage {
  // Selectors
  elements = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]',
    loginContainer: '.login_container'
  };

  // Actions
  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    cy.get(this.elements.usernameInput).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.elements.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.elements.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  // Assertions
  shouldShowError() {
    cy.get(this.elements.errorMessage).should('be.visible');
  }

  shouldBeOnLoginPage() {
    cy.url().should('include', '/');
    cy.get(this.elements.loginContainer).should('be.visible');
  }

  shouldHaveErrorMessage(message) {
    cy.get(this.elements.errorMessage).should('contain.text', message);
  }
}

export default new LoginPage();