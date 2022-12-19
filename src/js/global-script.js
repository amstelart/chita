// Если на проекте jQuery
$( document ).ready(function() {

    $('.burger').click(function(event) {
      $('.burger, .page-header__inner').toggleClass('active');
      $('body').toggleClass('lock');
    });

    // fix top-menu
    var shrinkHeader = 120;
    var head = $('.page-header');
    var heightHeader = head.height();
    $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if ( scroll >= shrinkHeader ) {
        // $('body').css('paddingTop',heightHeader);
        head.addClass('shrink');
        }
        else {
            // $('body').css('paddingTop',0);
            head.removeClass('shrink');
        }
    });
    // fix top-menu === end

    $('.accordion-group').ariaAccordion({});

    $(".field-phone").mask("+7(999) 999-9999");

    AOS.init();
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
