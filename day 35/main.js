/*var x = myFunction(4,3);
document.getElementById("coba1").innerHTML = x;
function myFunction(a,b){
	return a * b;
}*/

/*const x = function(a,b){return a * b};
document.getElementById("coba1").innerHTML = x(4,3);*/

/*const myFunction = new Function("a", "b", "return a * b");
document.getElementById("coba1").innerHTML = myFunction(4,3);*/ //tidak direkomendasikan

/*const myFunction = function(a,b) {return a * b}
document.getElementById("coba1").innerHTML = myFunction(4,3);*/

/*function myFunction(a,b) {
	return a*b;
}
let x = myFunction(4,3) * 2;
document.getElementById("coba1").innerHTML = x;*/

const x = (x,y) => {return x*y};
document.getElementById("coba1").innerHTML = x(5,5); //arrow function tidak support di IE11 kebawah

/*function myFunction(a, b) {
  	return arguments.length;
}*/

/*Functions can be invoked automatically without being called:
(function () {
	document.getElementById("demo").innerHTML = "Hello! I called myself";
})();*/

/*function myFunction(x,y) {
	if (y === undefined) {
		y = 2;
	}
	return x * y;
}
document.getElementById("coba2").innerHTML = myFunction(4);*/

//ECMAscript 2
/*function myFunction(x,y = 2) {
	return x * y;
}
document.getElementById("coba2").innerHTML = myFunction(4);*/

/*function findMax() {
	let max = -Infinity;
	for(let i = 0; i < arguments.length; i++){
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}
	return max;
}
document.getElementById("coba2").innerHTML = findMax(4, 5, 6);*/

function sumAll() {
	let sum = 0;
	for(let i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
}
document.getElementById("coba2").innerHTML = sumAll(4, 5, 6);

//Function Invocation
/*function myFunction(a, b) {
	return a * b;
}
document.getElementById("coba3").innerHTML = myFunction(10, 2);*/ //window.myFunction(10, 2) juga sama

/*let m = myFunction();
function myFunction(){
	return this;
}
document.getElementById("coba3").innerHTML = m;*/

/*const myObject = {
	namaDepan: "Aji Said",
	namaBelakang: "Wahyudi Hidayat",
	fullName: function(){
		return this.namaDepan + " " + this.namaBelakang;
	}
}
document.getElementById("coba3").innerHTML = myObject.fullName();*/

/*function myFunction(arg1, arg2) {
	this.firstName = arg1;
	this.lastName = arg2;
}
const myObject = new myFunction("Aji Said", "Wahyudi Hidayat")
document.getElementById("coba3").innerHTML = myObject.firstName;*/

//call & apply method
/*const person = {
	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
}
const person1 = {
	firstName: "Aji Said",
	lastName: "Wahyudi Hidayat"
}
const person2 = {
	firstName: "Arif Dwi",
	lastName: "Syaputra"
}
document.getElementById("coba3").innerHTML = person.fullName.call(person1);*/

/*const person = {
	fullName: function(namaLain1, namaLain2){
		return this.firstName + " " + this.lastName + ", " + namaLain1 + ", " + namaLain2;
	}
}
const person1 = {
	firstName: "Aji Said",
	lastName: "Wahyudi Hidayat"
}
const person2 = {
	firstName: "Arif Dwi",
	lastName: "Syaputra"
}
document.getElementById("coba3").innerHTML = person.fullName.call(person1, "Aulia Safira", "Muhammad Sarman Noorlah");*/

/*const person = {
	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
}
const person1 = {
	firstName: "Aji Said",
	lastName: "Wahyudi Hidayat"
}
const person2 = {
	firstName: "Arif Dwi",
	lastName: "Syaputra"
}
document.getElementById("coba3").innerHTML = person.fullName.apply(person1);*/

const person = {
	fullName: function(namaLain1, namaLain2){
		return this.firstName + " " + this.lastName + ", " + namaLain1 + ", " + namaLain2;
	}
}
const person1 = {
	firstName: "Aji Said",
	lastName: "Wahyudi Hidayat"
}
const person2 = {
	firstName: "Arif Dwi",
	lastName: "Syaputra"
}
document.getElementById("coba3").innerHTML = person.fullName.apply(person1, ["Aulia Safira", "Muhammad Sarman Noorlah"]);

/*perbedaan call & apply
The call() method takes arguments separately.
The apply() method takes arguments as an array.*/

document.getElementById("coba4").innerHTML = Math.max.apply(Math, [1,2,3]);

//Math.max(1,2,3);  // Will return 3
//Math.max.apply(null, [1,2,3]); // Will also return 3
//Math.max.apply(Math, [1,2,3]); // Will also return 3
//Math.max.apply(" ", [1,2,3]); // Will also return 3
//Math.max.apply(0, [1,2,3]); // Will also return 3

/*myFunction();

function myFunction() {
  	let a = 4;
  	document.getElementById("coba5").innerHTML = a * a;
}*/

/*let a = 4; //variabel bisa ditaruh di luar
myFunction();

function myFunction() {
  document.getElementById("coba5").innerHTML = a * a;
}*/

/*variabel tanpa deklarasi keyword akan menjadi variabel global
myFunction();
document.getElementById("demo").innerHTML = a * a;

function myFunction() {
  	a = 4;
} */

// counter dengan global variable
/*let counter = 0;
function add() {
  	counter += 1;
}
add();
add();
add();
document.getElementById("coba5").innerHTML = "The counter is: " + counter;*/

// counter dengan local variable
/*function add() {
  	let counter = 0; 
  	counter += 1;
  	return counter;
}
function myFunction() {
	document.getElementById("coba5").innerHTML = add();
}*/
/*It did not work because we reset the local counter every time we call the function.
A JavaScript inner function can solve this.*/

/*nested function
document.getElementById("demo").innerHTML = add();
function add() {
  	let counter = 0;
  	function plus() {counter += 1;}
  	plus();  
  	return counter; 
}*/

const add = (function(){
	let counter = 0;
	return function() {counter += 1; return counter;}
})();
function myFunction(){
	document.getElementById("coba5").innerHTML = add();
}