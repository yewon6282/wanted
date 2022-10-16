const scroll = document.querySelector(".scroll");
const scrollCount = scroll.scrollWidth;
const scrollLength = scrollCount/16;
const scrollPrev = document.querySelector(".scroll-button-left");
const scrollNext = document.querySelector(".scroll-button-right");
let currentLength = 0;

scrollPrev.style.display = 'none';

//다음 버튼 
scrollNext.addEventListener("click", function () {
  currentLength += 10
  scrollPrev.style.display = 'block';
  if ((scrollLength - currentLength) > 63) {
    scroll.style.left = - currentLength + "rem";
    scroll.style.transition = `${0.5}s ease-out`;
  } else if ((scrollLength - currentLength) <= 63) {
    currentLength = (scrollLength - 63);
    scroll.style.left = - currentLength + "rem";
    scroll.style.transition = `${0.5}s ease-out`;
    scrollNext.style.display = 'none';
  }
});

//이전 버튼
scrollPrev.addEventListener("click", function () {
  scrollNext.style.display = 'block';
  if (currentLength > 10) {
    currentLength -= 10
    scroll.style.left =  - currentLength + "rem";
    scroll.style.transition = `${0.5}s ease-out`;
  } else {
    currentLength = 0;
    scrollPrev.style.display = 'none';
    scroll.style.left = currentLength;
  }
});
