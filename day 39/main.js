document.getElementById("cobaLocationHref").innerHTML = "The full URL of this page is:<br>" + window.location.href;
document.getElementById("cobaLocationHostname").innerHTML = "Page hostname is: " + window.location.hostname;
document.getElementById("cobaPath").innerHTML = "Page path is: " + window.location.pathname;
document.getElementById("cobaProtocol").innerHTML = "Page protocol is: " + window.location.protocol;
document.getElementById("cobaPort").innerHTML = "Port number is: " + window.location.port;
function newDoc() {
	window.location.assign("https://www.w3schools.com");
}
function goBack() {
	window.history.back()
}
/*function myFunction() { //go back 2 pages
  	window.history.go(-2);
}*/
function goForward() {
	window.history.forward()
}
document.getElementById("cobaCookie").innerHTML = "cookiesEnabled is " + navigator.cookieEnabled;
document.getElementById("cobaAppName").innerHTML = "navigator.appName is " + navigator.appName;
//Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.
document.getElementById("cobaCode").innerHTML = "navigator.appCodeName is " + navigator.appCodeName;
document.getElementById("cobaProduct").innerHTML = "navigator.product is " + navigator.product;
//Do not rely on this. Most browsers returns "Gecko" as product name !!
document.getElementById("cobaVersion").innerHTML = navigator.appVersion;
document.getElementById("cobaAgent").innerHTML = navigator.userAgent;
/*The information from the navigator object can often be misleading, and should not be used to detect browser versions because:
Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser*/
document.getElementById("cobaPlatform").innerHTML = "navigator.platform is " + navigator.platform;
document.getElementById("cobaLanguage").innerHTML = "navigator.language is " + navigator.language;
document.getElementById("cobaOnline").innerHTML = "navigator.onLine is " + navigator.onLine;
document.getElementById("cobaJavaEnabled").innerHTML = "javaEnabled is " + navigator.javaEnabled();
function cobaAlert() {
	alert("tes\naji"); //Line-breaks in a popup box : \n
}
function cobaConfirm() {
  	var txt;
  	if (confirm("Press a button!")) {
    	txt = "You pressed OK!";
  	} else {
    	txt = "You pressed Cancel!";
  	}
  	document.getElementById("munculkanConfirm").innerHTML = txt;
}
function cobaPrompt() {
	let text;
  	let person = prompt("Please enter your name:", "Harry Potter");
  	if (person == null || person == "") {
    	text = "User cancelled the prompt.";
  	} else {
    	text = "Hello " + person + "! How are you today?";
  	}
  	document.getElementById("munculkanPrompt").innerHTML = text;
}
/*function cobaTiming() {
  	alert('Hello');
}
setInterval(myTimer, 1000);
function myTimer() {
  	const d = new Date();
  	document.getElementById("cobaInterval").innerHTML = d.toLocaleTimeString();
}*/
let myVar2 = setInterval(myTimer2 ,1000);
function myTimer2() {
  	const e = new Date();
  	document.getElementById("cobaInterval").innerHTML = e.toLocaleTimeString();
}

//api
const x = document.getElementById("cobaLokasi");
function getLocation() {
  	try {
    	navigator.geolocation.getCurrentPosition(showPosition);
  	} catch {
    	x.innerHTML = err;
  	}
}
function showPosition(position) {
  	x.innerHTML = "Latitude: " + position.coords.latitude + 
  	"<br>Longitude: " + position.coords.longitude;
}
/*function cobaFormApi() {
  	const inpObj = document.getElementById("id1");
  	if (!inpObj.checkValidity()) {
    	document.getElementById("tampilkanValidasi").innerHTML = inpObj.validationMessage;
  	} else {
    	document.getElementById("tampilkanValidasi").innerHTML = "Input OK";
  	} 
} */
function cobaFormApi() {
  	let text2;
  	if (document.getElementById("id1").validity.rangeUnderflow) { //rangeUnderflow/rangeOverflow
    	text2 = "Value too small";
  	} else {
    	text2 = "Input OK";
  	} 
  	document.getElementById("tampilkanValidasi").innerHTML = text2;
}
/*localStorage.setItem("name","John Doe");
document.getElementById("cobaStorageApi").innerHTML = localStorage.getItem("name");*/
sessionStorage.setItem("name","John Doe");
document.getElementById("cobaStorageApi").innerHTML = sessionStorage.getItem("name");

let w;

function startWorker() {
  if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

/*let file = "fetch_info.txt"

fetch (file)
.then(x => x.text())
.then(y => document.getElementById("cobaFetch").innerHTML = y);*/

/*getText("fetch_info.txt");

async function getText(file) {
  	let x = await fetch(file);
  	let y = await x.text();
  	document.getElementById("cobaFetch").innerHTML = y;
}*/

getText("fetch_info.txt");

async function getText(file) {
  	let myObject = await fetch(file);
  	let myText = await myObject.text();
  	document.getElementById("cobaFetch").innerHTML = myText;
}

/*const x = document.getElementById("demo");

function getLocation() {
  	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition);
  	} else { 
    	x.innerHTML = "Geolocation is not supported by this browser.";
  	}
}

function showPosition(position) {
  	x.innerHTML = "Latitude: " + position.coords.latitude + 
  	"<br>Longitude: " + position.coords.longitude;
}*/

/*const x = document.getElementById("demo");

function getLocation() {
  	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition, showError);
  	} else { 
    	x.innerHTML = "Geolocation is not supported by this browser.";
  	}
}

function showPosition(position) {
  	x.innerHTML = "Latitude: " + position.coords.latitude + 
  	"<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  	switch(error.code) {
    	case error.PERMISSION_DENIED:
      		x.innerHTML = "User denied the request for Geolocation."
      		break;
    	case error.POSITION_UNAVAILABLE:
      		x.innerHTML = "Location information is unavailable."
      		break;
    	case error.TIMEOUT:
      		x.innerHTML = "The request to get user location timed out."
      		break;
    	case error.UNKNOWN_ERROR:
      		x.innerHTML = "An unknown error occurred."
      		break;
  	}
}*/

/*const x = document.getElementById("demo");

function getLocation() {
  	if (navigator.geolocation) {
    	navigator.geolocation.watchPosition(showPosition);
  	} else { 
    	x.innerHTML = "Geolocation is not supported by this browser.";
  	}
}
    
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}*/