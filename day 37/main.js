/*Finding HTML Elements
document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name*/

/*Changing HTML Elements
Property	Description
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element*/

/*Adding and Deleting Elements
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream*/

/*Adding Events Handlers
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event*/

/*Finding HTML Objects
document.anchors	Returns all <a> elements that have a name attribute	1
document.applets	Deprecated	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Returns the domain name of the document server	1
document.domConfig	Obsolete.	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document	1*/

/*const element = document.getElementById("intro");
document.getElementById("coba1").innerHTML = "The text from the intro paragraph is: " + element.innerHTML;*/

/*const element = document.getElementsByTagName("p");
document.getElementById("coba2").innerHTML = "The text from the intro paragraph is: " + element[0].innerHTML;*/

/*const x = document.getElementById("main"); //memanggil elemen sesuai dengan id
const y = x.getElementsByTagName("p"); //memanggil elemen sesuai dengan tag
document.getElementById("coba3").innerHTML = 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;*/

//const x = document.getElementsByClassName("intro"); //memanggil elemen sesuai dengan class
const x = document.querySelectorAll("p.intro"); //memanggil elemen sesuai dengan css selector
document.getElementById("coba4").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

/*const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  	text += x.elements[i].value + "<br>";
}
document.getElementById("coba5").innerHTML = text;*/

//change html content
document.getElementById("coba5").innerHTML = "text";

//change the value of an attribute
document.getElementById("image").src = "image2.jpg";

//dynamic html content
document.getElementById("coba6").innerHTML = Date();

//document.write
document.write(Date());

//validate form
/*function validateForm() {
	let x = document.forms["myForm"]["fname"].value;
	if (x == "") {
		alert("Nama harus diisi");
		return false;
	}
}*/

function myFunction() {
	let x = document.getElementById("numb").value;
	let text;
	if (isNaN(x) || x < 1 || x > 10) {
		text = "Input tidak valid";
	} else {
		text = "Input OK";
	}
	document.getElementById("coba7").innerHTML = text;
}

//change html style
document.getElementById("coba8").style.color = "Blue";
document.getElementById("coba8").style.fontFamily = "Arial";
document.getElementById("coba8").style.fontSize = "Larger";

//event
function changeText(id) {
	id.innerHTML='Halo';
}

document.getElementById("myBtn").onclick = displayDate;
function displayDate() {
	document.getElementById("coba9").innerHTML = Date();
}

function checkCookies() {
	var text = "";
	if(navigator.cookieEnabled == true){
		text2 = "Cookies are enabled.";
	} else {
		text2 = "Cookies are not enabled.";
	}
	document.getElementById("coba9").innerHTML = text2;
}

function upperCase() {
  	const m = document.getElementById("fname");
  	m.value = m.value.toUpperCase();
}

function mOver(obj) {
	obj.innerHTML = "Thank You"
}

function mOut(obj) {
	obj.innerHTML = "Mouse Over Me"
}

function mDown(obj) {
	obj.style.backgroundColor = "#1ec5e5";
	obj.innerHTML = "Release Me";
}

function mUp(obj) {
	obj.style.backgroundColor = "#D94A38";
	obj.innerHTML = "Thank You";
}