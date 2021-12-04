function Person(nama,tglLahir,gender){
	this.nama = nama;
	this.tglLahir = tglLahir;
	this.gender = gender;
	//this.nationality = "English";
	/*this.biodata = function(){
		return this.nama + " " + this.tglLahir + " " + this.gender;
	}*/
	/*this.changeName = function (name) {
    	this.lastName = name;
  	}*/
}
const nama_saya = new Person("Aji Said Wahyudi Hidayat", "02-05-1995", "Laki-laki");
const nama_dia = new Person("Alfi Haryadi", "01-08-1992", "Laki-laki");
//nama_saya.alamat = "Jl. P.M.Noor";
nama_saya.biodata = function(){
	return this.nama + " " + this.tglLahir + " " + this.gender;
}
Person.prototype.alamat = "Jl. P.M.Noor";
/*Person.prototype.name = function() {
  	return this.firstName + " " + this.lastName;
};*/
document.getElementById("coba1").innerHTML = nama_saya.biodata() + " " + nama_saya.alamat + "<br>" + nama_dia.nama + " "
+ nama_dia.tglLahir + " " + nama_dia.gender;

//const tulis = "Aji Said";
const tulis = ["a", "b", "c"];
let text = "";
for(const x of tulis){
	text += x + "<br>";
}
document.getElementById("coba2").innerHTML = text;

//home made iterable
/*function angka(){
	let n = 0;
	return {
		next: function(){
			n += 10;
			return{value:n, done:false};
		}
	};
}
const n = angka();
n.next();
n.next();
n.next();
document.getElementById("coba3").innerHTML = n.next().value;*/
angka = {};
angka[Symbol.iterator] = function(){
	let n = 0;
	done = false;
	return {
		next(){
			n += 10;
			if (n == 100) {done = true}
			return{value:n, done:done};
		}
	};
}
let text2 = ""
for(const num of angka){
	text2 += num + "<br>"
}
document.getElementById("coba3").innerHTML = text2;

// Symbol.iterator manual
/*myNumbers = {};
myNumbers[Symbol.iterator] = function() {
  	let n = 0;
  	done = false;
  	return {
    	next() {
      		n += 10;
      		if (n == 100) {done = true}
      		return {value:n, done:done};
    	}
  	};
}
let iterator = myNumbers[Symbol.iterator]();
let text = ""
while (true) {
  	const result = iterator.next();
  	if (result.done) break;
  	text += result.value +"<br>";
}
document.getElementById("demo").innerHTML = text;*/

//set
//const huruf = new Set(["a", "b", "c"]); pake array
/*menambah literation value
const huruf = new Set();
huruf.add("a");
huruf.add("b");
huruf.add("c");*/
const huruf = new Set();
const a = "a";
const b = "b";
const c = "c";
huruf.add(a);
huruf.add(b);
huruf.add(c);
document.getElementById("coba4").innerHTML = huruf.size;
/*foreach
const letters = new Set(["a","b","c"]);
let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})
document.getElementById("demo").innerHTML = text;*/
/*iterator objects
const letters = new Set(["a","b","c"]);
let text = "";
for (const x of letters.values()) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;*/
/*const letters = new Set(["a","b","c"]);
const iterator = letters.entries(); //menggunakan entries, keluarnya value, value
let text = "";
for (const entry of iterator) {
  text += entry + "<br>";
}
document.getElementById("demo").innerHTML = text;*/

//maps
/*const fruits = new Map([
  	["apples", 500],
  	["bananas", 300],
  	["oranges", 200]
]);
fruits.set("apples", 200);
fruits.delete("apples");
fruits.clear();
document.getElementById("demo").innerHTML = fruits.get("apples");*/
/*const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
document.getElementById("demo").innerHTML = fruits.get("apples");*/
/*const fruits = new Map([
  	["apples", 500],
  	["bananas", 300],
  	["oranges", 200]
]);
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>"
})
document.getElementById("demo").innerHTML = text;*/
/*const fruits = new Map([
  	["apples", 500],
  	["bananas", 300],
  	["oranges", 200]
]);
let veggies = "";
for (const x of fruits.keys()) {
  	veggies += x + "<br>";
}
document.getElementById("demo").innerHTML = veggies;*/
/*const fruits = new Map([
  	["apples", 500],
  	["bananas", 300],
  	["oranges", 200]
]);
let total = 0;
for (const x of fruits.values()) {
  	total += x;
}
document.getElementById("demo").innerHTML = total;*/
/*const fruits = new Map([
  	["apples", 500],
  	["bananas", 300],
  	["oranges", 200]
]);
let text = "";
for (const x of fruits.entries()) {
  	text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;*/
/*const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};
const fruits = new Map();
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
document.getElementById("demo").innerHTML = fruits.get(apples);*/

/*Managing Objects
// Create object with an existing object as prototype
Object.create()

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)

Protecting Objects
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)*/