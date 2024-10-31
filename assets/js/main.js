/* ----- NAVIGATION BAR FUNCTION ----- */
document.addEventListener('DOMContentLoaded', () => {
    const navMenuBtn = document.querySelector('.nav-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    navMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

/* ----- ADD SHOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
    headerShadow();
    updateActiveLink();
};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (window.scrollY > 50) {
        navHeader.classList.add("scrolled");
    } else {
        navHeader.classList.remove("scrolled");
    }
}

function updateActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    let currentHash = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            currentHash = `#${section.getAttribute('id')}`;
        }
    });

    links.forEach(link => {
        link.classList.toggle('active-link', link.getAttribute('href') === currentHash);
    });
}

window.addEventListener('hashchange', updateActiveLink);
document.addEventListener('DOMContentLoaded', updateActiveLink);

function myMenuFunction() {
    const navMenu = document.getElementById("myNavMenu");
    navMenu.classList.toggle("active");
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["UI UX Designer", "Web Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

/* -----##-- SCROLL REVEAL ANIMATION --##----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* ----- HOME ----- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured_name', {
    delay: 100
})
sr.reveal('.featured-text-info', {
    delay: 200
})
sr.reveal('.featured-text-btn', {
    delay: 200
})
sr.reveal('.social_icons', {
    delay: 200
})
sr.reveal('.featured-image', {
    delay: 300
})

/* ----- PROJECT BOX ----- */
sr.reveal('.project-box', {
    interval: 200
})

/* ----- HEADINGS ----- */
sr.reveal('.top-header', {})

/* -----##-- SCROLL REVEAL LEFT_RIGHT ANIMATION --##----- */
const track = document.querySelector('.sertif-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentPosition = 0;
const itemsToShow = 3;
const itemWidth = document.querySelector('.sertif-box').offsetWidth;
const totalItems = document.querySelectorAll('.sertif-box').length;

/*--Calculate max position to prevent sliding too far--*/
const maxPosition = (totalItems - itemsToShow) * itemWidth;

nextBtn.addEventListener('click', () => {
    if (currentPosition < maxPosition) {
        currentPosition += itemWidth * itemsToShow;
    } else {
        currentPosition = 0; 
    }
    track.style.transform = `translateX(-${currentPosition}px)`;
});

prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition -= itemWidth * itemsToShow;
    } else {
        currentPosition = maxPosition; 
    }
    track.style.transform = `translateX(-${currentPosition}px)`;
});

/* ----- ABOUT INFO & CONTACT INFO----- */
const srleft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.about-info', {
    delay: 100
})
sr.reveal('.contact-info', {
    delay: 100
})
