const { Given, When, Then } = require('cucumber');
const LoginPage = require('../../POM/LoginPage');
const InventoryPage = require('../../POM/Products');
const CheckoutPage = require('../../POM/CheckoutPage');
const OrderProd = require('../../Utils/OrderProducts');
const testData = require('../../fixtures/TestData.json');
const { baseUrl, username, password } = require('../../fixtures/properties.json');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const checkoutPage = new CheckoutPage();

Given('I am on the login page', async () => {
  await loginPage.navigate(baseUrl);
});

When('I enter my valid {string} and {string}', async (username, password) => {
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I click the login button', async () => {
  await loginPage.clickLoginButton();
});

Then('I should be redirected to the inventory page', async () => {
  const pageTitle = await inventoryPage.getPageTitle();
  expect(pageTitle).to.equal('Swag Labs');
});

When('I select an {string} to order', async (item) => {
  await OrderProd.selectOrder(item);
});

When('I enter valid order details with {string}, {string}, and {string}', async (firstname, lastname, postalcode) => {
  const orderDetails = {
    firstName: firstname,
    lastName: lastname,
    postalCode: postalcode
  };
  await OrderProd.enterUserData(orderDetails);
});

When('I place the order', async () => {
  await OrderProd.clickPlaceOrderButton();
});

Then('I should see a thank you message', async () => {
  const thanksMsg = await checkoutPage.getThanksMessage();
  expect(thanksMsg).to.contain('Thank you for your order!');
});

