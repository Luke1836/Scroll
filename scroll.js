/* Navbar Links */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
});

/* FIXED HEADER */
const navHeader = document.querySelector('.nav-header');
const links = document.querySelector('.links');
const linksAnchor = document.querySelectorAll('.scroll-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navHeaderHeight = navHeader.getBoundingClientRect().height;
    if(scrollHeight > navHeaderHeight)
    {
        navHeader.classList.add('fixed-header');
        links.classList.add('links-fixed');
        linksAnchor.forEach(link => {
            link.classList.add('fixed-linksColor');
        });
    }
    else
    {
        navHeader.classList.remove('fixed-header');
        links.classList.remove('links-fixed');
        linksAnchor.forEach(link => {
            link.classList.remove('fixed-linksColor');
        });
    }
});