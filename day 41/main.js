/*parse json dasar
const txt = '{"name":"Aji","age":26}'
const obj = JSON.parse(txt);
document.getElementById("coba").innerHTML = obj.name + " " + obj.age;*/ //bisa juga dengan obj["name"];
/*parse array
const text = '["Honda", "Toyota", "Suzuki"]';
const myArr = JSON.parse(text);
document.getElementById("coba").innerHTML = myArr[0];*/
/*parse date
const txt = '{"name":"Aji","age":26,"birth":"1995-05-02"}'
const obj = JSON.parse(txt);
obj.birth = new Date(obj.birth)
document.getElementById("coba").innerHTML = obj.name + " " + obj.birth;*/
/*parse date 2
const txt = '{"name":"Aji","age":26,"birth":"1995-05-02"}'
const obj = JSON.parse(txt, function(key, value){
	if (key == "birth") {
		return new Date(value);
	} else {
		return value;
	}
});
document.getElementById("coba").innerHTML = obj.name + " " + obj.birth;*/
/*parse function (sebisa mungkin dihindari, karena bisa kehilangan scope)
const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");
document.getElementById("coba").innerHTML = obj.name + ", " + obj.age();*/
/*jadiin json sebagai string
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
document.getElementById("coba").innerHTML = myJSON;*/
/*jadiin array sebagai string
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
document.getElementById("coba").innerHTML = myJSON;*/
/*// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("coba").innerHTML = obj.name;*/
/*const obj = {name: "Aji", today: new Date(), city: "Samarinda"};
const myJSON = JSON.stringify(obj);
document.getElementById("coba").innerHTML = myJSON;*/
/*function sebisa mungkin dihindari, karena akan kehilangan scope
const obj = {name: "John", age: function () {return 30;}, city: "New York"};
const myJSON = JSON.stringify(obj);
document.getElementById("coba").innerHTML = myJSON;*/
/*const obj = {name: "John", age: function () {return 30;}, city: "New York"};
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);
document.getElementById("coba").innerHTML = myJSON;*/
/*JSON object literals are surrounded by curly braces {}.
JSON object literals contains key/value pairs.
Keys and values are separated by a colon.
Keys must be strings, and values must be a valid JSON data type:
string
number
object
array
boolean
null
Each key/value pair is separated by a comma.*/
/*It is a common mistake to call a JSON object literal "a JSON object".
JSON cannot be an object. JSON is a string format.
The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.*/
/*loop object
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
let text = "";
for (const x in myObj) {
  	text += x + ", ";
}
document.getElementById("coba").innerHTML = text;*/
/*loop object
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
let text = "";
for (const x in myObj) {
  	text += myObj[x] + ", ";
}
document.getElementById("coba").innerHTML = text;*/
/*const myArray = ["Honda", "Toyota", "Suzuki"];
document.getElementById("coba").innerHTML = myArray;*/
//Arrays in Objects
/*const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
document.getElementById("coba").innerHTML = myObj.cars[0];*/
/*loop 1
const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
let text = "";
for (let i in myObj.cars) {
  	text += myObj.cars[i] + ", ";
}
document.getElementById("coba").innerHTML = text;*/
/*loop 2
const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
let text = "";
for (let i = 0; i < myObj.cars.length; i++) {
  	text += myObj.cars[i] + ", ";
}
document.getElementById("coba").innerHTML = text;*/
/*mengambil json dari file
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;*/
/*const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  	const myObj = JSON.parse(this.responseText);
  	document.getElementById("coba").innerHTML = myObj.name;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();*/
/*const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  	const myObj = JSON.parse(this.responseText);
  	document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();*/