/* Navbar Links */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
});