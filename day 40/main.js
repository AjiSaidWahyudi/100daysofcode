/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("cobaAjax").innerHTML = this.responseText;
  	}
  	xhttp.open("GET", "ajax_info.txt");
  	xhttp.send();
}*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("demo").innerHTML =
    	this.responseText;
  	}
  	xhttp.open("GET", "ajax_info.txt");
  	xhttp.send();
}*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      		document.getElementById("demo").innerHTML =
      		this.responseText;
    	}
  	};
  	xhttp.open("GET", "ajax_info.txt");
  	xhttp.send();
}*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("demo").innerHTML = this.responseText;
  	}
  	xhttp.open("GET", "demo_get.asp");
  	xhttp.send();
}*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("demo").innerHTML = this.responseText;
  	}
  	xhttp.open("GET", "demo_get.asp?t=" + Math.random());
  	xhttp.send();
}*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("demo").innerHTML = this.responseText;
  	}
  	xhttp.open("GET", "demo_get.asp?fname=Henry&lname=Ford");
  	xhttp.send();
}*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("demo").innerHTML = this.responseText;
  	}
  	xhttp.open("POST", "demo_post.asp");
  	xhttp.send();
}*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("demo").innerHTML = this.responseText;
  	}
  	xhttp.open("POST", "demo_post.asp");
  	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	xhttp.send("fname=Henry&lname=Ford");
}*/
/*function loadDoc() {
  	var xhttp = new XMLHttpRequest();
  	xhttp.open("GET", "ajax_info.txt", false);
  	xhttp.send();
  	document.getElementById("demo").innerHTML = xhttp.responseText;
}
Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop.

Modern developer tools are encouraged to warn about using synchronous requests and may throw an InvalidAccessError exception when it occurs.*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("cobaAjax").innerHTML =
    	this.responseText;
  	}
  	xhttp.open("GET", "ajax_info.txt");
  	xhttp.send();
}*/
/*const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  	const xmlDoc = this.responseXML;
  	const x = xmlDoc.getElementsByTagName("ARTIST");
  	let txt = "";
  	for (let i = 0; i < x.length; i++) {
    	txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  	}
  	document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();*/
/*const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  	document.getElementById("demo").innerHTML =
  	this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();*/
/*const xhttp=new XMLHttpRequest();
xhttp.onload = function() {
  	document.getElementById("demo").innerHTML =
  	this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();*/
/*function loadDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	myFunction(this);
  	}
  	xhttp.open("GET", "cd_catalog.xml");
  	xhttp.send();
}
function myFunction(xml) {
  	const xmlDoc = xml.responseXML;
  	const x = xmlDoc.getElementsByTagName("CD");
  	let table="<tr><th>Artist</th><th>Title</th></tr>";
  	for (let i = 0; i <x.length; i++) { 
    	table += "<tr><td>" +
    	x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    	"</td><td>" +
    	x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    	"</td></tr>";
  	}
  	document.getElementById("demo").innerHTML = table;
}*/
/*function showHint(str) {
  	if (str.length == 0) { 
    	document.getElementById("txtHint").innerHTML = "";
    	return;
  	}
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("txtHint").innerHTML =
    	this.responseText;
  	}
  	xhttp.open("GET", "gethint.php?q="+str);
  	xhttp.send();   
}*/
/*function showHint(str) {
  	if (str.length == 0) { 
    	document.getElementById("txtHint").innerHTML = "";
    	return;
  	}
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("txtHint").innerHTML =
    	this.responseText;
  	}
  	xhttp.open("GET", "gethint.asp?q="+str);
  	xhttp.send();
}*/
/*function showCustomer(str) {
  	if (str == "") {
    	document.getElementById("txtHint").innerHTML = "";
    	return;
  	}
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	document.getElementById("txtHint").innerHTML = this.responseText;
  	}
  	xhttp.open("GET", "getcustomer.php?q="+str);
  	xhttp.send();
}*/
/*function loadXMLDoc() {
  	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
    	const xmlDoc = xhttp.responseXML;
    	const cd = xmlDoc.getElementsByTagName("CD");
    	myFunction(cd)
  	}
  	xhttp.open("GET", "cd_catalog.xml");
  	xhttp.send();
}

function myFunction(cd) {
  	let table="<tr><th>Artist</th><th>Title</th></tr>";
  	for (let i = 0; i < cd.length; i++) { 
    	table += "<tr><td>" +
    	cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    	"</td><td>" +
    	cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    	"</td></tr>";
  	}
  	document.getElementById("demo").innerHTML = table;
}*/
/*const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  	const xmlDoc = xhttp.responseXML; 
  	const cd = xmlDoc.getElementsByTagName("CD");
  	myFunction(cd, 0);
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function myFunction(cd, i) {
  	document.getElementById("showCD").innerHTML =
  	"Artist: " +
  	cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  	"<br>Title: " +
  	cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  	"<br>Year: " + 
  	cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}*/
/*let i = 0;
let len;
let cd;

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  	const xmlDoc = xhttp.responseXML;
  	cd = xmlDoc.getElementsByTagName("CD");
  	len = cd.length;
  	displayCD(i);
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function displayCD(i) {
  	document.getElementById("showCD").innerHTML =
  	"Artist: " +
  	cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  	"<br>Title: " +
  	cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  	"<br>Year: " + 
  	cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
  	if (i < len-1) {
    	i++;
    	displayCD(i);
  	}
}

function previous() {
  	if (i > 0) {
    	i--;
    	displayCD(i);
  	}
}*/
/*const xhttp = new XMLHttpRequest();
let cd;
xhttp.onload = function() {
 	const xmlDoc = xhttp.responseXML; 
 	cd = xmlDoc.getElementsByTagName("CD");
 	loadCD();
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function loadCD() {
  	let table="<tr><th>Artist</th><th>Title</th></tr>";
  	for (let i = 0; i < cd.length; i++) { 
	    table += "<tr onclick='displayCD(" + i + ")'><td>";
	    table += cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
	    table += "</td><td>";
	    table += cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
	    table += "</td></tr>";
  	}
  	document.getElementById("demo").innerHTML = table;
}

function displayCD(i) {
  	document.getElementById("showCD").innerHTML =
  	"Artist: " +
  	cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  	"<br>Title: " +
  	cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  	"<br>Year: " + 
  	cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}*/

const myObj = {name:"John", age:30, city:"New York"};
myObj.name = "Gilbert"; //myObj["name"] = "Gilbert" sama saja
document.getElementById("demo").innerHTML = myObj.name; //myObj["name"] sama saja

//tipe data JSON
/*a string {"name":"John"}
a number {"age":30}
an object (JSON object) {"employee":{"name":"John", "age":30, "city":"New York"}}
an array {"employees":["John", "Anna", "Peter"]}
a boolean {"sale":true}
null {"middlename":null}*/
/*tidak bisa dijadikan tipe data
a function
a date
undefined*/