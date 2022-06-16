"use strict";
// burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const buttons = document.querySelector(".header__buttons");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}
// burger

// ibg
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// ibg




// add class on scroll 
let scrollpos = window.scrollY

const headerMin = document.querySelector(".header__container")
const headerShadow = document.querySelector(".header")
const scrollChange = 30

const add_class_on_scroll = () => headerMin.classList.add("header-min") + headerShadow.classList.add("header-shadow")
const remove_class_on_scroll = () => headerMin.classList.remove("header-min") + headerShadow.classList.remove("header-shadow")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})
// add class on scroll 


// button on click 
$(document).ready(function () {
  $(".card-learn__content").click(function (event) {

    $(this).children(".card-learn__down").toggleClass("active").slideToggle(250);
  });
});
// button on click 


// swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: -10
    },
    // // when window width is >= 480px
    // 480: {
    //   // spaceBetween: 0
    // },
    // // when window width is >= 640px
    // 640: {
    //   // spaceBetween: -10
    // }
  }
});
// swiper


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      
      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
// Прокрутка при клике