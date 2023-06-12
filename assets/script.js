
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImgPath = ["./assets/images/slideshow/"]

let bannerImgElt = document.querySelector(".banner-img")
let bannerTextElt = document.querySelector("#banner p")
let position = 0;

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

let dots = document.querySelectorAll(".dot")


arrowLeft.addEventListener("click", function (event) {
	slide("left")
});

arrowRight.addEventListener("click", function (event) {
	slide("right")
});

function slide(direction) {
	dots[position].classList.remove("dot_selected")
	if ("left" == direction) {
		position = position - 1;
		if (position < 0) {
			position = slides.length - 1;
		}
	}
	if ("right" == direction) {
		position = position + 1;
		if (position >= slides.length) {
			position = 0;
		}
	}

	dots[position].classList.add("dot_selected")
	bannerImgElt.src = bannerImgPath + slides[position].image
	bannerTextElt.innerHTML = slides[position].tagLine;
}