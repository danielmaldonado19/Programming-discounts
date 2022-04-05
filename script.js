/*
1.Create the algorithm for applying any discount to any item.
*/

//1.
var itemPrice, discountPercent, newItemPrice;

itemPrice = 850;
discountPercent = 15;

newItemPrice = (itemPrice * (100 - discountPercent)) / 100;

console.log(newItemPrice);



