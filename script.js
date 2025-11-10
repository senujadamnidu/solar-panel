// Wait for the DOM (website content) to load
document.addEventListener('DOMContentLoaded', () => {

    // Get the hamburger icon and the navigation links list
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the nav links to show/hide it
        navLinks.classList.toggle('active');

        // Toggle the 'active' class on the hamburger for the 'X' animation
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when a navigation link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for all internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in effect on scroll
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once it's faded in
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});
