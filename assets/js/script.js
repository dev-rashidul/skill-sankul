// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
  const header = document.getElementById("Header");
  header.classList.toggle("sticky", window.scrollY > 10)

})

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

// JavaScript for Contact page event Slider

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    700: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
});