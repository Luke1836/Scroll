/* Navbar Links */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    const linksHeight = links.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    if(linksContainerHeight === 0)
        linksContainer.style.height = `${linksHeight}px`;
    else
        linksContainer.style.height = 0;
    linksContainer.classList.toggle('show-links');
});

/* FIXED HEADER */
const navHeader = document.querySelector('.nav-header');
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

/* DISPLAY THE POINTER */
const pointer = document.querySelector('.pointer');

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    if(scrollHeight > 200)
        pointer.classList.add('show-pointer');
    else
        pointer.classList.remove('show-pointer');
});


/* Smooth SCROLL */
linksAnchor.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navHeader.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navHeader.classList.contains("fixed-header");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 90) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    })
})

