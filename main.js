let courses = [
  { code: "CS101", title: "Intro to Computer Science", credits: 3, department: "Computer Science" },
  { code: "MATH201", title: "Linear Algebra", credits: 4, department: "Mathematics" },
  { code: "PHYS150", title: "General Physics I", credits: 3, department: "Physics" },
  { code: "ENG101", title: "English Composition", credits: 2, department: "English" },
  { code: "CS202", title: "Data Structures", credits: 4, department: "Computer Science" }
];
function renderCatalog(list = courses) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";
  list.forEach(c => {
    catalog.innerHTML += `
      <div class="course">
        <h3>${c.code}: ${c.title}</h3>
        <p><b>Credits:</b> ${c.credits}</p>
        <p><b>Department:</b> ${c.department}</p>
      </div>
    `;
  });
}
