// Intro-without //


let mm = gsap.matchMedia();

mm.add("(max-width: 749px)", () => {






    gsap.from('.hero', { opacity: 1, duration: 1, y: '-10%', delay: 0, ease: 'elastic(1,0.3)' });
    gsap.from('.anim1', { duration: 1, x: '-50', opacity: 0, delay: 1.4, stagger: 0.6 });
    let tl = gsap.timeline({ defaults: { ease: "power1" } });
    tl.to("#Hero_span", { y: '0%', duration: 1, delay: .2, stagger: 0.6 });




})

mm.add("(min-width: 750px)", () => {


    gsap.from('.hero', { opacity: 1, duration: 1, y: '-10%', delay: 0, ease: 'elastic(1,0.3)' });
    gsap.from('.anim1', { duration: 1, x: '-50', opacity: 0, delay: 1.4, stagger: 0.6 });
    let tl = gsap.timeline({ defaults: { ease: "power1" } });
    tl.to("#Hero_span", { y: '0%', duration: 1, delay: .2, stagger: 0.6 });



})









// gsap. from('.hero', {duration: 1, y: '-10%' , ease: 'bounce' })
// gsap.from('.hero', { opacity: 0, duration: 1, y: '-10%', ease: 'elastic(1,0.3)' });
// gsap.from('.anim1', { duration: 1, x: '-50', opacity: 0, delay: .5, stagger: 0.6 });

// Intro-whitout //


// Intro //


// let mm = gsap.matchMedia();

// mm.add("(max-width: 749px)", () => {


//   const btn1 = document.querySelector(".btn1");

//   btn1.addEventListener("click", function () {
//     gsap.to(".btn1", 1, {
//       opacity: 0,
//       y: -40,
//       ease: Expo.easeInOut,
//     });

//     gsap.to(".text-wrapper > div", 1, {
//       x: "500",
//       opacity: 1,
//       ease: Expo.easeInOut,
//       delay: 1,
//       stagger: 0.1,
//     });

//     gsap.to(".text-wrapper", 3, {
//       y: -600,
//       scale: 4.5,
//       rotate: -90,
//       ease: Expo.easeInOut,
//       delay: 1.5,
//     });

//     gsap.to(".text1", 1, {
//       opacity: 1,
//       ease: Expo.easeInOut,
//       delay: 3,
//     });

//     gsap.to(".text-wrapper > div", 4, {
//       x: "-3500",
//       ease: Expo.easeInOut,
//       delay: 3.5,
//       stagger: 0.05,
//     });

//     gsap.to(".text-container", 2, {
//       // opacity: 0,
//       bottom: "-200%",
//       ease: Expo.easeInOut,
//       delay: 6,
//     });



//     gsap.to(".Intro", {
//       // opacity: 0,
//       display: 'none',

//       delay: 7,
//     });

//     // let textWrapper = document.querySelector(".heade");
//     // textWrapper.innerHTML = textWrapper.textContent.replace(
//     //   /\S/g,
//     //   "<span class='letter'>$&</span>"
//     // );

//     // anime.timeline().add({
//     //   targets: ".header",
//     //   opacity: [0, 1],
//     //   translateY: [200, 0],
//     //   translateZ: 0,
//     //   easing: "easeOutExpo",
//     //   duration: 2000,
//     //   delay: (el, i) => 7000 + 40 * i,
//     // });









//     gsap.from('.hero', { opacity: 1, duration: 1, y: '-10%', delay: 7, ease: 'elastic(1,0.3)' });
//     gsap.from('.anim1', { duration: 1, x: '-50', opacity: 0, delay: 8.4, stagger: 0.6 });
//     let tl = gsap.timeline({ defaults: { ease: "power1" } });
//     tl.to("#Hero_span", { y: '0%', duration: 1, delay: 7.2, stagger: 0.6 });


//   });

// })

// mm.add("(min-width: 750px)", () => {


//   const btn1 = document.querySelector(".btn1");

//   btn1.addEventListener("click", function () {
//     gsap.to(".btn1", 1, {
//       opacity: 0,
//       y: -40,
//       ease: Expo.easeInOut,
//     });

