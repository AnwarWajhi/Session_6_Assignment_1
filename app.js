/* JS program to read the radius of circle and calculate the area of the circle, and print the result in console*/

//read radius as user entered value

var r = parseFloat(prompt("Enter radius of circle: "));
    /*prompt returns a String. by using "parseFloat" we are converting type of string to float*/

if (typeof r == "number"){
	//check if entered value is a number
	
    var area = 3.14*Math.pow(r,2);
    //Using Math.pow to apply power of 2 to 'r'

	console.log ("Area of the circle = "+area); // print in console
	alert("Area of the circle = "+area); // alert the result
}
else
console.log("Not a number");