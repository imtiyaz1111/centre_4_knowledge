const city_wise_course = [
  {
    id: "Gurgaon",
    slug: "courses-list-gurgaon",
    title: "Courses in Gurgaon",
    courses: [
      {
        title: "Accounts Home Tuition in Gurgaon",
        slug: "accounts-home-tuition-in-gurgaon",
      },
      {
        title: "Commerce Coaching Classes in Gurgaon",
        slug: "commerce-coaching-classes-in-gurgaon",
      },
      {
        title: "11th Commerce Classes in Gurgaon",
        slug: "11th-commerce-classes-in-gurgaon",
      },
      {
        title: "12th Commerce Coaching Classes in Gurgaon",
        slug: "12th-commerce-coaching-classes-in-gurgaon",
      },
      {
        title: "Accounts Tuition in Gurgaon",
        slug: "accounts-tuition-in-gurgaon",
      },
    ],
  },

  {
    id: "Delhi",
    slug: "courses-list-delhi",
    title: "Courses in Delhi",
    courses: [
      {
        title: "Accounts Home Tuition in Delhi",
        slug: "accounts-home-tuition-in-delhi",
      },
      {
        title: "Commerce Coaching Classes in Delhi",
        slug: "commerce-coaching-classes-in-delhi",
      },
      {
        title: "11th Commerce Classes in Delhi",
        slug: "11th-commerce-classes-in-delhi",
      },
      {
        title: "12th Commerce Coaching Classes in Delhi",
        slug: "12th-commerce-coaching-classes-in-delhi",
      },
      {
        title: "Accounts Tuition in Delhi",
        slug: "accounts-tuition-in-delhi",
      },
    ],
  },

  {
    id: "Mumbai",
    slug: "courses-list-mumbai",
    title: "Courses in Mumbai",
    courses: [
      {
        title: "Accounts Home Tuition in Mumbai",
        slug: "accounts-home-tuition-in-mumbai",
      },
      {
        title: "Commerce Coaching Classes in Mumbai",
        slug: "commerce-coaching-classes-in-mumbai",
      },
      {
        title: "11th Commerce Classes in Mumbai",
        slug: "11th-commerce-classes-in-mumbai",
      },
      {
        title: "12th Commerce Coaching Classes in Mumbai",
        slug: "12th-commerce-coaching-classes-in-mumbai",
      },
      {
        title: "Accounts Tuition in Mumbai",
        slug: "accounts-tuition-in-mumbai",
      },
    ],
  },

  {
    id: "Bangalore",
    slug: "courses-list-bangalore",
    title: "Courses in Bangalore",
    courses: [
      {
        title: "Accounts Home Tuition in Bangalore",
        slug: "accounts-home-tuition-in-bangalore",
      },
      {
        title: "Commerce Coaching Classes in Bangalore",
        slug: "commerce-coaching-classes-in-bangalore",
      },
      {
        title: "11th Commerce Classes in Bangalore",
        slug: "11th-commerce-classes-in-bangalore",
      },
      {
        title: "12th Commerce Coaching Classes in Bangalore",
        slug: "12th-commerce-coaching-classes-in-bangalore",
      },
      {
        title: "Accounts Tuition in Bangalore",
        slug: "accounts-tuition-in-bangalore",
      },
    ],
  },

  {
    id: "Noida",
    slug: "courses-list-noida",
    title: "Courses in Noida",
    courses: [
      {
        title: "Accounts Home Tuition in Noida",
        slug: "accounts-home-tuition-in-noida",
      },
      {
        title: "Commerce Coaching Classes in Noida",
        slug: "commerce-coaching-classes-in-noida",
      },
      {
        title: "11th Commerce Classes in Noida",
        slug: "11th-commerce-classes-in-noida",
      },
      {
        title: "12th Commerce Coaching Classes in Noida",
        slug: "12th-commerce-coaching-classes-in-noida",
      },
      {
        title: "Accounts Tuition in Noida",
        slug: "accounts-tuition-in-noida",
      },
    ],
  },

  {
    id: "Pune",
    slug: "courses-list-pune",
    title: "Courses in Pune",
    courses: [
      {
        title: "Accounts Home Tuition in Pune",
        slug: "accounts-home-tuition-in-pune",
      },
      {
        title: "Commerce Coaching Classes in Pune",
        slug: "commerce-coaching-classes-in-pune",
      },
      {
        title: "11th Commerce Classes in Pune",
        slug: "11th-commerce-classes-in-pune",
      },
      {
        title: "12th Commerce Coaching Classes in Pune",
        slug: "12th-commerce-coaching-classes-in-pune",
      },
      {
        title: "Accounts Tuition in Pune",
        slug: "accounts-tuition-in-pune",
      },
    ],
  },

  {
    id: "Ghaziabad",
    slug: "courses-list-ghaziabad",
    title: "Courses in Ghaziabad",
    courses: [
      {
        title: "Accounts Home Tuition in Ghaziabad",
        slug: "accounts-home-tuition-in-ghaziabad",
      },
      {
        title: "Commerce Coaching Classes in Ghaziabad",
        slug: "commerce-coaching-classes-in-ghaziabad",
      },
      {
        title: "11th Commerce Classes in Ghaziabad",
        slug: "11th-commerce-classes-in-ghaziabad",
      },
      {
        title: "12th Commerce Coaching Classes in Ghaziabad",
        slug: "12th-commerce-coaching-classes-in-ghaziabad",
      },
      {
        title: "Accounts Tuition in Ghaziabad",
        slug: "accounts-tuition-in-ghaziabad",
      },
    ],
  },

  {
    id: "Faridabad",
    slug: "courses-list-faridabad",
    title: "Courses in Faridabad",
    courses: [
      {
        title: "Accounts Home Tuition in Faridabad",
        slug: "accounts-home-tuition-in-faridabad",
      },
      {
        title: "Commerce Coaching Classes in Faridabad",
        slug: "commerce-coaching-classes-in-faridabad",
      },
      {
        title: "11th Commerce Classes in Faridabad",
        slug: "11th-commerce-classes-in-faridabad",
      },
      {
        title: "12th Commerce Coaching Classes in Faridabad",
        slug: "12th-commerce-coaching-classes-in-faridabad",
      },
      {
        title: "Accounts Tuition in Faridabad",
        slug: "accounts-tuition-in-faridabad",
      },
    ],
  },
];

/* global access */
window.city_wise_course = city_wise_course;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("citiesContainer");
  if (!container || !window.city_wise_course) return;

  container.innerHTML = "";

  city_wise_course.forEach((city) => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6";

    col.innerHTML = `
      <div class="city-card" data-slug="${city.slug}">
        <div class="city-icon">📚</div>
        <h5>${city.id}</h5>
      </div>
    `;

    container.appendChild(col);
  });

  // Redirect on click
  document.querySelectorAll(".city-card").forEach((card) => {
    card.addEventListener("click", () => {
      const slug = card.getAttribute("data-slug");
      window.location.href = `/${slug}.html`;
    });
  });
});
