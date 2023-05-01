const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// // Using the following criteria, your first assignment is to 
// create the logic for their checkout system that returns the 
// total cost of all refills including if the customer has a 
// subscription and/or a coupon.

// // If a customer has a subscription, the customer will 
// receive a 25% discount after the refill total has been 
// calculated.
// // If the customer has a coupon, the customer will receive 
// a $10 discount after the subscription discount has been 
// calculated.
// // At the end of the script, you should return and log the 
// string "Your grand total is ${finalAmount}." 

//does the customer have a subscription?
//calculate refill total
//if sub, 25% discount
//if coupon, 10% discount after sub

function totalPrice (pricePerRefill, refill) {
    console.log(pricePerRefill * refill)
}

function sub (totalPrice) {
    console.log(25 / totalPrice * 100)
}

function coup (totalPrice) {
    console.log(10 / totalPrice * 100)
}

function subCoup (totalPrice) {
    console.log(25 / totalPrice * 100 / 10 * 100)
}

// totalPrice (object.values(timmy))


// Expected Results:

// Timmy => "Your grand total is $65"
// Sarah => "Your grand total is $37.5."
// Rocky => "Your grand total is $102.5"

