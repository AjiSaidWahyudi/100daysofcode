const programmer = ["Aji", "Sarman", "Alfi", "Arif"];
programmer.sort();
programmer.reverse(); //susunan dibalik
document.getElementById("coba1").innerHTML = programmer;

const angka = [3, 12, 54, 34, 28];
angka.sort(function(a,b){return a - b});
//angka.sort(function(a,b){return b - a}); //susunan dibalik
//document.getElementById("coba2").innerHTML = angka; //angka[0] = mencari angka terkecil ke terbesar atau sebaliknya
//Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.
//document.getElementById("coba2").innerHTML = myArrayMax(angka);
document.getElementById("coba2").innerHTML = myArrayMin(angka);
/*mencari angka tertinggi (alt.2)
function myArrayMax(arr){
	return Math.max.apply(null, arr);
}*/

/*mencari angka terendah (alt.2)
function myArrayMin(arr){
	return Math.min.apply(null, arr);
}*/

/*mencari angka tertinggi (alt.3)
function myArrayMax(arr){
	let len = arr.length;
	let max = -Infinity;
	while (len--){
		if (arr[len] > max) {
			max = arr[len];
		}
	}
	return max;
}*/

function myArrayMin(arr){
	let len = arr.length;
	let min = Infinity;
	while (len--){
		if (arr[len] < min) {
			min = arr[len];
		}
	}
	return min;
}

//mengacak angka
const angka2 = [3, 12, 54, 34, 28];
document.getElementById("coba3").innerHTML = angka2;
function cobaRandom(){
	angka2.sort(function(a,b){return 0.5 - Math.random()});
	document.getElementById("coba3").innerHTML = angka2;
}

//Fisher Yates Method
const angka3 = [3, 12, 54, 34, 28];
document.getElementById("coba4").innerHTML = angka3;
function cobaYates(){
	for (let i = angka3.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i)
		let k = angka3[i]
		angka3[i] = angka3[j]
		angka3[j] = k
	}
	document.getElementById("coba4").innerHTML = angka3;
}

//mengurutkan object
const lagu = [
	{artis:"Dewa 19", judul:"Sedang Ingin Bercinta", tahun:2006},
	{artis:"Ari Lasso", judul:"Arti Cinta", tahun:2004},
	{artis:"Sheila On 7", judul:"Mudah Saja", tahun:2008}
];
displayLagu();
lagu.sort(function(a, b){return a.tahun - b.tahun});
displayLagu();
function displayLagu(){
	document.getElementById("coba5").innerHTML = 
	lagu[0].artis + " - " + lagu[0].judul + " (" + lagu[0].tahun + ")" + "<br>" +
	lagu[1].artis + " - " + lagu[1].judul + " (" + lagu[1].tahun + ")" + "<br>" +
	lagu[2].artis + " - " + lagu[2].judul + " (" + lagu[2].tahun + ")";
}

//mengurutkan object (alt. 2)
const cars = [
  	{type:"Volvo", year:2016},
  	{type:"Saab", year:2001},
  	{type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  	cars.sort(function(a, b){
    	let x = a.type.toLowerCase();
    	let y = b.type.toLowerCase();
    	if (x < y) {return -1;}
    	if (x > y) {return 1;}
    	return 0;
  	});
  	displayCars();
}

function displayCars() {
  	document.getElementById("demo").innerHTML =
  	cars[0].type + " " + cars[0].year + "<br>" +
  	cars[1].type + " " + cars[1].year + "<br>" +
  	cars[2].type + " " + cars[2].year;
}

//Calls a function once for each array element.
//memanggil value saja tidak berpengaruh
const angka4 = [45, 4, 9, 16, 25];
let txt = "";
angka4.forEach(cobaAngka);
document.getElementById("coba6").innerHTML = txt;
function cobaAngka(value, index, array){
	txt += value + "<br>";
}

//map
const angka5 = [45, 4, 9, 16, 25];
const angka5a = angka5.map(cobaAngka2);
document.getElementById("coba7").innerHTML = angka5a;
function cobaAngka2(value, index, array){
	return value * 2;
}

//filter
const angka6 = [45, 4, 9, 16, 25];
const angkaLulus = angka6.filter(cobaLulus);
document.getElementById("coba8").innerHTML = angkaLulus;
function cobaLulus(value, index, array){
	return value > 18;
}

//reduce
const angka7 = [45, 4, 9, 16, 25];
const jumlah = angka7.reduce(cobaJumlah, 100); //boleh tambah angka lagi disini
document.getElementById("coba9").innerHTML = jumlah;
function cobaJumlah(total, value, index, array){
	return total + value;
}

//reduce right
const angka8 = [45, 4, 9, 16, 25];
const jumlah2 = angka8.reduceRight(cobaJumlah2);
document.getElementById("coba10").innerHTML = jumlah2;
function cobaJumlah2(total, value, index, array){
	return total + value;
}

//every (mengecek apakah semua value bernilai yang ditentukan)
const angka9 = [45, 4, 9, 16, 25];
const angkaEvery = angka9.every(cobaEvery);
document.getElementById("coba11").innerHTML = angkaEvery;
function cobaEvery(value, index, array){
	return value > 18;
}

//some (mengecek apakah beberapa value bernilai yang ditentukan)
const angka10 = [45, 4, 9, 16, 25];
const angkaSome = angka10.some(cobaSome);
document.getElementById("coba12").innerHTML = angkaSome;
function cobaSome(value, index, array){
	return value > 18;
}

//indexOf/lastIndexOf (mengetahui posisi array)
const programmer2 = ["Aji", "Sarman", "Alfi", "Arif"];
//let position = programmer2.indexOf("Sarman") + 1;
let position = programmer2.lastIndexOf("Aji") + 1;
document.getElementById("coba13").innerHTML = position;

//includes (tidak support di Edge 13 kebawah)
const kecamatan = ["Samarinda Ilir", "Sungai Pinang", "Samarinda Ulu"];
document.getElementById("coba14").innerHTML = kecamatan.includes("Samarinda Utara");

//find & findIndex
const angka11 = [4, 9, 16, 25, 29];
let first = angka11.find(cobaFind);
//let first = angka11.findIndex(cobaFind);
document.getElementById("coba15").innerHTML = first;
function cobaFind(value, index, array){
	return value > 18;
}

/*from (tidak support di IE)
const myArr = Array.from("ABCDEFG");
document.getElementById("demo").innerHTML = myArr;*/

/*keys (tidak support di IE)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;*/

/*boleh mendeklarasikan array dengan var
cars = ["Saab", "Volvo", "BMW"];
var cars;*/