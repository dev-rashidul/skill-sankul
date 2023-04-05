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
