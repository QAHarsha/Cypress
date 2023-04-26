class Checkout {
  constructor() {
    this.checkout = '#checkout';
    this.firstName = '#first-name';
    this.secondName = '#last-name';
    this.postalCd = '#postal-code';
    this.continue = '#continue';
    this.total = '.summary_info_label summary_total_label';
    this.finish = '#finish';
    this.thanksMsg = '#checkout_complete_container';
  }

  async clickCheckout() {
    await cy.get(this.Checkout).click();
  }

  async enterFirstName(value) {
    await cy.get(this.firstName).type(value);
  }

  async enterSecondName(value) {
    await cy.get(this.secondName).type(value);
  }

  async enterPostalCode(value) {
    await cy.get(this.postalCd).type(value);
  }

  async clickContinue() {
    await cy.get(this.continue).click();
  }

  async getTotal() {
    await return cy.get(this.total).invoke('text');
  }

  async clickFinish() {
    await cy.get(this.finish).click();
  }

  async getThanksMsg() {
    return cy.get(this.thanksMsg).invoke('text');
  }
}

module.exports = Checkout;