// Navigation bar -- toggle button
const navToggleBtn = document.getElementsByClassName("main-nav__btn")[0];
const navLinks = document.getElementsByClassName("main-nav__items-container")[0];

navToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// Automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("product-slideshow__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {slideIndex = 0}
  slides[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(showSlides, 4000);
}