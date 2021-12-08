/*document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
  document.getElementById("coba1").innerHTML = Date();
}*/

/*document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});*/

/*document.getElementById("myBtn").addEventListener("click", myFunction);
function myFunction() {
  alert("Hello World!");
}*/

/*var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", otherFunction);
function myFunction() {
  alert("Hello World!");
}
function otherFunction() {
  alert("Hello Aji!");
}*/

/*var x = document.getElementById("myBtn");
x.addEventListener("mouseover", firstFunction);
x.addEventListener("click", secondFunction);
x.addEventListener("mouseout", thirdFunction);
function firstFunction(){
  document.getElementById("coba1").innerHTML += "Mouse over<br>";
}
function secondFunction(){
  document.getElementById("coba1").innerHTML += "Click<br>";
}
function thirdFunction(){
  document.getElementById("coba1").innerHTML += "Mouse out<br>";
}*/

/*window.addEventListener("resize", function(){
  document.getElementById("coba1").innerHTML = Math.random();
});*/

/*let p1 = 5;
let p2 = 7;
document.getElementById("myBtn").addEventListener("click", function() {
  myFunction(p1,p2);
});
function myFunction(a,b) {
  document.getElementById("coba1").innerHTML = a * b;
}*/

/*document.getElementById("myP1").addEventListener("click", function(){
  alert("You clicked the white element!");
}, false);
document.getElementById("myDiv1").addEventListener("click", function(){
  alert("You clicked the orange element!");
}, false);
document.getElementById("myP2").addEventListener("click", function(){
  alert("You clicked the white element!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function(){
  alert("You clicked the orange element!");
}, true);*/

/*document.getElementById("myDIV").addEventListener("mousemove", myFunction);
function myFunction() {
  document.getElementById("coba1").innerHTML = Math.random();
}
function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}*/

//document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
//document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
//document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;

//document.getElementById("coba1").innerHTML = document.body.innerHTML;
//document.getElementById("coba1").innerHTML = document.documentElement.innerHTML;

//document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
//document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;

/*const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);*/

/*const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para,child);*/

/*function myFunction() {
  document.getElementById("p1").remove();
} //remove() tidak bekerja di browser versi lama*/

/*const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);*/

/*const parent = document.getElementById("div1");
const child = document.getElementById("p1");
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
parent.replaceChild(para,child);*/

/*const myCollection = document.getElementsByTagName("p");
document.getElementById("coba1").innerHTML = "The innerHTML of the second paragraph is: " + myCollection[1].innerHTML;*/

/*const myCollection = document.getElementsByTagName("p");
document.getElementById("coba1").innerHTML = "This document contains " + myCollection.length + " paragraphs.";*/

/*function myFunction() {
  const myCollection = document.getElementsByTagName("p");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "red";
  }
}*/

/*const myNodelist = document.querySelectorAll("p");
document.getElementById("coba1").innerHTML = "The innerHTML of the second paragraph is: " + myNodelist[1].innerHTML;*/

/*const myNodelist = document.querySelectorAll("p");
document.getElementById("coba1").innerHTML = "This document contains " + myNodelist.length + " paragraphs.";*/

/*function myFunction() {
  const myNodelist = document.querySelectorAll("p");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "red";
  }
}*/

/*document.getElementById("coba2").innerHTML =
"Browser inner window width: " + window.innerWidth + "px<br>" +
"Browser inner window height: " + window.innerHeight + "px";*/

/*document.getElementById("coba2").innerHTML = 
"Screen width is " + screen.width;*/

/*document.getElementById("coba2").innerHTML = 
"Screen height is " + screen.height;*/

/*document.getElementById("coba2").innerHTML = 
"Available screen width is " + screen.availWidth;*/

/*document.getElementById("coba2").innerHTML = 
"Available screen height is " + screen.availHeight;*/

/*document.getElementById("coba2").innerHTML = 
"Screen color depth is " + screen.colorDepth;*/

document.getElementById("coba2").innerHTML = 
"Screen pixel depth is " + screen.pixelDepth;