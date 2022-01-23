$(document).ready(function() {
	$("button").on("click",function() {
		//$("p").hide(); elemen
		//$("#paragraf").hide(); id
		//$(".paragraf").hide(); class
		//$("*").hide(); memilih semua elemen
		//$(this).hide(); memilih elemen yang dipilih
		//$("p.paragraf").hide(); memilih elemen ber kelas tertentu
		//$("p:first").hide(); memilih elemen p pertama
		//$("ul li:first").hide(); memilih li pertama di ul pertama
		//$("ul li:first-child").hide(); memilih li pertama di setiap ul
		//$("[href]").hide(); memilih dari atribut hide
		//$("a[target='_blank']").hide(); memilih a yang targetnya _blank
		//$("a[target!='_blank']").hide(); memilih a yang targetnya bukan _blank
		//$(":button").hide(); memilih elemen button, dan elemen input yang bertype button
	});
	$("p").on({
		mouseenter: function () {
			$(this).css("background-color", "orange");
		},
		mouseleave: function () {
			$(this).css("background-color", "lightblue");
		},
		click: function () {
			$(this).css("background-color", "purple");
		}
	});
	//$("tr:even").css("background-color", "yellow"); mengambil elemen tr genap
	$("tr:odd").css("background-color", "yellow"); //mengambil elemen tr ganjil
	$("input").focus(function() {
		$(this).css("background-color", "yellow");
	});
	$("input").blur(function() {
		$(this).css("background-color", "green");
	});
});

/*click (klik sekali)
dblclick (klik dua kali)
mouseenter (jika mouse masuk elemen, maka function bekerja)
mouseleave (jika mouse masuk elemen kemudian keluar, maka function bekerja)
mousedown (The function is executed, when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element)
mouseup (The function is executed, when the left, middle or right mouse button is released, while the mouse is over the HTML element)
hover (The first function is executed when the mouse enters the HTML element, and the second function is executed when the mouse leaves the HTML element)
focus (The function is executed when the form field gets focus)
blur (The function is executed when the form field loses focus)
on (attaches one or more event handlers for the selected elements)
*/