$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true 
  });
 
 
  // $('.slider-menu').slick({
  //   slidesToShow: 10,
  //   slidesToScroll: 1,
  //   dots: false,
  //   focusOnSelect: true,
  //   arrows:true,
  //   // infinite:true,
  //   // responsive: [
  //   //   {
  //   //     breakpoint: 1200,
  //   //     settings: {
  //   //       slidesToShow: 8,
  //   //       slidesToScroll: 1,
  //   //     },
  //   //   },
  //   //   {
  //   //     breakpoint: 1008,
  //   //     settings: {
  //   //       slidesToShow: 6,
  //   //       slidesToScroll: 1,
  //   //     },
  //   //   },
  //   //   {
  //   //     breakpoint: 800,
  //   //     settings: {
  //   //       slidesToShow: 4,
  //   //       slidesToScroll: 1,
  //   //     },
  //   //   },
  //   // ],
  // });


 
 
// $(document).ready(function() {
//   $("#news-slider").owlCarousel({
//       items : 8,
//       itemsDesktop:[1199,7],
//       itemsDesktopSmall:[980,5],
//       itemsMobile : [600,3],
//       navigation:true,
//       navigationText:["<",">"],
//       pagination:true,
//       autoPlay:false,
//       loop:false,
//   });
// });

$(document).ready(function ($) {
	$(".owl-carousel").owlCarousel({
		loop: false,
		margin: 10,
		dots: false,
		items: 11,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      300: {
        items: 4
      },
      600: {
        items: 5
      },
      1024: {
        items: 8  
      },
      1200: {
        items: 11
      }
    }
	});
});
