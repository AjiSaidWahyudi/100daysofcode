/*In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined*/

/*document.getElementById("coba1").innerHTML = 
typeof "Aji" + "<br>" +
typeof 3.14 + "<br>" +
typeof NaN + "<br>" +
typeof false + "<br>" +
typeof [1,2,3,4] + "<br>" + //object, bukan array
typeof {name:"Aji",age:26} + "<br>" +
typeof new Date() + "<br>" +
typeof function(){} + "<br>" +
typeof myCar + "<br>" + //value tidak dideklarasikan
typeof null;*/
/*document.getElementById("coba1").innerHTML = 
"john".constructor + "<br>" +
(3.14).constructor + "<br>" +
false.constructor + "<br>" +
[1,2,3,4].constructor + "<br>" +
{name:'john', age:34}.constructor + "<br>" +
new Date().constructor + "<br>" +
function () {}.constructor;*/
/*const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("coba1").innerHTML = isArray(fruits);
function isArray(myArray) {
	//return myArray.constructor.toString().indexOf("Array") > -1;
	return myArray.constructor === Array;
}*/
/*const myDate = new Date();
document.getElementById("coba1").innerHTML = isDate(myDate);
function isDate(myDate) {
	//return myDate.constructor.toString().indexOf("Date") > -1;
	return myDate.constructor === Date;
}*/
/*let y = "Johan";
let x = + y;
document.getElementById("coba1").innerHTML = typeof y + "<br>" + typeof x;*/
//konversi number ke string
let x = 123;
document.getElementById("coba1").innerHTML = 
/*String(x) + "<br>" +
String(123) + "<br>" +
String(100 + 23);*/
x.toString() + "<br>" +
(123).toString() + "<br>" +
(100 + 23).toString();
/*konversi tanggal ke number
d = new Date();
Number(d)
atau
d = new Date();
d.getTime() */
/*konversi tanggal ke string
String(Date())
Date().toString()*/
/*konversi boolean ke number
Number(false)     // returns 0
Number(true)      // returns 1*/
/*konversi boolean ke string
String(false)      // returns "false"
String(true)       // returns "true"
atau
false.toString()   // returns "false"
true.toString()    // returns "true"*/

//type conversion
/*(5 + null) + "<br>"  +
("5" + null) + "<br>" +
("5" + 2) + "<br>" +
("5" - 2) + "<br>" +
("5" * "2") + "<br>" +
("5" / "2") + "<br>"*/

//bitwise operators
/*&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off*/

//konversi desimal ke biner
/*document.getElementById("coba2").innerHTML = dec2bin(-5);
function dec2bin(dec){
	return (dec >>> 0).toString(2);
}*/
//biner ke desimal
document.getElementById("coba2").innerHTML = bin2dec(101);
function bin2dec(bin){
	return parseInt(bin, 2).toString(10);
}

let text = "Aji Said Wahyudi Hidayat";
//let n = text.search("Said");
//let n = text.search(/said/i); search() with regular expression
let n = text.replace(/hidayat/i, "S.Kom")
document.getElementById("coba3").innerHTML = n;

//regular expression modifier
/*i	Perform case-insensitive matching	
g	Perform a global match (find all matches rather than stopping after the first match)	
m	Perform multiline matching*/

//regular expression pattern
/*[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |*/

//metacharacter
/*\d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx*/

//quantifier
/*n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n*/

//test = mencari string, kemudian keluarnya bernilai true/false
let kalimat = document.getElementById("text1").innerHTML;
const pattern = /e/;
document.getElementById("coba4").innerHTML = pattern.test(kalimat);

const obj = /e/.exec("Ini sudah jam sembilan");
document.getElementById("coba5").innerHTML = "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;

//error
try{
	adddlert("Aji Said Wahyudi Hidayat");
}
catch(err){
	document.getElementById("coba6").innerHTML = err.message;
}

function myFunction(){
	const message = document.getElementById("p01");
	message.innerHTML = "";
	let y = document.getElementById("coba7").value;
	try{
		if(y == "") throw "empty";
		if (isNaN(y)) throw "not a number";
		x = Number(x);
		if (y < 5) throw "too low";
		if (y > 10) throw "too high";
	}
	catch(err){
		message.innerHTML = "input is " + err;
	}
	finally{
		document.getElementById("coba7").value = ""; //mengembalikan form ke semula
	}
}

//range error (memasukkan angka yang tidak sesuai dengan yang ditentukan)
/*let num = 1;
try {
  	num.toPrecision(500);
}
catch(err) {
  	document.getElementById("demo").innerHTML = err.name;
}*/

//reference error (mendeklarasikan variabel yang belum dideklarasikan)
/*let x = 5;
try {
  	x = y + 1;
}
catch(err) {
  	document.getElementById("demo").innerHTML = err.name;
}*/

//syntax error (error karena lupa penulisan tanda baca)
/*try {
  	eval("alert('Hello)");
}
catch(err) {
  	document.getElementById("demo").innerHTML = err.name;
}*/

//type error (contohnya angka tidak bisa di upper case)
/*let num = 1;
try {
  	num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  	document.getElementById("demo").innerHTML = err.name;
}*/

//URI error (memasukkan karakter yang salah)
/*try {
  	decodeURI("%%%");
}
catch(err) {
  	document.getElementById("demo").innerHTML = err.name;
}*/