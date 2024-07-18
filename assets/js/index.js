const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(100%)";
  document.body.style.overflow = "scroll";
});
