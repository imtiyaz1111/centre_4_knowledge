/* =====================================================
   COURSE DETAIL SCRIPT (City-wise SEO Pages)
   URL formats supported:
   /courses/course-slug/
   /courses/course-slug/delhi.html
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  if (typeof COURSES_DATA === "undefined") {
    console.error("COURSES_DATA not found.");
    return;
  }

  /* ===============================
     GET URL INFO
  ================================ */
  const path = window.location.pathname.split("/").filter(Boolean);

  // Example:
  // ["courses", "online-accounts-classes", "delhi.html"]
  const courseSlug = path[1] || null;
  let citySlug = null;

  if (path.length === 3 && path[2].includes(".html")) {
    citySlug = path[2].replace(".html", "");
  }

  /* ===============================
     FIND COURSE
  ================================ */
  const course = COURSES_DATA.find(c => c.base_slug === courseSlug);

  if (!course) {
    console.error("Course not found.");
    return;
  }

  /* ===============================
     PAGE ELEMENTS
     (Must exist in HTML)
  ================================ */
  const titleEl = document.getElementById("courseTitle");
  const descEl = document.getElementById("courseDescription");
  const cityListEl = document.getElementById("cityList");
  const breadcrumbEl = document.getElementById("breadcrumb");

  /* ===============================
     CITY NAME FORMATTER
  ================================ */
  const formatCity = slug =>
    slug
      .replace("-", " ")
      .replace(/\b\w/g, l => l.toUpperCase());

  const cityName = citySlug ? formatCity(citySlug) : "India";

  /* ===============================
     SET MAIN CONTENT
  ================================ */
  if (titleEl) {
    titleEl.textContent = citySlug
      ? `${course.title} in ${cityName}`
      : course.title;
  }

  if (descEl) {
    descEl.innerHTML = `
      <p>
        Looking for <strong>${course.title.toLowerCase()}</strong>
        ${citySlug ? `in <strong>${cityName}</strong>` : "in India"}?
        Centre 4 Knowledge offers expert-led online classes with
        structured study material, live sessions, and exam-focused teaching.
      </p>

      <p>
        Our ${course.title.toLowerCase()} program is ideal for students
        seeking conceptual clarity, regular assessments, and personal mentorship.
      </p>
    `;
  }

  /* ===============================
     BREADCRUMB
  ================================ */
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `
      <a href="/">Home</a> /
      <a href="/course.html">Courses</a> /
      <a href="/courses/${course.base_slug}/">${course.title}</a>
      ${citySlug ? `/ ${cityName}` : ""}
    `;
  }

  /* ===============================
     CITY LIST
  ================================ */
  if (cityListEl && course.cities.length) {
    let cityHtml = "";

    course.cities.forEach(city => {
      cityHtml += `
        <li>
          <a href="/courses/${course.base_slug}/${city}.html">
            ${formatCity(city)}
          </a>
        </li>
      `;
    });

    cityListEl.innerHTML = cityHtml;
  }

  /* ===============================
     OPTIONAL: META TAGS (SEO BOOST)
  ================================ */
  document.title = citySlug
    ? `${course.title} in ${cityName} | Centre 4 Knowledge`
    : `${course.title} | Centre 4 Knowledge`;

});
