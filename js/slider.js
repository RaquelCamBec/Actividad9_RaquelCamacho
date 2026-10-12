
$(document).ready(function () {

  // Inicialización del plugin bxSlider
  $('.bxslider').bxSlider({
    auto: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 1200,
    adaptiveHeight: true,
    speed: 800,
    pause: 4000,
    controls: true,
    nextText: 'Siguiente',
    prevText: 'Anterior'
  });

});