$(function() {

  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
});


  // open Side Nav
  $(".menuTriger").on("click", function() {
      $(this).fadeOut();
      $(".sideNav").toggleClass("open");
      $(".navover").toggleClass("open");
      $("body").css("overflow", "hidden");
      setTimeout(function() {
        $(".sideNav").addClass("origin");
      },500)
  });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
      if($(".sideNav").hasClass("open")){
          $(".menuTriger").fadeIn();
          $(".navover").removeClass("open");
          $(".sideNav").toggleClass("open");
          // $(".sideNav").toggleClass("origin");
          $("body").css("overflow", "auto");
          setTimeout(function() {
            $(".sideNav").removeClass("origin");
          },600)
      }
  });

  // Search
  $(".searBtn").on("click", function() {
    $(".search").toggleClass("open");
    $(".serach form").fadeIn();
  });

  if($(window).width() < 992){
    $(".search, .search form i").on("click", function() {
      $(".search").removeClass("open");
      $(".serach form").fadeOut();
    });
    $(".search form").on("click", function(e) {
      e.stopPropagation();
    })
  }

  // Main Slider
  $('.slider .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 1,
    dots: true,
    navText: ["<span><i class='fas fa-chevron-right'></i></span>","<span><i class='fas fa-chevron-left'></i></span>"]
  });

  $(".slider .owl-nav").css("width", $(".container").innerWidth());
  $(window).on("resize", function() {
    $(".slider .owl-nav").css("width", $(".container").innerWidth());
  });

  if($(window).width() < 992){
    $(".grid .row").addClass("owl-carousel");
    $(".grid .row").css("margin", "auto");
  }else{
    $(".grid .row").removeClass("owl-carousel");
  }

  $('.grid .owl-carousel').owlCarousel({
    rtl:true,
    autoplay: false,
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 5
      },
      600:{
        items: 2
      },
      768:{
        items: 3
      }
    }
  });

  // Map
  var x = 0;
  var locations = [
      ['قصر السرايا الرياض', 24.6764335,46.6721885, ++x]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(24.75,46.68),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      icon: '../images/pin.png',
      map: map
    });
  }

});

// Preloder
$(window).on("load", function() {
  $("html").css("overflow-y", "auto");
  $(".preloader").fadeOut(400, function() {
    $(this).remove()
  });
});