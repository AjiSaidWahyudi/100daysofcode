//class dasar
/*class Car{
	constructor(name, year){
		this.name = name;
		this.year = year;
	}
	age(){
		let date = new Date();
		return date.getFullYear() - this.year;
	}
}

let myCar = new Car("Innova", 2020);
document.getElementById("coba1").innerHTML = myCar.name + " " + myCar.year + " " + myCar.age();*/

//jika ingin gunakan parameter
/*class Car{
	constructor(name, year){
		this.name = name;
		this.year = year;
	}
	age(x){
		return x - this.year;
	}
}
let date = new Date();
let year = date.getFullYear();
let myCar = new Car("Innova", 2020);
document.getElementById("coba1").innerHTML = myCar.name + " " + myCar.year + " " + myCar.age(year);*/

//class inheritance
/*class Car{
	constructor(brand){
		this.carname = brand;
	}
	present(){
		return 'I have a ' + this.carname;
	}
}

class Model extends Car{
	constructor(brand, mod){
		super(brand);
		this.model = mod;
	}
	show(){
		return this.present() + ' , it is a ' + this.model;
	}
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("coba1").innerHTML = myCar.show();*/

//menggunakan getter & setter
/*class Car{
	constructor(brand){
		this.carname = brand;
	}
	get cnam(){
		return this.carname;
	}
	set cnam(x){
		this.carname = x;
	}
}

let myCar = new Car("Honda");
myCar.cnam = "Nissan";
document.getElementById("coba1").innerHTML = myCar.cnam;*/

//class static (hanya memanggil value dari class itu sendiri)
/*class Car {
  	constructor(name) {
    	this.name = name;
  	}
  	static hello() {
    	return "Hello!!";
  	}
}
let myCar = new Car("Ford");
document.getElementById("coba1").innerHTML = Car.hello();*/

class Car {
  	constructor(name) {
    	this.name = name;
  	}
  	static hello(x) {
    	return "Hello!! " + x.name;
  	}
}
let myCar = new Car("Ford");
document.getElementById("coba1").innerHTML = Car.hello(myCar);

//Function Sequence (JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined)
/*function myDisplayer(some) {
	document.getElementById("coba2").innerHTML = some;
}
function myCalculator(num1, num2, myCallback) {
	let sum = num1 + num2;
	myCallback(sum);
}
myCalculator(5,5,myDisplayer);*/

//timeout
/*setTimeout(myFunction, 3000);
function myFunction() {
	document.getElementById("coba2").innerHTML = "tes";
}*/
/*setTimeout(function() {myFunction("tes");},3000);
function myFunction(value) {
	document.getElementById("coba2").innerHTML = value;
}*/

//interval
setInterval(myFunction, 1000);
function myFunction() {
	let d = new Date();
	document.getElementById("coba2").innerHTML =
	d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

//waiting for files
function myDisplayer(some) {
	document.getElementById("coba3").innerHTML = some;
}
function getFile(myCallback) {
  	let req = new XMLHttpRequest();
  	req.open('GET', "mycar.html");
  	req.onload = function() {
    	if (req.status == 200) {
      		myCallback(this.responseText);
    	} else {
      		myCallback("Error: " + req.status);
    	}
  	}
  	req.send();
}
getFile(myDisplayer);

//promises
/*function myDisplayer2(some) {
	document.getElementById("coba4").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject){
	let m = 0;
	if (m == 0) {
		myResolve("OK");
	} else {
		myReject("Error");
	}
});
myPromise.then(
	function(value) {myDisplayer2(value);},
	function(error) {myDisplayer2(error);}
);*/

const myPromise = new Promise(function(myResolve, myReject) {
  	setTimeout(function(){ myResolve("I love You !!"); }, 3000);
});
myPromise.then(function(value) {
  	document.getElementById("coba4").innerHTML = value;
});

/*function myDisplayer(some) {
  	document.getElementById("coba4").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  	let req = new XMLHttpRequest();
  	req.open('GET', "mycar.html");
  	req.onload = function() {
    	if (req.status == 200) {
      		myResolve(req.response);
    	} else {
      		myReject("File not Found");
    	}
  	};
  	req.send();
});
myPromise.then(
  	function(value) {myDisplayer(value);},
  	function(error) {myDisplayer(error);}
);*/

//async
/*function myDisplayer3(some) {
  	document.getElementById("coba5").innerHTML = some;
}

async function myFunction3() {return "Hello";}

myFunction3().then(
	function(value) {myDisplayer3(value);},
  	function(error) {myDisplayer3(error);}
);*/

//await
/*async function myDisplay() {
	let myPromise = new Promise(function(resolve) { //tidak harus pakai reject
		resolve("I love You !!");
	});
	document.getElementById("coba5").innerHTML = await myPromise;
}
myDisplay();*/

async function myDisplay() {
	let myPromise = new Promise(function(resolve) { //tidak harus pakai reject
		setTimeout(function() {resolve("I love You !!");},3000);
	});
	document.getElementById("coba5").innerHTML = await myPromise;
}
myDisplay();

/*async function getFile() {
  	let myPromise = new Promise(function(resolve) {
    	let req = new XMLHttpRequest();
    	req.open('GET', "mycar.html");
    	req.onload = function() {
      		if (req.status == 200) {
        		resolve(req.response);
      		} else {
        		resolve("File not Found");
      		}
    	};
    	req.send();
  	});
  	document.getElementById("coba5").innerHTML = await myPromise;
}
getFile();*/