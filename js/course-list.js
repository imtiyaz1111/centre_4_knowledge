document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("courseList");
  const searchInput = document.getElementById("searchInput");

  function renderCourses(data) {
    container.innerHTML = data.map(course => `
      <div class="col-lg-4 col-md-6">
        <div class="course-card h-100">
          <img src="${course.image}" class="course-img" alt="${course.title}">
          <div class="course-card-body">
            <h4 class="course-title">${course.title}</h4>
            <p class="course-desc">${course.short_desc}</p>
            <a href="/courses/${course.base_slug}/" class="btn btn-primary mt-3">
              View Details
            </a>
          </div>
        </div>
      </div>
    `).join("");
  }

  function filterCourses() {
    const query = searchInput.value.toLowerCase();

    const filtered = COURSES_DATA.filter(course =>
      course.title.toLowerCase().includes(query) ||
      course.short_desc.toLowerCase().includes(query)
    );

    renderCourses(filtered);
  }

  searchInput.addEventListener("input", filterCourses);

  renderCourses(COURSES_DATA);
});
