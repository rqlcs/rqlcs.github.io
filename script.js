const burgerMenu = document.querySelector('.burger-menu');
const menuLinks = document.querySelector('.menu-links');
const closeMenu = document.querySelector('.close-menu');

burgerMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
    burgerMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    menuLinks.classList.remove('show');
    burgerMenu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('burger-menu') && !e.target.classList.contains('menu-links') && !e.target.classList.contains('show')) {
         menuLinks.classList.remove('show');
         burgerMenu.classList.remove('active');
    }
});
