// JavaScript for Vertical Slider

var toTop = 0;
function autoPlay() {
  timer = setTimeout(function () {
    var testimonialSlider = document.getElementById("testimonial-slider");
    toTop = toTop - 350;
    if (toTop < -800) {
      toTop = 0;
      clearTimeout(timer);
      testimonialSlider.onmouseover = clearTimeout(timer);
    }
    testimonialSlider.style.top = toTop + "px";
    autoPlay();
  }, 2000);
}
autoPlay();