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

//assign which object
Object = rocky;
//calculate the total price using refills and pricePerRefill
function totalPrice (pricePerRefill, refills) {
    return pricePerRefill * refills;
}
//call function
const rxTotal = totalPrice(Object.pricePerRefill, Object.refills);

//calculate sub discount if they have a subscription
function sub() {
    if(Object.subscription){
        return .75 * rxTotal;
    } else {
        return rxTotal;
    }
}
//call function
const afterSub = sub(Object.subscription);

//calculate coupon discount if the have a coupon
function coupon() {
    if (Object.coupon){
        return afterSub - 10;
    } else {
        return afterSub;
    }
}
//call function
const afterCoup = coupon(Object.coupon);




// Expected Results:

// Timmy => "Your grand total is $65"
// Sarah => "Your grand total is $37.5."
// Rocky => "Your grand total is $102.5"

//print grand total
console.log("Your grand total is $" + afterCoup);
