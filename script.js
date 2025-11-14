// ----------------------
// MOBILE MENU TOGGLE
// ----------------------
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

// ----------------------
// Smooth scrolling
// ----------------------
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth"
    });

    // Close menu on mobile after clicking a link
    if (window.innerWidth <= 768) {
      navMenu.style.display = "none";
    }
  });
});

// ----------------------
// Contact form handler
// ----------------------
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
  form.reset();
});
