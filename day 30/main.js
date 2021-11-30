const mobil = ["Honda", "Toyota", "Nissan", "Audi", "Chevrolet", "Ferrari"];
//let i, len, text;
/*for (let i = 0; i < mobil.length; i++) {
	text +=mobil[i] + "<br>";
}*/
/*for (i = 0, len = mobil.length, text = ""; i < len; i++) {
	text +=mobil[i] + "<br>";
}*/
/*let i = 0;
let len = mobil.length;
let text = "";
for (; i < len; i++) { //statement 1 boleh diabaikan
	text +=mobil[i] + "<br>";
	//i++; jika ingin statement 3 diabaikan, i++ / i-- ditaruh dibawah
}
document.getElementById("coba1").innerHTML = text;*/

/*var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
document.getElementById("coba1").innerHTML = i;*/
//let hanya terlihat di loop for() dan var terlihat oleh seluruh fungsi

/*const person = {namadepan:"Aji Said", namabelakang:"Wahyudi Hidayat"};
let txt = "";
for (let x in person) {
	txt += person[x] + " ";
}
document.getElementById("coba1").innerHTML = txt;*/
//sebaiknya jangan gunakan for in di array jika index order important

/*const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("coba1").innerHTML = txt;
function myFunction(value){
	txt += value + "<br>";
}*/

/*const kecamatan = ["Sungai Pinang", "Samarinda Ilir", "Samarinda Ulu", "Palaran"];
let text = "";
for (x of kecamatan) {
	text += x + "<br>"
}
document.getElementById("coba1").innerHTML = text;*/
/*let nama = "Aji Said Wahyudi Hidayat";
let text = "";
for (let x of nama) {
	text += x + "<br>"
}
document.getElementById("coba1").innerHTML = text;*/
let text = "";
let i = 0;
do{
	text += "<br>No. " + i;
	i++;
}
while(i < 10);
document.getElementById("coba1").innerHTML = text;

/*let i = 0;
let text = "";
while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}*/

/*jenis2 loop
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true*/

/*for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.*/

/*break = menghentikan loop
let txt = "";
for (let i = 0; i < 10; i++) {
	if (i === 3) {
		break;
	}
	txt += "<br>No. " + i;
}
document.getElementById("coba2").innerHTML = txt;*/
//melanjutkan loop
let txt = "";
for (let i = 0; i < 10; i++) {
	if (i === 3) {
		continue;
	}
	txt += "<br>No. " + i;
}
document.getElementById("coba2").innerHTML = txt;

/*list: {
  	text += cars[0] + "<br>"; 
  	text += cars[1] + "<br>"; 
  	break list;
  	text += cars[2] + "<br>"; 
  	text += cars[3] + "<br>"; 
}*/

/*iterasi string
const name = "W3Schools";

// List all Elements
let text = ""
for (const x of name) {
  text += x + "<br>";
}*/

/*iterasi array
const letters = ["a","b","c"];

// List all Elements
let text = "";
for (const x of letters) {
  text += x + "<br>";
}
*/

//sets
//const letters = new Set(["a","b","c"]);
const letters = new Set();
const a = "a";
const b = "b";
const c = "c";
letters.add(a);
letters.add(b);
letters.add(c);
document.getElementById("coba3").innerHTML = letters.size;

/*Method	Description
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
Property	Description
size	Returns the number of elements in a Set*/

//If you add equal elements, only the first will be saved

const letters2 = new Set(["a","b","c"]);
let text2 = "";
/*letters2.forEach(function(value){
	text2 += value + "<br>";
});*/
for (const x of letters2.values()) {
	text2 += x + "<br>";
}
document.getElementById("coba4").innerHTML = text2;

//map
/*const fruits = new Map([
	["durian", 500],
	["rambutan", 300],
	["buah naga", 200],
]);*/
const fruits = new Map();
fruits.set("durian", 500);
fruits.set("rambutan", 300);
fruits.set("buah naga", 200);
fruits.delete("durian");
//document.getElementById("coba5").innerHTML = fruits.get("durian");
//document.getElementById("coba5").innerHTML = fruits.has("rambutan");

/*Method	Description
new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map*/

const fruits2 = new Map();
fruits2.set("jambu", 500);
fruits2.set("semangka", 300);
fruits2.set("anggur", 200);
let text3 = "";
/*fruits2.forEach(function(value, key){
	text3 += key + '=' + value + "<br>"
})*/
for (const x of fruits2.entries()) {
	text3 += x + "<br>";
}
document.getElementById("coba5").innerHTML = text3;