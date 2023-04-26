class LoginPage {
  constructor() {
    this.url = 'https://www.saucedemo.com';
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
  }

  async navigate() {
   await cy.visit(this.url);
  }

  async enterUsername(username) {
    await cy.get(this.usernameInput).type(username);
  }

  async enterPassword(password) {
    await cy.get(this.passwordInput).type(password);
  }

  async clickLoginButton() {
    await cy.get(this.loginButton).click();
  }
}

module.exports = LoginPage;