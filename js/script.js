/* =====================================
   GLOBAL SCRIPT – Centre 4 Knowledge
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     NAVBAR – HAMBURGER TOGGLE
  ================================ */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links a");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  /* ===============================
     CLOSE MOBILE MENU ON LINK CLICK
  ================================ */
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });

  /* ===============================
     ACTIVE MENU – BULLETPROOF FIX
  ================================ */
  let currentPath = window.location.pathname;

  // If URL ends with "/", assume index.html
  if (currentPath.endsWith("/")) {
    currentPath = "index.html";
  } else {
    currentPath = currentPath.split("/").pop();
  }

  navItems.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const linkPage = href.split("/").pop();

    // Exact match only
    if (linkPage === currentPath) {
      link.classList.add("active");
    }
  });

});


/* ===============================
   SCROLL TO TOP BUTTON
================================ */
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "flex" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
/* ===============================
   CITY SEARCH FILTER
================================ */
const citySearch = document.getElementById("citySearch");
const cityCards = document.querySelectorAll("#cityList li");

if (citySearch) {
  citySearch.addEventListener("keyup", function () {
    const searchValue = this.value.toLowerCase();

    cityCards.forEach(card => {
      const cityName = card.querySelector("h6").innerText.toLowerCase();

      card.style.display = cityName.includes(searchValue)
        ? "block"
        : "none";
    });
  });
}
