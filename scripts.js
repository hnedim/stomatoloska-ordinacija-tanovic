document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');
    const contactInfo = document.querySelector('#contact-info');
    const reviewCard1 = document.querySelector('#review-card1');
    const reviewCard2 = document.querySelector('#review-card2');
    const reviewCard3 = document.querySelector('#review-card3');

    reviewCard1.addEventListener('click', () => {
        window.location.href = 'https://maps.app.goo.gl/GzQnUoRzBFwfpeZk8';
    })
    

    reviewCard2.addEventListener('click', () => {
        window.location.href = 'https://maps.app.goo.gl/JDDFTaFNmAgF7uau7';
    })

    reviewCard3.addEventListener('click', () => {
        window.location.href = 'https://maps.app.goo.gl/hpBQzuirSVRuiS3f7';
    })

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
        contactInfo.classList.toggle('active');
    });
});
