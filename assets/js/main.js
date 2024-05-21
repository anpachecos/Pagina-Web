

document.addEventListener('DOMContentLoaded', () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const form = document.getElementById('form');
  const parrafo = document.getElementById('warnings');

  form.addEventListener('submit', e => {
      e.preventDefault();
      let warnings = '';
      let entrar = false;
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      parrafo.innerHTML = '';

      if (!regexEmail.test(email.value)) {
          warnings += 'El email no es válido. Por favor, utiliza el formato nombre@apellido.com <br>';
          entrar = true;
      }

      if (password.value.length < 8) {
          warnings += 'La contraseña debe tener más de 8 caracteres <br>';
          entrar = true;
      }
      
      if (entrar) {
          parrafo.innerHTML = warnings;
      } else {
          parrafo.innerHTML = 'Enviado';
      }
  });
});



document.addEventListener('DOMContentLoaded', () => {
    const confirmPassword = document.getElementById('confirm_password');
    const form = document.getElementById('form');
    const parrafo = document.getElementById('warnings');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let warnings = '';
        let entrar = false;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        parrafo.innerHTML = '';

        if (!regexEmail.test(email.value)) {
            warnings += 'El email no es válido.<br>';
            entrar = true;
        }

        if (password.value.length < 8) {
            warnings += 'La contraseña debe tener al menos 8 caracteres.<br>';
            entrar = true;
        }

        if (password.value !== confirmPassword.value) {
            warnings += 'Las contraseñas no coinciden.<br>';
            entrar = true;
        }

        if (entrar) {
            parrafo.innerHTML = warnings;
        } else {
            parrafo.innerHTML = 'Formulario enviado.';
            form.submit();  // Enviar el formulario si todas las validaciones pasan
        }
    });
});



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Search window open/close
   */
  let body = select('body');
  on('click', '.navbar-toggle-box', function(e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function(e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })

  /**
   * Intro Carousel
   */
  new Swiper('.intro-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property carousel
   */
  new Swiper('#property-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.propery-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * News carousel
   */
  new Swiper('#news-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.news-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Testimonial carousel
   */
  new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property Single carousel
   */
  new Swiper('#property-single-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.property-single-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()