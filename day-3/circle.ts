/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
 ​
 function getArea(radius:number):number{


    return 3.14159*radius*radius ;
​
 }
​
 function getDiameter(radius:number):number {
     return radius*2;
​
 }
​
 function getCircumfrence(radius:number):number {

    return 3.14159*getDiameter(radius);
​
​
 }