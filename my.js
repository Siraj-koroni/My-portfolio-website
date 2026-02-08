// 1. THEME TOGGLE LOGIC
const themeBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

themeBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);

    // Update icon
    const icon = themeBtn.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';

    localStorage.setItem('koroni-theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('koroni-theme');
if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeBtn.querySelector('i').className = 'fas fa-sun';
    }
}

// 2. FORM SUBMISSION
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.innerText = "Sending...";

    setTimeout(() => {
        alert("Thanks Siraj! Your message has been sent successfully.");
        btn.innerText = "Send Message";
        contactForm.reset();
    }, 1500);
});

// 3. SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Simple Form Submission Handler
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         alert('Thank you for your message, Siraj will get back to you soon!');
//         contactForm.reset();
//     });
// }


// // Initialize ScrollReveal
// const sr = ScrollReveal({
//     origin: 'bottom',
//     distance: '60px',
//     duration: 1000,
//     delay: 200,
//     reset: false // Animation only happens once
// });

// // Apply reveal to specific elements
// sr.reveal('.hero-content');
// sr.reveal('.hero-visual', { delay: 400, origin: 'right' });
// sr.reveal('.project-card', { interval: 200 });
// sr.reveal('.section-title');

// // Navbar transparency change on scroll
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });