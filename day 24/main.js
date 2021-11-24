const car = {
	type: "Honda",
	model:"Brio",
	color:"biru",
	kalimat: function () {
		return this.type + " " + this.model + " berwarna " + this.color
	}
}
document.getElementById("coba").innerHTML = car.kalimat();
/*bisa gunakan juga variabel["properti"]*/

function cobaDate(){
	document.getElementById("coba2").innerHTML = Date();
}

/*let text = "abcdefghijklmnopqrstuvwxyz";
document.getElementById("coba2").innerHTML = text.length;*/

let text = "Kami adalah \"Kumpulan\" Personil"; /*penggunaan\"*/
/*let text = "Kami adalah \'Kumpulan\' Personil";*/ /*penggunaan\'*/
/*let text = "Kami adalah \\ Personil";*/ /*penggunaan\\"*/
document.getElementById("coba3").innerHTML = text;

/*contoh menyambung script ke bawah dengan backslash
document.getElementById("demo").innerHTML = "Hello \
Dolly!";*/

/*contoh menyambung script ke bawah dengan +
document.getElementById("demo").innerHTML = "Hello +
Dolly!";*/

/*let y = new String("John"); adalah object*/

let str = "Aji, Alfi, Arif"
document.getElementById("coba4").innerHTML = str.slice(5,9); memotong string dari posisi x ke y
//document.getElementById("coba4").innerHTML = str.slice(-10,-6); jika angkanya negatif, dia menghitung dari akhir string
//document.getElementById("coba4").innerHTML = str.slice(5); memotong string dari awal saja
//substring() & substr() sama saja dengan slice(), hanya saja substring() tidak dapat memotong dari akhir string