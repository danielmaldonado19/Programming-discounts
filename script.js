/*
1.Create the algorithm for applying any discount to any item.
2.Insert the algorithm in a function.
*/

//2.
function discount(itemPrice, discountPercent){
    //1.
    var newItemPrice = (itemPrice * (100 - discountPercent)) / 100;

    return newItemPrice;      
}




