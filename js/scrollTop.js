const section = document.querySelector(".section-scroll");

window.addEventListener("scroll", function () {
  let topLength = document.documentElement.scrollTop;

  if (topLength >= 240) {
    section.style.position = "fixed";
    section.style.borderBottom = "1px solid blue";
    section.style.left = "50%";
    section.style.transform = "translateX(-50%)";
    section.style.width = "100%";
    section.style.zIndex = "5";
  } else {
    section.style.position = "unset";
    section.style.borderBottom = "1px solid #ececec";
    section.style.left = "none";
    section.style.transform = "none";
    section.style.width = "none";
    section.style.zIndex = "none";
  }
})

