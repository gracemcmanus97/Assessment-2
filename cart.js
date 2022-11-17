///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(foodPrice, 0);
function foodPrice(accumulator, value) {
    return accumulator+value.price
}
console.log(summedPrice)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice (cartTotal, couponValue, tax) {
    taxTotal = cartTotal * tax;
    return cartTotal + taxTotal - couponValue;
}

//console.log(calcFinalPrice(0.6));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/
//PROP #1: NAME 
//PROP #2: ORDER NUMBER 
//PROP #3: EMAIL 
//PROP #4: PRICE 
//I chose these properties because it is what a restaraunt would need in order to identify a the correct customer, their order, and how much they would owe. I also chose to add an email address so they can receive their confirmation order and their receipt.

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE- i need a price but it's now allowing come back to this

let customer = {
    name: "Grace McManus",
    ordernumber: "123456",
    email: "grace.mcmanus1@outlook.com"
    price: 78.91
}
//console.log(customer)