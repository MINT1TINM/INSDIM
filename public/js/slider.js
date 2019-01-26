var slideIndex = 1;

var slider = document.getElementsByClassName("slider");
var toggle = document.getElementsByClassName("slider-toggle");
var slides = document.getElementsByClassName("slider-item");
var trans = document.getElementsByClassName("slider-trans")[0];

showSlide(slideIndex);

slider[0].addEventListener("mouseover", () => {
  for (let index = 0; index < toggle.length; index++) {
    fadeIn(toggle[index]);
  }
});
slider[0].addEventListener("mouseout", () => {
  for (let index = 0; index < toggle.length; index++) {
    fadeOut(toggle[index]);
  }
});

const plusSlide = n => {
  fadeIn(trans);
  setTimeout(() => {
    showSlide((slideIndex += n));
  }, 500);
};

function showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let index = 0; index < slides.length; index++) {
    if (slides[index].style.display != "none") {
      slides[index].style.display = "none";
    }
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => {
    fadeOut(trans);
  }, 500);
}
