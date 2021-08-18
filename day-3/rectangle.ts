/*

Objective

In this challenge, we practice creating objects. Check out the attached tutorial for more details.

Task

Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a.
width: This value is equal to b.
primeter: This value is equal to 2*(a+b) 
area: This value is equal to a*b
Note: The names of the object's properties must be spelled correctly to pass this challenge.

Input Format

The first line contains an integer denoting .
The second line contains an integer denoting .

Constraints

Output Format

Return a object that has the properties specified above. Locked code in the editor prints the returned object's , , , and  to STDOUT.

Sample Input 0

4
5
Sample Output 0

4
5
18
20
 * Complete the Rectangle function
 */


function rectangle(length:number, width:number) {

    if(length<1 || width>100){
        return{};

    }

    const area=length*width;
    const perimeter=area*2+width*2;

    return{length:length, width:width, perimeter,area};
    
    
}

const rectangleInfo= rectangle(2,4);

console.log("length is ", rectangleInfo.length);
console.log("width is ", rectangleInfo.width);
console.log("perimeter is ", rectangleInfo.perimeter);
console.log("area is ", rectangleInfo.area);

