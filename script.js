/*
1.Create the algorithm for applying any discount to any item.
2.Insert the algorithm in a function.
3.Create the input boxes for entering the info for each item.
4.Create the activation function wich will run the program by clicking the button.
5.Configure the program for allowing discount cupons by typing codes.
6.Use the discount function for applying the coupon discount as well.
*/

var coupon = [
    "ima_5_star_curstomer",
    "this_website_rocks",
    "touched_by_god"
]

//2.
function discount(itemPrice, discountPercent){
    //1.
    var priceAfterDiscount = (itemPrice * (100 - discountPercent)) / 100;

    return priceAfterDiscount;      
}

//6.
function couponDiscount(){
    var code = document.getElementById("inputCoupon").value;
    var discountPercent;
    if(code == coupon[0]){
        discountPercent = 2.5;      
    }
    else if(code == coupon[1]){
        discountPercent = 5;          
    }
    else if(code == coupon[2]){
        discountPercent = 7.5;       
    }
    else{
        discountPercent = 0;
    }

    return discountPercent;
}

//4.
function applyDiscount(){
    var inItemName = document.getElementById("inputItemName").value;
    var inItemPrice = document.getElementById("inputItemPrice").value;
    var inItemDisc = document.getElementById("inputItemDisc").value;

    var firstPrice = discount(inItemPrice,inItemDisc);
    var secondPrice = discount(firstPrice, couponDiscount());
    
    document.getElementById("showFirstPrice").innerHTML = "The price of " + inItemName + " after first discount of " + inItemDisc + "%" +
    " was applied is " + firstPrice;

    document.getElementById("showSecondPrice").innerHTML = "The price of " + inItemName + " after coupon discount is " + secondPrice;

}




