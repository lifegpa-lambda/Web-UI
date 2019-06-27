// Change background of fixed nav on scroll --mobile only--
const mobileSize = window.matchMedia("(max-width: 500px)");

mobileSize.addListener(function() {
  if (mobileSize.matches) {
    window.addEventListener('scroll', function() {
      nav.setAttribute('style', 'background:white')
    })
  } else {
    nav.removeAttribute('style', 'background:white')
  }
});


// Mobile Menu Slide Down/Up
let open = false;

const toggleMenu = (event) => {
  open ? slideUp() : slideDown();
}

const slideDown = () => {
  menu.classList.toggle('menu-open');
  document.querySelector('nav').setAttribute('style', 'background:white');
  open = true;
}

const slideUp = () => {
  menu.classList.toggle('menu-open');
  setTimeout(function() {
    nav.removeAttribute('style', 'background:white');
  }, 800)

  open = false;
}

const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menu-button');
const banner = document.querySelectorAll('.banner').item(0);
const nav = document.querySelector('nav');

menuButton.addEventListener('click', (event) => {
  toggleMenu();
})
// banner.addEventListener('click', (event) => {
//   if (open === true) {
//     slideUp();
//   }
// })
