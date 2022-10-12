const slides = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides li");
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideWidth = 1060;
const slideMargin = 24;

slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + "px";
slides.style.left = 200 - (slideWidth + slideMargin) + "px";
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
next.addEventListener("click", function () {
  if (currentIdx <= slideCount - 1) {
    slides.style.left = 298 - (currentIdx + 2) * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${0.5}s ease-out`;
  }
  //마지막 이미지일 때
  if (currentIdx === slideCount - 1) {
    setTimeout(function () {
      slides.style.left = 298 - (slideWidth + slideMargin) + "px";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
});

//이전 버튼
prev.addEventListener("click", function () {
  console.log(currentIdx);
  if (currentIdx >= 0) {
    slides.style.left = 298 - currentIdx * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${0.5}s ease-out`;
  }
  //마지막 이미지일 때
  if (currentIdx === 0) {
    setTimeout(function () {
      slides.style.left = 298 - slideCount * (slideWidth + slideMargin) + "px";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
});

//5초마다 자동으로 다음 이미지
function slideShow() {
  if (currentIdx <= slideCount - 1) {
    slides.style.left = 298 - (currentIdx + 2) * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${0.5}s ease-out`;
  }
  //마지막 이미지일 때
  if (currentIdx === slideCount - 1) {
    setTimeout(function () {
      slides.style.left = 298 - (slideWidth + slideMargin) + "px";
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }

  currentIdx++;
  setTimeout(slideShow, 5000);
}
