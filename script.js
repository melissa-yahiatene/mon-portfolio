AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out'
});

// Animation simple du formulaire
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès ! (Simulation)");
});

// Effet de scroll sur la nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.95)';
    } else {
        nav.style.background = 'rgba(0,0,0,0.8)';
    }
});