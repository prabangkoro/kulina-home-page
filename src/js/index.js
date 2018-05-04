console.log('compiled');
var nav = $('nav');

//on load & scroll activate nav bg
$(window).on('load scroll', function () {
  var curPos = $(this).scrollTop();
  var limHeight = parseFloat($('.jumbotron h1').css('padding-top'));
  if (curPos < limHeight) {
    nav.removeClass('bg-show');
  } else {
    nav.addClass('bg-show');
  }
});

//on hamburger icon click activate nav bg
$('.navbar-toggler').on('click', function () {
  var curPos = $(window).scrollTop();
  var limitHeight = parseFloat($('.jumbotron').css('padding-top'));
  // below limit: hide bg
  if (curPos < limitHeight) {
    if (nav.hasClass('bg-show')) {
      nav.removeClass('bg-show');      
    } else {
      nav.addClass('bg-show');
    }
  }
})