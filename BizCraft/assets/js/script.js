// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ====== AOS INITIALIZATION ======
AOS.init({
    duration: 700,
    once: true
});

// ====== SWIPER SLIDER ======
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 3500 },
    breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    }
});

// ====== CURRENT YEAR ======
document.getElementById('year').innerText = new Date().getFullYear();
