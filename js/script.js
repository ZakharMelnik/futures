$(document).ready(function() {
	$('.slider-tariffs').owlCarousel({
	    loop:false,
	    items:1,
	    center:true,
	    margin:10,
	    stagePadding: 25,
	    responsiveClass:true
	})

	$('.slider-videoLessons').owlCarousel({
	    loop:false,
	    items:1,
	    autoWidth:true,
	    center:true,
	    margin:15,
	    stagePadding: 30,
	    responsiveClass:true
	})

	$('.create-api-key').magnificPopup({
			type: 'inline'
	});



	$(".accordion .set > .head").on("click", function(){
	  if($(this).hasClass('active')){
	  	$(this).removeClass("active");
	    $(this).siblings('.text').slideUp(200);
	    $(".accordion .set > .head i").removeClass("fa-minus").addClass("fa-plus");
	  }else{
	    $(".accordion .set > .head i").removeClass("fa-minus").addClass("fa-plus");
	  $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
	  $(".accordion .set > .head").removeClass("active");
	  $(this).addClass("active");
	  $('.accordion .text').slideUp(200);
	  $(this).siblings('.text').slideDown(200);
	  }
	});
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(".slider-videoLessons .item").click(function(){
	$(".container-popup").toggleClass("show");
});

$(".container-popup").click(function(){
  $(this).removeClass("show");
});

$(".create-api-key .close").click(function(){
  $(".container-popup").removeClass("show");
});
