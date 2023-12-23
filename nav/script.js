// menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close the menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// darkmode

let darkmodeIcon = document.querySelector('#darkmode-icon')
darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};