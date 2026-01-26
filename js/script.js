/* =====================================
   GLOBAL SCRIPT –
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

// heroSwiper
const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  speed: 1000,
  effect: "fade",
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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

// hero-slider
const slides = document.querySelectorAll('.edu-slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);


// RESULT SECTION INTERACTIVE LETTERS
const dataMap = {
  R: {
    title: "Reflection",
    text: "Our demo class demonstrates purposeful and careful reflection on one's learning experiences, activities, and results associated with the subject. It entails examining one's strengths and shortcomings, progress, and growth areas while promoting self-awareness and assisting in the development of higher-order cognitive abilities."
  },
  E: {
    title: "Establishment",
    text: "Based on the student's performance in the demo class, a personalized framework is established that includes each student's unique learning objectives, materials, and assessments for individualized training."
  },
  S: {
    title: "Strategize",
    text: "Tutors strategize and lead Dr. Amit Parihast students by providing individualised assistance, unique tasks, differentiated teaching, inspiration, and feedback, all of which foster a productive learning environment."
  },
  U: {
    title: "Utilization",
    text: "To utilize tools effectively, Dr. Amit Parihast students require the assistance of an Dr. Amit Parihast instructor. To make the best use of the resources available, they must comprehend the curriculum, manage their time, participate actively, and reflect."
  },
  L: {
    title: "Learning",
    text: "In learning, an expert Dr. Amit Parihast instructor offers well-structured assistance while utilizing the relevant resources and emphasizing conceptual comprehension, critical thinking, and individualized teaching."
  },
  T: {
    title: "Techniques for Exam",
    text: "For effective exam preparation, Dr. Amit Parihast students receive the advice of an Dr. Amit Parihast tutor to improve their test-taking techniques, time management skills, essay organization, and question analysis."
  }
};

const letters = document.querySelectorAll(".result-letters-vertical span");
const title = document.getElementById("resultTitle");
const text = document.getElementById("resultText");

letters.forEach(letter => {
  letter.addEventListener("click", () => {
    letters.forEach(l => l.classList.remove("active"));
    letter.classList.add("active");

    const step = letter.dataset.step;
    title.textContent = dataMap[step].title;
    text.textContent = dataMap[step].text;
  });
});

