const slides = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides li");
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideWidth = 1060;
const slideMargin = 12;

slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * 1060 + "px";
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});

//------------------------

// var index = 0;
// window.onload = function () {
//   slideShow();
// };

// function slideShow() {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   index++;
//   if (index > x.length) {
//     index = 1;
//   }
//   x[index - 1].style.display = "block";
//   setTimeout(slideShow, 3000);
// }
