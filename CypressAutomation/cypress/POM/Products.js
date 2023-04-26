class Products {
  constructor() {
    this.product = '#add-to-cart-sauce-labs-backpack';
    this.cart = 'shopping_cart_link';
  }
 async clickAddToCart() {
    await cy.get(this.product).click();
  }

  async clickCart() {
    await cy.get(this.cart).click();
  }

  async getPageTitle() {
    await cy.title();
  }
  
  async addProductToCart(productName) {
    await cy.contains(productName).siblings(this.product).click();
  }
}

module.exports = Products;