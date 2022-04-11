const navbarHamburger = document.getElementById("navbar-hamburger");
const navbar = document.getElementById("navbar");

console.log(navbarHamburger);

navbarHamburger.addEventListener("click", () => {
  console.log("hello");
  navbarHamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});
