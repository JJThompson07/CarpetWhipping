
var whipping = document.getElementById("whipping");
var whippingPic = document.getElementById("whipping-pic");
var rugs = document.getElementById("rugs");
var rugsPic = document.getElementById("rugs-pic");
var stairset = document.getElementById("stairset");
var stairsetPic = document.getElementById("stairset-pic");
var roomsize = document.getElementById("roomsize");
var roomsizePic = document.getElementById("roomsize-pic");
var alterations = document.getElementById("alterations");
var alterationsPic = document.getElementById("alterations-pic");
var caravan = document.getElementById("caravan");
var caravanPic = document.getElementById("caravan-pic");
var fringing = document.getElementById("fringing");
var fringingPic = document.getElementById("fringing-pic");
var tape = document.getElementById("tape");
var tapePic = document.getElementById("tape-pic");
var leather = document.getElementById("leather");
var leatherPic = document.getElementById("leather-pic");
var miscellaneous = document.getElementById("miscellaneous");
var miscellaneousPic = document.getElementById("miscellaneous-pic");
var prices = document.getElementById("prices");
var pricesPic = document.getElementById("prices-pic");
var pricesPic = document.getElementById("lightbox");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

whipping.addEventListener("click", picLink);
rugs.addEventListener("click", picLink);
stairset.addEventListener("click", picLink);
roomsize.addEventListener("click", picLink);
alterations.addEventListener("click", picLink);
caravan.addEventListener("click", picLink);
fringing.addEventListener("click", picLink);
tape.addEventListener("click", picLink);
leather.addEventListener("click", picLink);
miscellaneous.addEventListener("click", picLink);
prices.addEventListener("click", picLink);



function picLink(){
	var allImages = document.querySelectorAll("img");

	for (var i = 0; i< allImages.length; i++) {
		allImages[i].className = "hide";
	}
	var picId = this.attributes["data-img"].value;
	console.log(picId);
	var pic = document.getElementById(picId);
	if(pic.className === "hide") {
		pic.className = "";
		lightbox.className ="";
	$('#lightbox').fadeIn();


	} else {
		pic.className = "hide";
		lightbox.className ="hide";
	}
}


$('#lightbox').click(function(){
	$('#lightbox').fadeOut();
	lightbox.className = "hide";
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







