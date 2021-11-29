//document.getElementById("coba1").innerHTML = Math.sin(90 * Math.PI / 180);
//document.getElementById("coba1").innerHTML = Math.cos(0 * Math.PI / 180);
//document.getElementById("coba1").innerHTML = Math.floor(Math.random()*100);
//document.getElementById("coba1").innerHTML = Math.floor(Math.random()*10) + 1;

function getRndInteger(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E*/

/*Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
Math.sign(x) 	Returns if x is negative, null or positive
Math.pow(x, y) 	returns the value of x to the power of y
Math.sqrt(x) 	returns the square root of x
Math.abs(x) 	returns the absolute (positive) value of x
Math.sin(x) 	returns the sine (a value between -1 and 1) of the angle x (given in radians)
Math.cos(x) 	returns the cosine (a value between -1 and 1) of the angle x (given in radians)
Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
Math.random() 	returns a random number between 0 (inclusive), and 1 (exclusive)
Math.random() used with Math.floor() can be used to return random integers
Math.log(x) 	returns the natural logarithm of x
Math.log2(x) 	returns the base 2 logarithm of x
Math.log10(x) 	returns the base 10 logarithm of x*/

//You can use the Boolean() function to find out if an expression (or a variable) is true
//document.getElementById("coba2").innerHTML = 10 > 9;
/*semua yang bernilai "value" adalah true
document.getElementById("coba2").innerHTML =
"100 is " + Boolean(100) + "<br>" +
"3.14 is " + Boolean(3.14) + "<br>" +
"-15 is " + Boolean(-15) + "<br>" +
"Any (not empty) string is " + Boolean("Hello") + "<br>" +
"Even the string 'false' is " + Boolean('false') + "<br>" +
"Any expression (except zero) is " + Boolean(1 + 7 + 3.14);*/
//0, -0, string kosong, undefined, null, false, NaN
let x = 6; //new Boolean(false) disarankan tidak boleh dipakai
let y = 3;
document.getElementById("coba2").innerHTML = !(x<y);
/*	==	equal to							x == 8	false, x == 5	true, x == "5"	true
	===	equal value and equal type			x === 5	true, x === "5"	false
	!=	not equal							x != 8	true
	!==	not equal value or not equal type	x !== 5	false, x !== "5"	true, x !== 8	true	
	>	greater than						x > 8	false	
	<	less than							x < 8	true	
	>=	greater than or equal to			x >= 8	false	
	<=	less than or equal to				x <= 8	true*/
/*	&&	and	(x < 10 && y > 1) is true	
	||	or	(x == 5 || y == 5) is false	
	!	not	!(x == y) is true*/

//To secure a proper result, variables should be converted to the proper type before comparison
function cobaComparison(){
	let voteable;
	let age = Number(document.getElementById("age").value);
	if (isNaN(age)) {
		voteable = "input is not a number";
	} else {
		voteable = (age < 18) ? "Too young":"Old enough";
	}
	document.getElementById("coba3").innerHTML = voteable + " to vote";
}

/*2 < 12	true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false*/

/*if (condition) {
	//block of code to be executed if the condition is true
}*/

/*if (condition) {
	//  block of code to be executed if the condition is true
} else {
	//  block of code to be executed if the condition is false
}*/

/*if (condition1) {
	//  block of code to be executed if condition1 is true
} else if (condition2) {
	//  block of code to be executed if the condition1 is false and condition2 is true
} else {
	//  block of code to be executed if the condition1 is false and condition2 is false
}*/

/*switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}*/

let day;
switch(new Date().getDay()){
	case 0:
	day = "Sunday";
	break;
	case 1:
	day = "Monday";
	break;
	case 2:
	day = "Tuesday";
	break;
	case 3:
	day = "Wednesday";
	break;
	case 4:
	day = "Thursday";
	break;
	case 5:
	day = "Friday";
	break;
	case 6:
	day = "Saturday";
	break;
	default:
	day = "gak tau hari apa ini"
}
document.getElementById("coba4").innerHTML = day;

/*boleh juga dua case di code block yang sama
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}*/

/*strict comparison
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}*/