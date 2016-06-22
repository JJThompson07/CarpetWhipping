
if ($(window).width() < 800) {
   $('.show').fadeOut();
     $('.hidden').fadeIn();
}
else {
   $('.show').fadeIn();
    $('.hidden').fadeOut();
}



 $(window).resize(function() {
  if ($(window).width() < 800) {
     console.log('Less than 800');
     $('.show').fadeOut();
     $('.hidden').fadeIn();
  }
 else {
    console.log('More than 800');
    $('.show').fadeIn();
    $('.hidden').fadeOut();
 }
});