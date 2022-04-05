# discounts


This project will  tell the user the price of any given item and, if the item has a discount promo, the it will show how much the discount is and whats the final price of the product.

## Tasks

* Create the mandatory files for the program.
* First, we'll insert the mathematical operation for making
a discount starting from a given price number.
* Create the function for this algorithm.

### Bugs

* Enter non-numeric parameters.
* Enter sidesNum variable as a float number.
* Non entering a value (empty input).


## Manual Exercise

For this exercise, we found out the formula for any given regular polygon with n sides.

Exercise 1: User only has to input the very basic values (sides number, side lenght or radius).

var sidesNum = 3;
var area;
var perimeter;

If (sidesNum < 1){
    var sideLength = 5;
    var perimeter = sidesNum * sideLength;
    var theta = 360 / (2 * sidesNum);
    var apothem = sideLength / (2 * Math.tan(theta));
    var area = (perimeter * apothem) / 2;

}
Else if (sidesNum == 1){
    var radius = 2;
    var perimeter = 2 * Math.PI * radius;
    var area = Math.PI * radius * radius;
}
Else{
    El usuario ingresa un valor no permitido para sidesNum
}

print perimeter; 
print area;

Ejercicio 2: Acording of the parameters the user types as input, the program will calculate the area and perimeter with the most efective formula for the task (due the many ways we can obtain such results).

## Algoritm

var sidesNum;

if(sidesNum > 1)------------------------------------------ 
        v                           
var sideLength;
var perimeter = sidesNum * sideLength;
var theta = 360 / (2 * sidesNum);
var apotem = sideLength / (2 * Math.tan(theta));
var area = (perimeter * apothem) / 2; 

-> else if(sides == 1)-------------------------------------
        v
var radius;
var perimeter = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

->else
    v
Prompt(Error, value's not allowed)

close if
