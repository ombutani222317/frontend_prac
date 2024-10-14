const not_active_slide_scale_value = 0.85;
const not_active_slide_opacity_value = 0.4;

var swiper_scale_active = new Swiper("[swiper_scale_active]", {
  slidesPerView: 2,
  parallax: true,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      speed: 900 /* Duration of transition between slides (in ms) */,
      slidesPerView: 1.2,
    },
    // when window width is >= 640px
    640: {
      speed: 1400,
    },
  },
  keyboard: {
    enabled: true,
  },
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  spaceBetween: 0,
  grabCursor: true,
  /*
        autoplay: {
          delay: 4000,
        },*/

  effect: "creative",
  creativeEffect: {
    limitProgress: 2, // slides after 2nd before/after active will have same state
    prev: {
      opacity: not_active_slide_opacity_value,
      scale: not_active_slide_scale_value,
      // will set `translateX(-90%)` on previous slides
      translate: ["-90%", 0, 0],
    },
    next: {
      opacity: not_active_slide_opacity_value,
      scale: not_active_slide_scale_value,
      // will set `translateX(90%)` on next slides
      translate: ["90%", 0, 0],
    },
  },
});

/* CUSTOM ARROWS CODE (5 click on next will change 5 slides - so speed:0) */

console.log(swiper_scale_active);

const prev = document.querySelector("[btn_group] [prev]");
prev.addEventListener("click", prev_slide);
/* add aria controls (web accessibility) */

const next = document.querySelector("[btn_group] [next]");
next.addEventListener("click", next_slide);

function prev_slide() {
  swiper_scale_active.slidePrev(0);
}

function next_slide() {
  swiper_scale_active.slideNext(0);
}

add_aria_for_navigation();

/* we use custom arrows - so we need to set aria mannualy (For screenreaders) */
function add_aria_for_navigation(){
  /* The global aria-controls property identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.*/
  const this_slider = document.querySelector("[swiper_scale_active] .swiper-wrapper");
  const id_value = "my_swiper_scale_active" /* use any value you want */
  this_slider.setAttribute("id", id_value);
  prev.setAttribute("aria-controls", id_value);
  next.setAttribute("aria-controls", id_value);

  prev.setAttribute("aria-label", "Previous slid");
  next.setAttribute("aria-label", "Next Slide");

}