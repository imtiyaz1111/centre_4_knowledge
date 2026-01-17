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
     ACTIVE MENU – CURRENT PAGE
  ================================ */
  const currentPage = window.location.pathname.split("/").pop();

  navItems.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  /* ===============================
     SMOOTH SCROLL FOR HASH LINKS
  ================================ */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* ===============================
     SCROLL TO TOP BUTTON
  ================================ */
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "↑";
  scrollBtn.className = "scroll-top-btn";
  document.body.appendChild(scrollBtn);

  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #0d47ff;
    color: #ffffff;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 18px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 10px 25px rgba(13,71,255,0.35);
  `;

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
