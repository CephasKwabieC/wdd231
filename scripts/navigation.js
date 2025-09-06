// ======= Responsive Menu =======
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// ======= Footer Dates =======
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// ======= Courses Array =======
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// ======= Display Courses =======
const courseContainer = document.getElementById('course-cards');
const totalCreditsEl = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filters button');

function displayCourses(courseArray) {
    courseContainer.innerHTML = '';

    courseArray.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        let tech = course.technology.join(', ');

        card.innerHTML = `
            <h3>${course.subject} ${course.number} - ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${tech}</p>
        `;

        // Style based on completion
        if (course.completed) {
            card.style.backgroundColor = '#d4edda'; // green
            card.style.border = '1px solid #28a745';
        } else {
            card.style.backgroundColor = '#f8d7da'; // red
            card.style.border = '1px solid #dc3545';
        }

        card.style.padding = '1rem';
        card.style.margin = '0.5rem 0';
        card.style.borderRadius = '5px';
        card.style.fontWeight = 'bold';

        courseContainer.appendChild(card);
    });

    // Update total credits
    const totalCredits = courseArray.reduce((sum, c) => sum + c.credits, 0);
    totalCreditsEl.textContent = `The total credits for listed courses is: ${totalCredits}`;
}

// Initial load
displayCourses(courses);

// ======= Filter Courses =======
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter.toLowerCase();

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        if (filter === 'all') {
            displayCourses(courses);
        } else {
            displayCourses(courses.filter(c => c.subject.toLowerCase() === filter));
        }
    });
});
