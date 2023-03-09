"use strict";

var swiper1 = new Swiper('.main-slider__slider', {
  // Optional parameters

  // observer: true,
  //observeParents: true,
  slidesPerView: 'auto',
  spaceBetween: 32,
  // autoHeight: true,
  speed: 1100,
  loop: true,
  // breakpointsBase: "window",
  //setWrapperSize: true,
  // відключає функції слайдера якщо картинок менше чим треба
  //watchOverflow: true,

  // При кліку на слайд він буде ставати по центру
  //slideToClickedSlide: true,
  // активний слайд завжди буде по центру
  centeredSlides: true,
  //touchRatio: 0,
  simulateTouch: true,
  // над слайдом буде курсор-рука 
  grabCursor: true,
  // zoom: {
  //Максимальне збільшення
  // 	maxRatio: 2,
  //Мінімальне збільшення
  // 	minRatio: 1,
  // },
  //loopedSlides: 3,
  //loopAdditionalSlides:1,
  //preloadImages: false,
  //lazy: true,
  // для пролисту декількох слайдів одночасно
  //slidesPerGroup: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    //Щоб працювали крапки для переключання
    clickable: true
  },
  /*
  // Ефекти
  effect: 'fade',	*/
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  //Брейкпоінти
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      centeredSlides: false,
      speed: 1500
    },
    502: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 1500
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 1.51,
      spaceBetween: 10
    },
    1450: {
      slidesPerView: 1.4,
      spaceBetween: 30
    }
  }
});
var swiper = new Swiper('.advantage__slider', {
  // Optional parameters

  // observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 92,
  speed: 800,
  loop: true,
  simulateTouch: true,
  // над слайдом буде курсор-рука 
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  //Брейкпоінти
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true
    },
    555: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1089: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});
var swiper3 = new Swiper('.beautiful-rooms__slider', {
  // Optional parameters
  //slidesPerView: 2,
  spaceBetween: 24,
  speed: 1100,
  loop: true,
  simulateTouch: true,
  // над слайдом буде курсор-рука 
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  //Брейкпоінти

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true
    },
    555: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1089: {
      slidesPerView: 2.13,
      spaceBetween: 24
    }
  }
});
var swiper4 = new Swiper('.tips__tips-slider', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 32,
  speed: 1100,
  loop: true,
  simulateTouch: true,
  // над слайдом буде курсор-рука 
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  //Брейкпоінти
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 5,
      autoHeight: true,
      centeredSlides: false
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 8,
      autoHeight: true
    },
    788: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 15
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});

// РОБОТА ЗІ СПОЙЛЕРАМИ

var footerSubtitle = document.querySelectorAll('.footer__subtitle');
footerSubtitle.forEach(function (elem) {
  elem.addEventListener('click', function () {
    var footerColumn = elem.parentNode;
    var footerNav = elem.nextElementSibling;
    footerColumn.classList.toggle('active');
    if (footerColumn.classList.contains('active')) {
      footerNav.style.display = 'block';
    } else {
      footerNav.style.display = 'none';
    }
  });
});

// Модуль роботи з меню (бургер) ========================================================================================================================================================================================
var menuBtn = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menuBody.classList.toggle('active');
  document.body.classList.toggle('scroll-lock');
});