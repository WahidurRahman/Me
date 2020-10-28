/*===== MENU SHOW =====*/ 
// show and hide menu
const showMenu = () => {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('visible');
        });
    }
}

showMenu();

// Remove MENU
const navLink = document.querySelectorAll('#main-nav ul li a');
const navMenu = document.querySelector('.main-nav');

function linkAction() {
    navMenu.classList.remove('visible');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*
// === SCROLL SECTIONS ACTIVE LINK 
const sectons = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sectons.forEach(current=> {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('#main-nav a[href*='+ sectionId +']').classList.add('active');
        } else {
            document.querySelector('#main-nav a[href*='+ sectionId +']').classList.remove('active');
        }
    });
}

*/

// Smooth Scrolling
$('#main-nav a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 120
      },
      800
    );
  }
});



// ===== SCROLL HEADER 
window.onscroll = () => {
    const nav = document.getElementById('main-nav');
    if(this.scrollY >= 300) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}
