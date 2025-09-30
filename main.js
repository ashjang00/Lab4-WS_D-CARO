//University Course Catalog:
//Each course has a code, title, credit, and department. 
//Write functions to: 
//-Calculate the total number of credits. 
//-Filter by courses by department. 
//-Find course with the highest credits. 
//-Group courses by credit range. 
//-Simulate fetching new courses asynchronously.

let courses = [
  {code: "CS101", title: "Intro to Computer Science", credits: 3, department: "Computer Science"},
  {code: "MATH201", title: "Linear Algebra", credits: 4, department: "Mathematics"},
  {code: "PHYS150", title: "General Physics I", credits: 3, department: "Physics"},
  {code: "ENG101", title: "English Composition", credits: 2, department: "English"},
  {code: "CS202", title: "Data Structures", credits: 4, department: "Computer Science"}
];

//list
function createCatalog(list = courses) {
    courses.text = "";
}

//Total Credits
function showTotal() {
  const total = courses.reduce((sum, c) => sum + c.credits, 0);
  document.getElementById("output").innerText = "Total Credits: " + total;
}

//By Department
function filterByDepartment() {
  const dept = document.getElementById("deptSelect").value;
  const filtered = dept ? courses.filter(c => c.department === dept) : courses;
  createCatalog(filtered);
  document.getElementById("output").innerText = dept 
    ? `Filtered by ${dept}` 
    : "Showing all courses";
}

//Highest Credits
function findHighestCredit() {
  const maxCourse = courses.reduce((max, c) => c.credits > max.credits ? c : max, courses[0]);
  document.getElementById("output").innerText = 
    `Highest Credit Course: ${maxCourse.code} (${maxCourse.credits} credits)`;
}

//Group Credits
function groupByCredits() {
  const groups = { "1-2 credits": [], "3-4 credits": [], "5+ credits": [] };
  courses.forEach(c => {
    if (c.credits <= 2) groups["1-2 credits"].push(c);
    else if (c.credits <= 4) groups["3-4 credits"].push(c);
    else groups["5+ credits"].push(c);
  });
  let output = "";
  for (const range in groups) {
    output += `${range}: ${groups[range].map(c => c.code).join(", ") || "None"}\n`;
  }
  document.getElementById("output").innerText = output;
}

//New Courses
function fetchNewCourses() {
  document.getElementById("output").innerText = "Fetching new courses...";
  setTimeout(() => {
    const newCourses = [
      { code: "HIST210", title: "World History", credits: 3, department: "History" },
      { code: "BIO110", title: "Intro to Biology", credits: 4, department: "Biology" }
    ];
    courses = [...courses, ...newCourses];
    createCatalog();
    document.getElementById("output").innerText = "New courses added!";
  }, 2000);
}

//Call Out
createCatalog();
