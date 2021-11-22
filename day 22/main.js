function myFunction(){
	document.getElementById("coba").innerHTML = "Aji Said Wahyudi Hidayat";
}

document.getElementById("coba2").innerHTML = 1+1;

let a, b, c;
a = 5;
b = 6;
c = a+b;
document.getElementById("coba3").innerHTML = 
c;

/*code block*/
function myFunction2(){
	document.getElementById("coba4a").innerHTML = "Aji Said Wahyudi Hidayat";
	document.getElementById("coba4b").innerHTML = "Muhammad Sarman Noorlah";
}

/*document.getElementById("coba5").innerHTML = "Aulia" + " " + "Safira";*/

/*var carName = "Honda"; //re-declare variabel
var carName; //variabel tanpa value akan menjadi undefined
document.getElementById("coba5").innerHTML = carName;*/

/*let x; let & var = memberitahu variabel kepada browser
x = 6;
document.getElementById("coba5").innerHTML = x + 4;*/

/*var x = 4 + 2 + "4"; jika salah satu angkanya string
document.getElementById("coba5").innerHTML = x;*/

/*var $ = 2; menggunakan $
var $myMoney = 5;
document.getElementById("coba5").innerHTML = $ + $myMoney;*/

/*var _ = 2; menggunakan _
var _myMoney = 5;
document.getElementById("coba5").innerHTML = _ + _myMoney;*/

/*var namaDepan = "Aji Said", namaBelakang = "Wahyudi Hidayat"; boleh memasang lebih dari satu variabel dalam satu statement*/

/*let x = "Aji";
{let x = "Aulia"}
document.getElementById("coba5").innerHTML = x;*/

/*//membuat array
const programmer = ["Aji", "Ihsan", "Rizky"];
//mengganti element
programmer[2] = "Sarman";
//menambah element
programmer.push = "Alfi";
//tampilkan array
document.getElementById("coba5").innerHTML = programmer;*/

//membuat array
const programmer = {nama:"Aji", posisi:"Full Stack Developer"};
//mengganti element
programmer.nama = "Sarman";
//menambah element
programmer.bahasa = "C++";
//tampilkan array
document.getElementById("coba5").innerHTML = programmer.bahasa;

/*innerHTML digunakan untuk mendefinisikan konten HTML
document.write digunakan untuk ujicoba script js
window.alert digunakan untuk menampilkan alert (kata window boleh tidak diketik)
console.log digunakan untuk debugging
window.print digunakan untuk mencetak data

jika tidak ingin kepanjangan, script hanya boleh di enter setelah tanda baca

angka boleh ditulis dalam desimal, teks boleh ditulis dengan petik satu atau dua

var, let and const digunakan untuk mendeklarasikan variabel

JS bisa digunakan untuk menghitung dengan operator + - * /

JS bersifat case sensitive

JS identifier harus dimulai dari huruf/$/_

let tidak boleh duplicate variable, tidak boleh didefinisikan di dalam {}, harus didefinisikan dulu sebelum dieksekusi

const tidak bisa di reassign

Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

Reassigning an existing const variable, in the same scope, is not allowed:

Redeclaring a variable with const, in another scope, or in another block, is allowed:*/