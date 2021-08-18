// Navigation bar -- toggle button
const navToggleBtn = document.getElementsByClassName("main-nav__btn")[0];
const navLinks = document.getElementsByClassName("main-nav__items-container")[0];

navToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// Search bar
function searchFilter() {
  var input, filterValue, ul, li, a, i;
  input = document.getElementById("search__field");
  filterValue = input.value.toUpperCase();
  ul = document.getElementById("search__menu");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};