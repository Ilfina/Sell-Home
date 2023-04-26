//--Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

//--проверить существует ли константа
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}

//--чтобы убиралась шторка при нажатии на пункт меню
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the active class
    navMenu.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//--Form
const formOpenBtn = document.querySelector('#form-open'),
      home = document.querySelector('.home'),
      formCloseBtn = document.querySelector('.form-close');

formOpenBtn.addEventListener('click', () => home.classList.add('show'));
formCloseBtn.addEventListener('click', () => home.classList.remove('show'));


//--Change Background Header
//--изменение цвета header при прокрутке
function scrollHeader() {
  const header = document.getElementById('header');

  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//--Sections active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active-link')
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active-link')
      });
    };
  });
};

//--Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//--Accordion
const accordionItems = document.querySelectorAll('.accordion')

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion-btn')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem!== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion-content')

  if(item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

//--Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  
  if(scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//--Scroll Reveal
const sr = ScrollReveal ({
  distance: '60px',
  duration: 2200,
  reset: true,
})

sr.reveal(`.home-data, .card-images, .accordion-box, .footer-title`,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.home-social, .bonus-data, .company-container, .footer-box, .footer-part-one, .footer-part-two, .footer-part-three`,{
  origin: 'left',
  interval: 100,
})

sr.reveal(`.bonus-image, .questions-image`,{
  origin: 'right',
  interval: 100,
})