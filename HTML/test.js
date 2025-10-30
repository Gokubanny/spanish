const slideTrack = document.querySelector(".slide-track");

let position = 0;
const slideWidth = 250; // width of each .slide
const totalSlides = 10; // number of unique slides
const totalWidth = slideWidth * totalSlides;

function autoScroll() {
  position -= 1; // move left by 1px
  if (Math.abs(position) >= totalWidth) {
    // reset to 0 when one full loop is done
    position = 0;
  }
  slideTrack.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(autoScroll);
}

autoScroll();
