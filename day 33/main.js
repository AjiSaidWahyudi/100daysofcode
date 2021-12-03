/*Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects*/

/*A primitive value is a value that has no properties or methods.
A primitive data type is data that has a primitive value.
JavaScript defines 5 types of primitive data types:
string
number
boolean
null
undefined*/

/*Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person:*/

/*const person = {
  	firstName: "John",
  	lastName: "Doe",
  	age:50,
  	eyeColor: "blue"
};
const x = person;
x.age = 10;
document.getElementById("coba1").innerHTML =
person.firstName + " is " + person.age + " years old.";*/
/*The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.*/

/*The syntax for accessing the property of an object is:
objectName.property      // person.age
or
objectName["property"]   // person["age"]
or
objectName[expression]   // x = "age"; person[x]*/

//The JavaScript for...in statement loops through the properties of an object.
/*const person = {
  	fname:"John",
  	lname:"Doe",
  	age:25
};
person.nationality = "English"; //tambah property
delete person["age"];
let txt = "";
for (let x in person) {
  	txt += person[x] + " ";
}
document.getElementById("coba1").innerHTML = txt;*/

//nested objects
/*const myObj = {
	name: "Aji Said Wahyudi Hidayat",
	age: 26,
	girlfriends:{
		gf1: "Yukari",
		gf2: "Sihyeon",
		gf3: "Saya"
	}
}
document.getElementById("coba1").innerHTML = myObj.girlfriends.gf1;*/

//nested arrays & objects
/*let x = "";
const myObj = {
	name: "K-Pop Girl Groups",
	today: new Date(),
	age: function () {return 30;},
	groups:[
		{groupname:"Itzy", members:["Yeji", "Lia", "Ryujin", "Chaeryeong", "Yuna"]},
		{groupname:"aespa", members:["Karina", "Giselle", "Winter", "Ningning"]},
		{groupname:"Ive", members:["Yujin", "Gaeul", "Wonyoung", "Liz", "Rei", "Leeseo"]},
		{groupname:"Stayc", members:["Sumin", "Sieun", "Isa", "Seeun", "Yoon", "J"]},
		{groupname:"Twice", members:["Nayeon", "Jeongyeon", "Momo", "Sana", "Jihyo", "Mina", "Dahyun", "Chaeyoung", "Tzuyu"]}
	]
}
for (let i in myObj.groups) {
	x += "<h2>" + myObj.groups[i].groupname + "</h2>";
	for (let j in myObj.groups[i].members) {
		x += myObj.groups[i].members[j] + "<br>";
	}
}
myObj.age = myObj.age.toString();
document.getElementById("coba1").innerHTML = x;*/
//document.getElementById("coba1").innerHTML = JSON.stringify(myObj);

//getter
/*const person = {
	name:"Aji Said Wahyudi Hidayat",
	language:"id",
	get lang(){
		return this.language.toUpperCase();
	}
};
document.getElementById("coba1").innerHTML = person.lang;*/

//setter
/*const person = {
	name:"Aji Said Wahyudi Hidayat",
	language:"",
	set lang(lang){
		this.language = lang.toUpperCase();
	}
};
person.lang = "id";
document.getElementById("coba1").innerHTML = person.language;*/

/*function : access fullName as a function: person.fullName().
getter : access fullName as a property: person.fullName.
The second example provides a simpler syntax.*/

const obj = {counter:0};
Object.defineProperty(obj, "reset", {
	get : function() {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
	get : function() {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
	get : function() {this.counter--;}
});
Object.defineProperty(obj, "add", {
	get : function() {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
	get : function() {this.counter -= value;}
});
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("coba1").innerHTML = obj.counter;