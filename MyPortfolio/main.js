// main.js
w3.includeHTML(function () {
  // 1️⃣ Dark/Light Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const navbar = document.getElementById("navbar");

  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "🌙";
      navbar?.classList.remove("navbar-light");
      navbar?.classList.add("navbar-dark");
      themeToggle.classList.remove("btn-outline-dark");
      themeToggle.classList.add("btn-outline-light");
    } else {
      themeToggle.textContent = "☀️";
      navbar?.classList.remove("navbar-dark");
      navbar?.classList.add("navbar-light");
      themeToggle.classList.remove("btn-outline-light");
      themeToggle.classList.add("btn-outline-dark");
    }
  });

  // 2️⃣ Collapse mobile navbar after clicking a link
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
