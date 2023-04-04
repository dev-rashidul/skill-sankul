// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
  const header = document.getElementById("Header");
  header.classList.toggle("sticky", window.scrollY > 10)

})

// Dropdown Menu JavaScript
const dropdownIcon = document.getElementById("dropdown-icon")
const dropdown = document.querySelector(".dropdown")

dropdownIcon.addEventListener("click", function(){
  dropdown.classList.toggle('active')
})

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
