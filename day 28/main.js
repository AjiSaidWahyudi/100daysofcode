const tanggal = new Date(); //tanggal & waktu saat ini, sifatnya statis
//const tanggal = new Date(2021, 10, 28, 19, 0, 0, 0); //susunan: year, month, day, hour, minute, second, and millisecond (untuk bulan, Januari dihitung 0, Desember 11)
//boleh hanya sampai detik, menit, jam, & hari saja, bulan tidak boleh kosong
//jika tahun hanya ditulis dalam satu/dua digit, maka yang keluar adalah tahun 1900an
//const tanggal = new Date("28 November 2021"); //jika ditulis dalam string
//const tanggal = new Date(86400000); //mengubah milisecond ke tanggal
//const tanggal = Date.parse("28 November 2021"); //mengubah tanggal ke milisecond
/*cara 2 tanggal ke milisecond
let d = Date.parse("28 November 2021");
const tanggal = new Date(d);
document.getElementById("coba1").innerHTML = tanggal;*/
tanggal.setSeconds(42);
//tanggal.setDate(tanggal.getDate() + 2); The setDate() method can be used to add days to a date
document.getElementById("coba1").innerHTML = tanggal;
//toString() = menjadikan tanggalan menjadi string
//toUTCString() = menjadikan waktu jadi UTC (atau GMT)
//toDateString() = hanya menampilkan tanggal
//toISOString() = menjadikan tanggalan menjadi format ISO (contoh ISO date = 2015-03-25T12:00:00-06:00)
//contoh short date = 03/25/2015, long date = Nov 28 2021/28 Nov 2021

/*getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6) (0 = Minggu, 6 = Sabtu)
Date.now()	Get the time. ECMAScript 5.
getUTCDate()	Same as getDate(), but returns the UTC date
getUTCDay()	Same as getDay(), but returns the UTC day
getUTCFullYear()	Same as getFullYear(), but returns the UTC year
getUTCHours()	Same as getHours(), but returns the UTC hour
getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
getUTCMonth()	Same as getMonth(), but returns the UTC month
getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds*/

/*setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)*/

/*jika ingin bulan ditampilkan dalam tulisan
const bln = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const tanggal = new Date();
let bulan = bln[tanggal.getMonth()];
document.getElementById("coba1").innerHTML = bulan;*/

/*jika ingin hari ditampilkan dalam tulisan
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const tanggal = new Date();
let hari = day[tanggal.getDay()];
document.getElementById("coba1").innerHTML = hari;*/

/*membandingkan tanggal
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2021, 0, 3);
if (someday > today) {
	text = "Today is before January 4, 2021.";
} else {
	text = "Today is after January 4, 2021.";
}
document.getElementById("coba2").innerHTML = text;*/