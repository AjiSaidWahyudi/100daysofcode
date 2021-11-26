const cars = ["Toyota", "Honda", "Nissan", "Subaru"];
//document.getElementById("coba1").innerHTML = cars.toString(); //toString() = mengubah array ke string
//document.getElementById("coba1").innerHTML = cars.join(" * "); //join = menambah tanda pemisah

/*menghapus data terakhir
cars.pop();
document.getElementById("coba1").innerHTML = cars;*/

//document.getElementById("coba1").innerHTML = cars.pop(); //hanya memunculkan data terakhir
//document.getElementById("coba2").innerHTML = cars; //selebihnya di baris selanjutnya

/*menambah data baru di array terakhir
cars.push("Suzuki");
document.getElementById("coba1").innerHTML = cars;*/

//document.getElementById("coba1").innerHTML = cars.push("Suzuki"); //length array
//document.getElementById("coba2").innerHTML = cars; //tampilannya

/*menghapus data pertama
cars.shift();
document.getElementById("coba1").innerHTML = cars;*/

//document.getElementById("coba1").innerHTML = cars.shift(); //hanya memunculkan data pertama
//document.getElementById("coba2").innerHTML = cars; //selebihnya di baris selanjutnya

/*menambah data baru di array pertama
cars.unshift("Suzuki");
document.getElementById("coba1").innerHTML = cars;*/

//document.getElementById("coba1").innerHTML = cars.unshift("Suzuki"); //length array
//document.getElementById("coba2").innerHTML = cars; //tampilannya

//cars[0] = "Suzuki"; mengganti elemen (cara 1)
//cars[cars.length] = "Suzuki"; sama dengan nambah sebenernya ini
// menggunakan delete fruits[0] mengakibatkan celah di dalam array, sebaiknya gunakan pop/shift
//cars.splice(2,1,"Audi","BMW"); //splice = menambah/mengurangi elemen (posisi, elemen yang dikurangi, array)
//contoh di atas, Nissan yang terhapus
//cars.splice(1,1); Honda yang terhapus
document.getElementById("coba1").innerHTML = cars;

/* contoh 1 for
let cLen = cars.length;
let text = "<ul>";
for (let i = 0; i < cLen; i++) {
	text += "<li>" + cars[i] + "</li>";
}
text += "</ul>";
document.getElementById("coba1").innerHTML = text;*/

//contoh 2 foreach
/*let text = "<ul>";
cars.forEach(myFunction);
text += "</ul>";
document.getElementById("coba1").innerHTML = text;
function myFunction(value){
	text += "<li>" + value + "</li>";
}*/

//menambah array
/*function myFunction(){
	//cars.push("Daihatsu"); //alternatif 1
	cars[cars.length] = "Daihatsu"; //alternatif 2
	document.getElementById("coba1").innerHTML = cars;
}*/
//menambah array dengan jumlah yang lebih besar dari jumlah arraynya akan undefined, contoh fruits[4] = "Lemon";, sementara arraynya cuma 3 (0-2)

//cars[0] = "Daihatsu"; //mengganti salah satu data dengan data yang baru
//document.getElementById("coba1").innerHTML = cars; //cars[1] digunakan jika ingin hanya mengambil satu data
//document.getElementById("coba1").innerHTML = cars.length; //length = menghitung jumlah array
//document.getElementById("coba1").innerHTML = cars[cars.length-1]; //mengambil array terakhir

//Associative Arrays (tidak support)
/*const cars = [];
cars[0] = "Toyota";
cars[1] = "Honda";
cars[2] = "Nissan";
document.getElementById("coba1").innerHTML = cars[0] + " " + cars.length;*/

/*const cars = new Array("Toyota", "Honda", "Nissan");
document.getElementById("coba1").innerHTML = cars;*/

/*const biodata = {namadepan: "Aji Said", namabelakang: "Wahyudi Hidayat"};
document.getElementById("coba2").innerHTML = biodata.namabelakang;*/

/*alternatif penulisan array
const points = new Array(); new Array tidak bisa digunakan untuk satu elemen saja
const points = [];*/
//Array.isArray(fruits); atau fruits instanceof Array; mengetahui apakah itu array atau bukan

/*JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.*/

//const programmer1 = ["Alfi", "Arif", "Novay"];
//const programmer2 = ["Aji", "Sarman"];
//const programmer3 = ["Yasmine", "Aulia"];
//const programmerTotal = programmer1.concat(programmer2, programmer3); //menggabungkan beberapa array
//const programmerTotal = programmer1.concat("Adit"); //menggabungkan array dengan string baru
const bidIv = ["Alfi", "Arif", "Novay", "Aji", "Sarman", "Aulia"];
//const analis = programmer1.slice(2);
const webDev = bidIv.slice(2,5); //The method then selects elements from the start argument, and up to (but not including) the end argument
//document.getElementById("coba3").innerHTML = programmerTotal;
//document.getElementById("coba3").innerHTML = analis;
document.getElementById("coba3").innerHTML = webDev;
