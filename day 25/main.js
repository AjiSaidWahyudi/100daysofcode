let str = `Pendampingan Samarinda Hackathon 3.0 di Lingkungan Pemerintah Kota Samarinda`;
//document.getElementById("coba").innerHTML = str.indexOf("Samarinda", 9); //The indexOf() method returns the position of the first occurrence of a specified text
//document.getElementById("coba").innerHTML = str.lastIndexOf("Samarinda", 9); //The lastIndexOf() method returns the position of the last occurrence of a specified text
//jika tidak ada kata yang dimaksud, maka akan menjadi -1
//Both methods accept a second parameter as the starting position for the search
//document.getElementById("coba").innerHTML = str.search("Samarinda");
//document.getElementById("coba").innerHTML = str.includes("Samarinda",22);
//document.getElementById("coba").innerHTML = str.startsWith("Pendampingan");
//document.getElementById("coba").innerHTML = str.startsWith("Samarinda", 13);
//document.getElementById("coba").innerHTML = str.endsWith("Samarinda");
document.getElementById("coba").innerHTML = str.endsWith("Samarinda", 67);

let text1 = "The rain in SPAIN stays mainly in the plain";
document.getElementById("coba2").innerHTML = text1.match(/ain/g); //The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object
//document.getElementById("coba2").innerHTML = text1.match(/ain/gi); //Perform a global, case-insensitive search for "ain"

let nama1 = "Aji";
let nama2 = "Sarman";
let percakapan = `Programmer di Bidang 4 ada ${nama1} & ${nama2}`;
document.getElementById("coba3").innerHTML = percakapan;

let angka1 = 10;
let angka2 = 0.25;
let total = `Total: ${(angka1 * (1 + angka2)).toFixed(2)}`;
document.getElementById("coba4").innerHTML = total;

let header = "Programmer Bidang IV";
let tags = ["Aji", "Alfi", "Arif", "Sarman"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
	html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("coba5").innerHTML = html;

//``tidak support di windows explorer
//integer akurat hingga 15 digit, jumlah maksimal desimal 17

/*let x = "2";
let y = "4";
let z = x - y;*/
//document.getElementById("coba6").innerHTML = z;
//operasi hitung string tidak berjalan sempurna pada +
//document.getElementById("coba6").innerHTML = isNaN(x);
//angka yang dibagi 0 akan infinity
/*let myNumber = 2; 
let txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("demo").innerHTML = txt;*/

/*let num = 0xFF;
document.getElementById("coba6").innerHTML = num;*/

/*let myNumber = 16;
document.getElementById("coba6").innerHTML =
"16 = " + "<br>" + 
" Decimal " + myNumber.toString(10) + "<br>" +
" Hexadecimal " + myNumber.toString(16) + "<br>" +
" Octal " + myNumber.toString(8) + "<br>" +
" Binary " + myNumber.toString(2);*/

let x = new Date("2021-01-01");
/*document.getElementById("coba6").innerHTML =
x.toString() + "<br>" +
(123).toString() + "<br>" +
(100 + 23).toString();*/ //toString = konversi angka ke string, valueOf = return angka sebagai angka
//document.getElementById("coba6").innerHTML = x.toExponential(3); //returns a string, with a number rounded and written using exponential notation.
//document.getElementById("coba6").innerHTML = x.toFixed(1); //membulatkan bilangan desimal
//document.getElementById("coba6").innerHTML = x.toPrecision(2); //returns a string, with a number written with a specified length
document.getElementById("coba6").innerHTML = 
Number(true) + "<br>" +
Number(false) + "<br>" +
Number("10") + "<br>" + 
Number("  10") + "<br>" +
Number("10  ") + "<br>" +
Number(" 10  ") + "<br>" +
Number("10.33") + "<br>" + 
Number("10,33") + "<br>" +
Number("10 33") + "<br>" +
Number("John") + "<br>" +
Number(x) + "<br>" +
parseInt("-10") + "<br>" +
parseInt("-10.33") + "<br>" +
parseInt("10") + "<br>" +
parseInt("10.33") + "<br>" +
parseInt("10 6") + "<br>" +  
parseInt("10 years") + "<br>" +  
parseInt("years 10") + "<br>" +
parseFloat("10") + "<br>" +
parseFloat("10.33") + "<br>" +
parseFloat("10 6") + "<br>" +  
parseFloat("10 years") + "<br>" +
parseFloat("years 10"); //konversi variabel ke angka

//let x = Number.MAX_VALUE; menentukan angka tertinggi di JS
//let x = Number.MIN_VALUE; menentukan angka tertinggi di JS
//let x = Number.POSITIVE_INFINITY;
//let x = Number.NEGATIVE_INFINITY;
//let x = Number.NaN;