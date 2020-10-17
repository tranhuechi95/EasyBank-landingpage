const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-ul');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('show');
        navMenu.classList.toggle('show');
    })
}