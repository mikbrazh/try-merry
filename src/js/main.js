/* ======= Main JS START ======= */
(function () {
  // GLOBALS
  let html = document.querySelector('html');
  let body = document.querySelector('body');

  /* ======= header START ======= */
  if (document.querySelector('header')) {
    /* ======= canvi navbar START ======= */
    var canviNavbar = new Canvi({
      content: '.canvi-content',
      navbar: '.canvi-navbar',
      openButton: '.canvi-open-button',
      position: 'left',
      pushContent: false,
      width: '100%',
    });

    const canviOpenButton = document.querySelector('.canvi-open-button');
    canviOpenButton.addEventListener('click', function (event) {
      html.classList.add('is-static');
      body.classList.add('is-static');
    });

    const canviContent = document.querySelector('.canvi-content');
    const canviCloseButton = document.querySelector('.canvi-close-button');
    canviCloseButton.addEventListener('click', function (event) {
      html.classList.remove('is-static');
      body.classList.remove('is-static');
      canviContent.classList.add('elem-transform-none'); // Для сброса размытия видеофона в режиме параллакса после открытия canvi nav
      canviNavbar.close();
    });
    /* ======= canvi navbar END ======= */

    /* ======= Headhesive START ======= */
    // Set options
    var options = {
      offset: 80,
      offsetSide: 'top',
      classes: {
        clone: 'header--clone',
        stick: 'header--stick',
        unstick: 'header--unstick'
      }
    };

    // Initialise with options
    var header = new Headhesive('.header', options);

    // Headhesive destroy
    // header.destroy();

    /* ======= canvi headhesive navbar START ======= */
    var canviHeadhesiveNavbar = new Canvi({
      content: '.canvi-content',
      navbar: '.canvi-navbar',
      openButton: '.canvi-open-button',
      position: 'left',
      pushContent: false,
      width: '100%',
    });


    const canviHeadhesiveOpenButton = document.querySelector('.canvi-open-button');
    canviHeadhesiveOpenButton.addEventListener('click', function (event) {
      html.classList.add('is-static');
      body.classList.add('is-static');
    });

    const canviHeadhesiveCloseButton = document.querySelector('.canvi-close-button');
    canviHeadhesiveCloseButton.addEventListener('click', function (event) {
      html.classList.remove('is-static');
      body.classList.remove('is-static');
      canviContent.classList.add('elem-transform-none'); // Для сброса размытия видеофона в режиме параллакса после открытия canvi nav
      canviHeadhesiveNavbar.close();
    });
    /* ======= canvi headhesive navbar END ======= */
    /* ======= Headhesive END ======= */

  }
  /* ======= header END ======= */

  /* ======= promo START ======= */
  if (document.querySelector('.promo')) {
    let sign = function () {
      setTimeout(function () {
        let $__promoSignaturePath = document.querySelectorAll('.promo__signature-path');

        $__promoSignaturePath.forEach((elem) => {
          if (!elem.classList.contains('promo__signature-path--animation')) {
            elem.classList.add('promo__signature-path--animation');
          }
        });

      }, 1000)
    };

    document.addEventListener('DOMContentLoaded', sign());
  }
  /* ======= promo END ======= */

  /* ======= products START ======= */
  if (document.querySelector('.products')) {

    /* ======= swiper START ======= */
    const productsSwiper = new Swiper('.products__swiper', {
      // Default parameters
      direction: 'horizontal',
      loop: true,
      speed: 500,
      slidesPerView: 3,
      breakpoints: {
        // when window width is >= 0px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: '.products__swiper-button-next',
        prevEl: '.products__swiper-button-prev',
      },
    });
    /* ======= swiper END ======= */

  }
  /* ======= products END ======= */

  /* ======= love-in-fish START ======= */
  if (document.querySelector('.love-in-fish')) {
    /* ======= show slogan START ======= */
    let showSlogan = function () {
      setTimeout(function () {
        let $__loveInFishSlogan = document.querySelector('.love-in-fish__slogan');

        if (!$__loveInFishSlogan.classList.contains('love-in-fish__slogan--visible')) {
          $__loveInFishSlogan.classList.add('love-in-fish__slogan--visible');
        }
      }, 3000)
    };

    document.addEventListener('DOMContentLoaded', showSlogan());
    /* ======= show slogan END ======= */

    /* ======= parallax START ======= */
    let $__loveInFishParallax = document.getElementsByClassName('love-in-fish__video-bg--parallax');
    new simpleParallax($__loveInFishParallax, {
      delay: 0.6,
      scale: 1.4,
      transition: 'cubic-bezier(0,0,0,1)',
    });
    /* ======= parallax END ======= */
  }
  /* ======= love-in-fish END ======= */

  /* ======= products-catalog START ======= */

  /* ======= graph-modal START ======= */
  document.addEventListener('DOMContentLoaded', () => {
    const productsCatalogModal = new GraphModal({
      isOpen: () => {
        // console.log('opened');
        const timerId = setTimeout(() => {
          document.querySelector('.graph-modal').scrollTo(0, 0); // Принудительная прокрутка в начало страницы
        }, 100)
      },
      isClose: () => {
        // console.log('closed');
      }
    });

    // new GraphModal().open('second');
  });

  if (document.querySelector('.graph-modal')) {

    /* ======= swiper START ======= */
    const productsSwiper = new Swiper('.product-card-recommendations__swiper', {
      // Default parameters
      direction: 'horizontal',
      loop: true,
      speed: 500,
      slidesPerView: 2,
      breakpoints: {
        // when window width is >= 0px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: '.product-card-recommendations__swiper-button-next',
        prevEl: '.product-card-recommendations__swiper-button-prev',
      },
    });
    /* ======= swiper END ======= */
  }
  /* ======= graph-modal END ======= */

  /* ======= products-catalog END ======= */

  /* ======= recipe START ======= */
  if (document.querySelector('.recipe')) {
    /* ======= swiper START ======= */
    const recipeSwiper = new Swiper('.recipe__swiper', {
      // Default parameters
      direction: 'horizontal',
      loop: true,
      speed: 500,
      slidesPerView: 2,
      breakpoints: {
        // when window width is >= 0px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 2,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: '.recipe__swiper-button-next',
        prevEl: '.recipe__swiper-button-prev',
      },
    });
    /* ======= swiper END ======= */
  }
  /* ======= recipe END ======= */

  /* ======= club-slider START ======= */
  if (document.querySelector('.club-slider')) {
    /* ======= swiper START ======= */
    const clubSlider = new Swiper('.club__swiper', {
      // Default parameters
      direction: 'horizontal',
      loop: true,
      speed: 500,
      slidesPerView: 1,
      navigation: {
        nextEl: '.club-slider__swiper-button-prev',
        prevEl: '.club-slider__swiper-button-next',
      },
    });
    /* ======= swiper END ======= */
  }
  /* ======= club-slider END ======= */

})();
/* ======= Main JS END ======= */