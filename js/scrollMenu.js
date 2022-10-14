const scroll = document.querySelector(".scroll");
const scrollCount = scroll.scrollWidth;
const scrollLength = scrollCount/16;
const scrollPrev = document.querySelector(".scroll-button-left");
const scrollNext = document.querySelector(".scroll-button-right");
let currentLength = 0;

scrollPrev.style.display = 'none';
scrollPrev.style.background = 'none';

//다음 버튼 
scrollNext.addEventListener("click", function () {
  scrollPrev.style.display = 'block';
  scrollPrev.style.background = 'linear-gradient(90deg,#fff 50%,hsla(0,0%,100%,0))';
  currentLength += 10
  if (currentLength <= scrollLength && (scrollLength - currentLength) > 63) {
    scroll.style.left = - currentLength + "rem";
    scroll.style.transition = `${0.5}s ease-out`;
  } else if (currentLength <= scrollLength && (scrollLength - currentLength) <= 63) {
    currentLength = (scrollLength - 63);
    scroll.style.left = - currentLength + "rem";
    scroll.style.transition = `${0.5}s ease-out`;
    scrollNext.style.background = 'none';
    scrollNext.style.display = 'none';
  }
});

//이전 버튼
scrollPrev.addEventListener("click", function () {
  if (currentLength >= 10) {
    currentLength -= 10
    scrollNext.style.background = 'linear-gradient(270deg,#fff 50%,hsla(0,0%,100%,0))';
    scrollNext.style.display = 'block';
    scroll.style.left =  - currentLength + "rem";
    scroll.style.transition = `${0.5}s ease-out`;
  } else {
    currentLength = 0;
    scrollPrev.style.display = 'none';
    scrollPrev.disabled = true;
    scroll.style.left = currentLength;
  }
});
