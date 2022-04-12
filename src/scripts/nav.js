const navbarHamburger = document.getElementById("navbar-hamburger");
const navbar = document.getElementById("navbar");

navbarHamburger.addEventListener("click", () => {
  navbarHamburger.classList.toggle("active");
  navbar.classList.toggle("active");

  // Update the expanded state of the navbar
  const ariaExpanded = navbarHamburger.getAttribute("aria-expanded");
  navbarHamburger.setAttribute(
    "aria-expanded",
    ariaExpanded === "true" ? "false" : "true"
  );
});
