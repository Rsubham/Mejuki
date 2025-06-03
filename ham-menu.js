const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleBtn.classList.toggle("open");
  document.body.classList.toggle("nav-open");
});

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    toggleBtn.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

document.addEventListener("click", (e) => {
  const isClickInsideNav = navLinks.contains(e.target);
  const isClickOnToggle = toggleBtn.contains(e.target);

  if (
    !isClickInsideNav &&
    !isClickOnToggle &&
    navLinks.classList.contains("active")
  ) {
    navLinks.classList.remove("active");
    toggleBtn.classList.remove("open");
    document.body.classList.remove("nav-open");
  }
});