//     gsap.to(".text-wrapper > div", 1, {
//       x: "500",
//       opacity: 1,
//       ease: Expo.easeInOut,
//       delay: 1,
//       stagger: 0.1,
//     });

//     gsap.to(".text-wrapper", 3, {
//       y: -600,
//       scale: 4.5,
//       rotate: -90,
//       ease: Expo.easeInOut,
//       delay: 1.5,
//     });

//     gsap.to(".text1", 1, {
//       opacity: 1,
//       ease: Expo.easeInOut,
//       delay: 3,
//     });

//     gsap.to(".text-wrapper > div", 4, {
//       x: "-100%",
//       ease: Expo.easeInOut,
//       delay: 3.5,
//       stagger: 0.05,
//     });

//     gsap.to(".text-container", 2, {
//       // opacity: 0,
//       bottom: "-200%",
//       ease: Expo.easeInOut,
//       delay: 6,
//     });



//     gsap.to(".Intro", {
//       // opacity: 0,
//       display: 'none',

//       delay: 7,
//     });

//     // let textWrapper = document.querySelector(".heade");
//     // textWrapper.innerHTML = textWrapper.textContent.replace(
//     //   /\S/g,
//     //   "<span class='letter'>$&</span>"
//     // );

//     // anime.timeline().add({
//     //   targets: ".header",
//     //   opacity: [0, 1],
//     //   translateY: [200, 0],
//     //   translateZ: 0,
//     //   easing: "easeOutExpo",
//     //   duration: 2000,
//     //   delay: (el, i) => 7000 + 40 * i,
//     // });









//     gsap.from('.hero', { opacity: 1, duration: 1, y: '-10%', delay: 7, ease: 'elastic(1,0.3)' });
//     gsap.from('.anim1', { duration: 1, x: '-50', opacity: 0, delay: 8.4, stagger: 0.6 });
//     let tl = gsap.timeline({ defaults: { ease: "power1" } });
//     tl.to("#Hero_span", { y: '0%', duration: 1, delay: 7.2, stagger: 0.6 });


//   });
// })









// gsap. from('.hero', {duration: 1, y: '-10%' , ease: 'bounce' })
// gsap.from('.hero', { opacity: 0, duration: 1, y: '-10%', ease: 'elastic(1,0.3)' });
// gsap.from('.anim1', { duration: 1, x: '-50', opacity: 0, delay: .5, stagger: 0.6 });

// Intro //

// document.addEventListener("DOMContentLoaded", function () {
//   var lazyloadImages;    

//   if ("IntersectionObserver" in window) {
//     lazyloadImages = document.querySelectorAll(".lazy");
//     var imageObserver = new IntersectionObserver(function(entries, _observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           var image = entry.target;
//           image.src = image.dataset.src;
//           image.classList.remove("lazy");
//           imageObserver.unobserve(image);
//         }
//       });
//     });

//     lazyloadImages.forEach(function(image) {
//       imageObserver.observe(image);
//     });
//   } else {  
//     var lazyloadThrottleTimeout;
//     lazyloadImages = document.querySelectorAll(".lazy");
    
//     function lazyload () {
//       if(lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }    

//       lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//             if(img.offsetTop < (window.innerHeight + scrollTop)) {
//               img.src = img.dataset.src;
//               img.classList.remove('lazy');
//             }
//         });
//         if(lazyloadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//       }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   }
// })



/* aaa */

// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

/* aaa*/




/* Menu mobile */

function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');
 
  

  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav');
    });
  });
  
}

menuMobile();



// // effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('services');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, _index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, _observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, _observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();



// aaaaa


// 'use strict';

// var support = { animations: Modernizr.cssanimations },
//   animEndEventNames = { 'WebkitAnimation': 'webkitAnimationEnd', 'OAnimation': 'oAnimationEnd', 'msAnimation': 'MSAnimationEnd', 'animation': 'animationend' },
//   animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
//   onEndAnimation = function (el, callback) {
//     var onEndCallbackFn = function (ev) {
//       if (support.animations) {
//         if (ev.target != this) return;
//         this.removeEventListener(animEndEventName, onEndCallbackFn);
//       }
//       if (callback && typeof callback === 'function') { callback.call(); }
//     };
//     if (support.animations) {
//       el.addEventListener(animEndEventName, onEndCallbackFn);
//     }
//     else {
//       onEndCallbackFn();
//     }
//   };

