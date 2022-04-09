/*
1.Create the algorithm for applying any discount to any item.
2.Insert the algorithm in a function.
3.Create the input boxes for entering the info for each item.
4.Create the activation function wich will run the program by clicking the button.
5.Configure the program for allowing discount cupons by typing codes.
6.Create a function wich apply to the price after discount, an additional discount for the coupon code.
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

//6.
function couponDiscount(priceAfterFirstDiscount){
    var code = document.getElementById("inputCoupon").value;
    var priceAfterSecondDiscount;
    value;
    if(code == coupon[0]){
        priceAfterSecondDiscount = priceAfterFirstDiscount * 0.975;       
    }
    else if(code == coupon[1]){
        priceAfterSecondDiscount = priceAfterFirstDiscount * 0.95;       
    }
    else if(code == coupon[2]){
        priceAfterSecondDiscount = priceAfterFirstDiscount * 0.925;       
    }
    else{
        priceAfterSecondDiscount = priceAfterFirstDiscount;
    }
}

//4.
function applyDiscount(){
    var inItemName = document.getElementById("inputItemName").value;
    var inItemPrice = document.getElementById("inputItemPrice").value;
    var inItemDisc = document.getElementById("inputItemDisc").value;

    var firstDiscountPrice = discount(inItemPrice,inItemDisc);    

    document.getElementById("showNewPrice").innerHTML = "The price of " + inItemName + " once the discount of " + inItemDisc + "%" +
    " was applied is " + firstDiscountPrice;

}




