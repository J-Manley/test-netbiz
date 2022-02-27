// Mobile Nav
const nav = document.querySelector(".mobile-nav");
const navItems = document.querySelectorAll(".mobile-nav__item");
const toggle = document.querySelector(".mobile-toggle");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleNav() {
  if (nav.classList.contains("show-nav")) {
    nav.classList.remove("show-nav");
    menuIcon.style.display = "block";
  } else {
    nav.classList.add("show-nav");
    closeIcon.style.display = "block";
    menuIcon.style.backgroundColor = "transparent";
  }
}

toggle.addEventListener("click", toggleNav);
closeIcon.addEventListener("click", toggleNav);

navItems.forEach((navItem) => {
  navItem.addEventListener("click", toggleNav);
});
