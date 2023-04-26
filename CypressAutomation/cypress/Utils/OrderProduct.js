const LoginPage = require('../../POM/LoginPage');
const Product = require('../../POM/Products');
const Checkout = require('../../POM/Checkout');

class OrderProducts {

    async selectOrder(productData){

        await products.addProductToCart(productName);

        await products.clickCart();
        cy.wait(1000);

        await products.clickCheckout();
        cy.wait(1000);
    }

    async enterUserData(productData){
        checkout.enterFirstName(productData.firstname);
        checkout.enterSecondName(productData.lastname);
        await checkout.enterPostalCode(productData.postalcode);
    }

    async clickPlaceOrderButton(productData){
        cy.wait(1000);
        await checkout.clickContinue();
        cy.wait(1000);
        await checkout.clickFinish();
        cy.wait(1000);
    }
    
}

module.exports = OrderProducts;