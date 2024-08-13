document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');
    const contactInfo = document.querySelector('#contact-info');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
        contactInfo.classList.toggle('active');
    });
});
