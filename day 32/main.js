/*x not defined
"use strict";
x = {p1:10, p2:20}; */

/*x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}*/

/*Deleting a variable (or object) is not allowed.
Delete of an unqualified identifier in strict mode.
"use strict";
let x = 3.14;
delete x;*/

//Deleting a function is not allowed.*/
/*"use strict";
function x(p1, p2) {};
delete x;*/

//Duplicating a parameter name is not allowed:
/*"use strict";
function x(p1, p1) {}; */

//Octal numeric literals are not allowed:
/*"use strict";
let x = 010; */

//Octal escape characters are not allowed:
/*"use strict";
let x = "\010";*/

//Writing to a read-only property is not allowed:
/*"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14; */

//Writing to a get-only property is not allowed:
/*"use strict";
const obj = {get x() {return 0} };
obj.x = 3.14;*/

//Deleting an undeletable property is not allowed:
/*"use strict";
delete Object.prototype;*/

//The word eval cannot be used as a variable:
/*"use strict";
let eval = 3.14;*/

//The word arguments cannot be used as a variable:
/*"use strict";
let arguments = 3.14;*/

//The with statement is not allowed:
/*"use strict";
with (Math){x = cos(2)};*/

//For security reasons, eval() is not allowed to create variables in the scope from which it was called:
/*"use strict";
eval ("let x = 2");
alert (x);*/

/*The this keyword in functions behaves differently in strict mode.

The this keyword refers to the object that called the function.

If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

"use strict";
function myFunction() {
	alert(this); // will alert "undefined"
}
myFunction();*/

/*Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

implements
interface
let
package
private
protected
public
static
yield
"use strict";
let public = 1500;*/

/*const nama = {
	namadepan: "Aji Said",
	namabelakang: "Wahyudi Hidayat",
	namalengkap: function(){
		return this.namadepan + " " + this.namabelakang; //this dalam method
	}
};
document.getElementById("coba1").innerHTML = nama.namalengkap();*/

/*"use strict";
let x = this; //this alone
document.getElementById("coba1").innerHTML = x;*/

/*"use strict"; //this jadi undefined
document.getElementById("coba1").innerHTML = myFunction();
function myFunction() {
	return this; //this dalam function
}*/

/*this in Event Handlers
<button onclick="this.style.display='none'">
	Click to Remove Me!
</button>*/

const nama = {
	namaDepan: "Aji Said",
	namaBelakang: "Wahyudi Hidayat",
	myFunction: function(){
		return this;
	}
};
document.getElementById("coba1").innerHTML = nama.myFunction();

/*In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.*/

//arrow
/*let myFunction = (a, b) => a * b;
document.getElementById("coba2").innerHTML = myFunction(4, 5);*/
var hello;
//hello = (val) => "Hello" + val; //boleh tidak pakai kurung jika parameternya satu

//With a regular function this represents the object that calls the function
/*hello = function(){
	document.getElementById("coba3").innerHTML += this;
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);*/

//With an arrow function this represents the owner of the function
hello = () => {
	document.getElementById("coba3").innerHTML += this;
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);

//document.getElementById("coba2").innerHTML = hello("Aji");

//struktur penulisan class
/*class ClassName {
  	constructor() { ... }
  	method_1() { ... }
  	method_2() { ... }
  	method_3() { ... }
}*/

class Car{
	constructor(name,year){
		this.name = name;
		this.year = year;
	}
	/*age(){
		let date = new Date();
		return date.getFullYear() - this.year;
	}*/
	age(x){ //jika ingin memasukkan parameter
		return x - this.year;
	}
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Innova", 2020);
document.getElementById("coba4").innerHTML = myCar.name + " " + myCar.year + " " + myCar.age(year);

//json
let tulisan = '{"employees":['+
'{"firstName":"Aji Said","lastName":"Wahyudi Hidayat"},'+
'{"firstName":"Alfi","lastName":"Haryadi"},'+
'{"firstName":"Muhammad","lastName":"Sarman Noorlah"},'+
'{"firstName":"Aulia","lastName":"Safira"}]}';
const obj = JSON.parse(tulisan);
document.getElementById("coba5").innerHTML = obj.employees[0].firstName + " " + obj.employees[0].lastName;

a = 5;
b = 6;
c = a + b;
debugger;
document.getElementById("coba5").innerHTML = c;
//With the debugger turned on, the code below should stop executing before it executes the third line.
/*console.log(c);*/

/*Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use {} instead of new Object()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()*/

//eval() disarankan tidak perlu dipakai