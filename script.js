document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');

    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // 1. Select all links
    const aboutLink = document.getElementById('about-link');
    const expLink = document.getElementById('experience-link');
    const contactLink = document.getElementById('contact-link');

    // 2. Select all content sections
    const aboutContent = document.getElementById('about-content');
    const expContent = document.getElementById('experience-content');
    const contactContent = document.getElementById('contact-content');


    // 3. Individual Click Listeners
    aboutLink.addEventListener('click', function (e) {
        expLink.classList.remove('active');
        expContent.classList.remove('active');

        contactLink.classList.remove('active');
        contactContent.classList.remove('active');

        aboutLink.classList.add('active');
        aboutContent.classList.add('active');
    });

    expLink.addEventListener('click', function (e) {
        aboutLink.classList.remove('active');
        aboutContent.classList.remove('active');

        contactLink.classList.remove('active');
        contactContent.classList.remove('active');

        expLink.classList.add('active');
        expContent.classList.add('active');
    });

    contactLink.addEventListener('click', function (e) {
        expLink.classList.remove('active');
        expContent.classList.remove('active');

        aboutLink.classList.remove('active');
        aboutContent.classList.remove('active');

        contactLink.classList.add('active');
        contactContent.classList.add('active');
    });
});

//change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});