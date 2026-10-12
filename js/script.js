

$(document).ready(function () {

  // Reloj digital en tiempo real con JavaScript y jQuery
  function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    
    $('#reloj-digital').text(horas + ':' + minutos + ':' + segundos);
  }
  setInterval(actualizarReloj, 1000);
  actualizarReloj();

  // Funcionalidad extra: Alternador de Modo Oscuro / Modo Claro
  $('#btn-theme').on('click', function () {
    $('body').toggleClass('dark-mode');
    
    if ($('body').hasClass('dark-mode')) {
      $(this).text('Modo Claro');
    } else {
      $(this).text('Modo Oscuro');
    }
  });

  // Evento interactivo para el acordeón en la sección Nosotros
  $('.accordion-header').on('click', function () {
    $(this).next('.accordion-body').slideToggle(300);
    $('.accordion-body').not($(this).next()).slideUp(300);
  });

  // Control del botón Ir arriba con eventos de desplazamiento
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('#btn-ir-arriba').fadeIn();
    } else {
      $('#btn-ir-arriba').fadeOut();
    }
  });

  $('#btn-ir-arriba').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // Validación del formulario de contacto
  $('#form-contacto').on('submit', function (e) {
    e.preventDefault();

    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const asunto = $('#asunto').val().trim();
    const mensaje = $('#mensaje').val().trim();
    const $alerta = $('#form-alerta');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
      $alerta
        .removeClass('exito')
        .addClass('error')
        .text('Por favor, llena todos los campos obligatorios.')
        .fadeIn();
      return;
    }

    if (!regexEmail.test(correo)) {
      $alerta
        .removeClass('exito')
        .addClass('error')
        .text('Por favor, ingresa un correo electrónico válido.')
        .fadeIn();
      return;
    }

    $alerta
      .removeClass('error')
      .addClass('exito')
      .text('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.')
      .fadeIn();

    $('#form-contacto')[0].reset();

    setTimeout(function () {
      $alerta.fadeOut();
    }, 4000);
  });

});