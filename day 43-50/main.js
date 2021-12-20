var searchIcon = document.querySelector('.fa-search');
var closeIcon = document.querySelector('.fa-times');
var search = document.getElementById('search');
searchIcon.onclick = () =>{
	search.classList.add('expand');
}
closeIcon.onclick = () =>{
	search.classList.remove('expand');
}
var button = document.querySelector('button');
var menu = document.querySelector('.menu');
button.onclick = () =>{
	menu.classList.toggle('expand-mobile');
	button.classList.toggle('expand-icon');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}