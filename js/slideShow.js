const slides = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides li");
let currentIdx = 0;
const slideCount = slideImg.length;
const SlidePrev = document.querySelector(".slide-prev");
const SlideNext = document.querySelector(".slide-next");
const slideWidth = 66.25;
const slideMargin = 1.5;

slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + "rem";
makeClone();
slideShow();

//처음 이미지, 마지막 이미지 복사
function makeClone() {
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}

//다음 버튼
SlideNext.addEventListener("click", function () {
  if (currentIdx <= slideCount - 1) {
    slides.style.left = 18.62 - (currentIdx + 2) * (slideWidth + slideMargin) + "rem";
    slides.style.transition = `${0.5}s ease-out`;
  }
  //마지막 이미지일 때
  if (currentIdx === slideCount - 1) {
    setTimeout(function () {
      slides.style.left = 18.62 - (slideWidth + slideMargin) + "rem";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
});

//이전 버튼
SlidePrev.addEventListener("click", function () {
  if (currentIdx >= 0) {
    slides.style.left = 18.62 - currentIdx * (slideWidth + slideMargin) + "rem";
    slides.style.transition = `${0.5}s ease-out`;
  }
  //마지막 이미지일 때
  if (currentIdx === 0) {
    setTimeout(function () {
      slides.style.left = 18.62 - slideCount * (slideWidth + slideMargin) + "rem";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
});

//5초마다 자동으로 다음 이미지
function slideShow() {
  if (currentIdx <= slideCount - 1) {
    slides.style.left = 18.62 - (currentIdx + 2) * (slideWidth + slideMargin) + "rem";
    slides.style.transition = `${0.5}s ease-out`;
  }
  //마지막 이미지일 때
  if (currentIdx === slideCount - 1) {
    setTimeout(function () {
      slides.style.left = 18.62 - (slideWidth + slideMargin) + "rem";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }

  currentIdx++;
  setTimeout(slideShow, 3000);
}
