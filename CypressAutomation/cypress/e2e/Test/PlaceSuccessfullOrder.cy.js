// inventory.spec.js
const orderProd = require('../../Utils/OrderProducts');
const Checkout = require('../../POM/Checkout');

const loginPage = new LoginPage();

describe('Inventory page', () => {
  beforeEach(async () => {
    await loginPage.navigate();
    cy.fixture('TestData.json').as('testData');
    cy.fixture('Properties.json').as('properties');
  })

  it('should log in with valid credentials', async () => {
    await loginPage.enterUsername(properties.usernameInput);
    await loginPage.enterPassword(properties.password);
    await loginPage.clickLoginButton();
    cy.title().should('eq', 'Swag Labs');
  })

  it('Select item and place the order', async () => {
    orderProd.orderWithValidData(this.testData.TestCase1);
    expect(checkout.getThanksMsg()).to.contain('Thank you for your order!');
  })

  it('Select item and place the order', async () => {
    orderProd.orderWithValidData(this.testData.TestCase2);
    expect(checkout.getThanksMsg()).to.contain('Thank you for your order!');
  })

});
