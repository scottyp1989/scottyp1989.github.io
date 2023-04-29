// Smooth scrolling for anchor links
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 100
  }, 500);
});

// Change active class on navigation
$(window).on('scroll', function() {
  $('.nav-link').each(function() {
    if ($($(this).attr('href')).offset().top <= $(window).scrollTop() + 100) {
      $(this).addClass('active');
      $(this).parent().siblings().find('.nav-link').removeClass('active');
    }
  });
});

// Mobile menu toggle
$('.nav-toggle').on('click', function() {
  $(this).toggleClass('open');
  $('.navbar-menu').toggleClass('open');
});

// Close mobile menu on click
$('.navbar-menu a').on('click', function() {
  $('.nav-toggle').removeClass('open');
  $('.navbar-menu').removeClass('open');
});

// Initiate AOS animation library
AOS.init({
  duration: 1000,
  once: true
});
