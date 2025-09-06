// Example course array
const courses = [
    { id: 1, title: "Intro to Web Dev", category: "WDD", credits: 3, completed: true },
    { id: 2, title: "JavaScript Fundamentals", category: "WDD", credits: 4, completed: false },
    { id: 3, title: "CSE Basics", category: "CSE", credits: 3, completed: true },
    { id: 4, title: "Database Design", category: "CSE", credits: 4, completed: false }
];

// Elements
const courseContainer = document.getElementById('course-cards');
const totalCreditsEl = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filters button');

// Function to display courses
function displayCourses(courseArray) {
    courseContainer.innerHTML = ''; // Clear previous courses

    courseArray.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.textContent = `${course.title} - ${course.credits} credits`;

        // Style completed courses
        if (course.completed) {
            card.style.backgroundColor = '#d4edda';
            card.style.border = '1px solid #28a745';
            card.textContent += ' ✅ Completed';
        } else {
            card.style.backgroundColor = '#f8d7da';
            card.style.border = '1px solid #dc3545';
        }

        courseContainer.appendChild(card);
    });

    // Total credits for displayed courses
    const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsEl.textContent = `The total credits for listed courses is: ${totalCredits}`;
}

// Initial display of all courses
displayCourses(courses);

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        if (filter === 'all') {
            displayCourses(courses);
        } else {
            displayCourses(courses.filter(c => c.category.toLowerCase() === filter));
        }
    });
});
