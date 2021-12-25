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

var options = {
  autoPlay: true,
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px';
  });
});