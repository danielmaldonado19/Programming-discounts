/*
1.Create the algorithm for applying any discount to any item.
2.Insert the algorithm in a function.
3.Create the input boxes for entering the info for each item.
4.Create the activation function wich will run the program by clicking the button.
5.Configure the program for allowing discount cupons by typing codes.
*/

var coupon = [
    "ima_5_star_curstomer",
    "this_website_rocks",
    "touched_by_god"
]

//2.
function discount(itemPrice, discountPercent){
    //1.
    var newItemPrice = (itemPrice * (100 - discountPercent)) / 100;

    return newItemPrice;      
}

//4.
function applyDiscount(){
    var inItemName = document.getElementById("inputItemName").value;
    var inItemPrice = document.getElementById("inputItemPrice").value;
    var inItemDisc = document.getElementById("inputItemDisc").value;
    var inCoupon = document.getElementById("inputCoupon").value;

    var newPrice = discount(inItemPrice,inItemDisc);

    document.getElementById("showNewPrice").innerHTML = "The price of " + inItemName + " once the discount of " + inItemDisc + "%" +
    " was applied is " + newPrice;

}




