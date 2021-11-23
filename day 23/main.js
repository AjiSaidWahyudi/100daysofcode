let x = 5
let y = 2
/*let z = x + y; penjumlahan*/
/*let z = x - y; pengurangan*/
/*let z = x * y; perkalian*/
/*let z = x / y; pembagian*/
/*let z = x % y; sisa pembagian*/
/*x++; tambah satu*/
/*x--; kurang satu*/
/*let z = x ** 2; pangkat*/
/*let z = Math.pow(x,2); sama dengan x ** y*/
/*let z = (5 + 2) * 3; perhitungan campuran*/
/*let z = x >> y;*/
/*let z = 123e5; menambah sejumlah nol*/
/*let z = 123e-5; jadi desimal*/
let z = x == y; //jika angka sama, maka bernilai true
document.getElementById("coba").innerHTML = z;
/*var z = 10;
z += 5; += sama dengan penjumlahan*/
/*let x = "Aji Said";
let y = "Wahyudi Hidayat"
let z = x + " " + y; bisa menjumlahkan string*/
/*let z = "Aji Said "
z += "Wahyudi Hidayat"*/
/*let x = 5 + 5;
let y = "5" + 5; menghitung angka & string menghasilkan string
let z = "Aji" + 5;*/
/*document.getElementById("coba").innerHTML = x + "<br>" + y + "<br>" + z;*/

const programmer = ["Aji", "Alfi", "Sarman"];
document.getElementById("coba2").innerHTML = programmer[1];

const nama = {
	firstname: "Aji Said",
	lastname: "Wahyudi Hidayat",
}
document.getElementById("coba3").innerHTML = nama.firstname + " " + nama.lastname;

/*document.getElementById("coba3").innerHTML = 
typeof "" + "<br>" +
typeof "John" + "<br>" + 
typeof "John Doe";*/

/*document.getElementById("coba3").innerHTML = 
typeof 0 + "<br>" + 
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);*/

var jumlah = myFunction(4, 3);
document.getElementById("coba4").innerHTML = jumlah;

function myFunction(b1, b2) {
  return b1 * b2;
}

/*function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("coba4").innerHTML = toCelsius(77);*/

/* operasi hitung JS
+	tambah
-	kurang
*	kali
**	pangkat
/	bagi
%	sisa bagi
++	tambah satu
--	kurang satu
< kurang dari
<= kurang dari sama dengan
> lebih dari
>= lebih dari sama dengan
== sama dengan
=== sama dengan (strict)
!= tidak sama dengan
& dan
|/^ atau
<< ??
>> ??
*/