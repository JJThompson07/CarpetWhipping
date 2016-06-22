// when usser slicks on an image
// chekc the user has clicked on the image
// store the source/src of the image
// update the image within the lightbox to the new image with the above src
//  fade in the lightbox

//  USER CLICK
$('img').click( function(){

	var imageSource = $(this).attr('src');
	console.log(imageSource);
// sends the contents/ value of the imageSource to the console


	$('.outbox img').attr('src', imageSource);

	// first value is the attribute to change, the second value is the image
	// fade the lightbox in

	$('.outbox').fadeIn();



});

// fade out when click on the lightbox

$('.outbox').click(function(){
	$('.outbox').fadeOut();
});

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