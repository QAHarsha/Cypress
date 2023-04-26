const LoginPage = require('../../POM/LoginPage');
const Product = require('../../POM/Products');
const Checkout = require('../../POM/Checkout');

class OrderProducts {

    async orderWithValidData(productData){

         productData.name.forEach((productName) => {
            products.addProductToCart(productName);
        });

        await products.clickCart();
        cy.wait(1000);

        await products.clickCheckout();
        cy.wait(1000);

        checkout.enterFirstName(productData.firstname);
        checkout.enterSecondName(productData.lastname);
        await checkout.enterPostalCode(productData.postalcode);
        
        cy.wait(1000);
        await checkout.clickContinue();
        cy.wait(1000);

        expect(checkout.getTotal()).to.eq(productData.totalamount);

        await checkout.clickFinish();
        cy.wait(1000);
    }
    
}

module.exports = OrderProducts;