// // from http://www.sberry.me/articles/javascript-event-throttling-debouncing
// function throttle(fn, delay) {
//   var allowSample = true;

//   return function (e) {
//     if (allowSample) {
//       allowSample = false;
//       setTimeout(function () { allowSample = true; }, delay);
//       fn(e);
//     }
//   };
// }

// // sliders - flickity
// var sliders = [].slice.call(document.querySelectorAll('.slider')),
//   // array where the flickity instances are going to be stored
//   flkties = [],
//   // grid element
//   grid__modal = document.querySelector('.grid__modal'),
//   // isotope instance
//   iso
// // filter ctrls


// function init() {
//   // preload images
//   imagesLoaded(grid__modal, function () {
//     initFlickity();
//     initIsotope();
//     initEvents();

//   });
// }

// function initFlickity() {
//   sliders.forEach(function (slider) {
//     var flkty = new Flickity(slider, {
//       prevNextButtons: false,
//       wrapAround: true,
//       cellAlign: 'left',
//       contain: true,
//       resize: false
//     });

//     // store flickity instances
//     flkties.push(flkty);
//   });
// }

// function initIsotope() {
//   iso = new Isotope(grid__modal, {
//     isResizeBound: false,
//     itemSelector: '.grid__modal__item',
//     percentPosition: true,
//     masonry: {
//       // use outer width of grid-sizer for columnWidth
//       columnWidth: '.grid__sizer',

//     },
//     transitionDuration: '0.6s'
//   });



//   // window resize / recalculate sizes for both flickity and isotope/masonry layouts
//   window.addEventListener('resize', throttle(function (_ev) {
//     recalcFlickities()
//     iso.layout();
//   }, 50));





//   // add to cart

// }

// function recalcFlickities() {
//   for (var i = 0, len = flkties.length; i < len; ++i) {
//     flkties[i].resize();
//   }
// }

// init();



// // aaaaa


// bbbb




  // // window resize / recalculate sizes for both flickity and isotope/masonry layouts
  // window.addEventListener('resize', throttle(function (_ev) {
  //   recalcFlickities()
  //   iso.layout();
  // }, 50));

// bbb








/* Porfolio */

function tabsFilters() {
  const tabs = document.querySelectorAll('.dropdown a');
  const projets = document.querySelectorAll('.portfolio .card');

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }

  const showProjets = (elem) => {
    console.log(elem);
    projets.forEach(projet => {

      let filter = projet.getAttribute('data-category');

      if (elem === 'all') {
        projet.parentNode.classList.remove('hide');
        return
      }

      console.log('tutu');
      // ne sera pas pris en compte !
      /*if (filter !== elem) {
        projet.parentNode.classList.add('hide');
      } else {
        projet.parentNode.classList.remove('hide');
      }*/

      // option pour les plus motivés - opérateur ternaire
      filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let filter = elem.getAttribute('data-filter');
      showProjets(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  })
}

tabsFilters()


function showProjectDetails() {
  const links = document.querySelectorAll('.card');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      
      gsap.to('.modal', { duration: .5, opacity: 0,display:'none'});
    
      // modal.classList.remove('show');
    });
  }



  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

// modals.forEach(_modal => {
//     btn.addEventListener('click', function () {

//       gsap.to(document.querySelector(`[id=${elem.dataset.id}]`), { duration: 1, y: '-100', opacity: 0, });
//     });
// });
  
  

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
     
      hideModals();
    });
  });
 
  


  links.forEach(elem => {
    elem.addEventListener('click', function () {
      gsap.to(document.querySelector(`[id=${elem.dataset.id}]`), { duration: .5, opacity: 1,display:''});
    });
  });



  links.forEach(elem => {
      elem.addEventListener('click', (_event) => {
        recalcFlickities()
        iso.layout();
        
      });
    });



}

showProjectDetails();





