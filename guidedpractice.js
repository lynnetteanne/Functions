// Input - Budget	Input - Gift Prices	Expected Return
// 50	20, 25	True
// 100	50, 46	False
// 500	230, 230	True
// 200	140, 50	False
 
//First, define the given variables (budget, price1, and price2). This will allow us to easily access and change the values for our four test cases

const budget = 50;
const price1 = 20;
const price2 = 25;

//Define a function that returns the sum of the two prices before tax.

function sumOfGifts (price1, price2) {
    return price1 + price2;
}

//Invoke the sumOfGifts function with the price1 and price2 variables. Store the return of this function in a new variable labeled giftTotal

const giftTotal = sumOfGifts(price1 + price2);
// giftTotal();
// console.log(giftTotal);

//Define a function that returns the cost of the giftTotal with tax (8 percent).

function addTax (giftTotal) {
    return giftTotal + (giftTotal * .08);
}

//Invoke the addTax function by passing in the giftTotal variable. Store the return of this function in a new variable labeled giftsWithTax.

const giftsWithTax = addTax(giftTotal);

//Define a function that compares giftsWithTax and the budget variable. The function should return true if the budget is greater than or equal to giftsWithTax.

function holidayShopping(budget, giftsWithTax) {
    return budget >= giftsWithTax;
}

//Invoke the holidayShopping function by passing in the budget and giftsWithTax variables. 

holidayShopping(budget, giftsWithTax);

//Optional: Try building the same solution but with the arrow syntax. 

