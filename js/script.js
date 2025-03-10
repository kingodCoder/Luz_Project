(function() {
  "use strict";
  /**
  * Animation on scroll
  */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load',
    () => {
      aos_init();
    });
})();