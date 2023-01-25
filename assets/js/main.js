"use strict";


let header = 0;
function scrollHead() {
  if ($(document).scrollTop() > 10) {
    if (header == 0) {
      header = 1;
      $(".project_header").addClass("slim");
    }
  } else {
    if (header == 1) {
      header = 0;
      $(".project_header").removeClass("slim");
    }
  }
}
scrollHead();
$(window).scroll(scrollHead);





// File Upload
$("form").on("change", ".file-upload-field", function () {
  $(this)
    .parent(".file-upload-wrapper")
    .attr(
      "data-text",
      $(this)
        .val()
        .replace(/.*(\/|\\)/, "")
    );
});

$(document).ready(function () {
  $(".skelton_wrap a[href^='#']").click(function (e) {
    e.preventDefault();
    let offTop = $(".project_header").height() + 20;

    var position = $($(this).attr("href")).offset().top - offTop;

    $("body, html").animate(
      {
        scrollTop: position,
      } /* speed */
    );
  });

  $(".animated-form .input-holder").each(function () {
    $(this).on("click", function () {
      $(".input-holder").removeClass("active");
      $(this).addClass("active");
    });
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".animated-form .input-holder").length) {
      $(".animated-form .input-holder").removeClass("active");
    }
  });

  $(".animated-form .inpt").on("keyup", function () {
    var self = $(this);
    if (self.val() != "") {
      $(this).parent(".input-holder").addClass("activated");
    } else {
      $(this).parent(".input-holder").addClass("activated");
    }
  });
  $(".label_dis").on("click", function () {
    $(".input-holder label").removeClass("active");
  });
});

$(".project_header .container-fluid").append("<div class='overlay'></div>");


// Back Button
$(window).scroll(function () {
  if (
    $(window).scrollTop() + $(window).height() >
    $(document).height() - 1000
  ) {
    $(".back-btn").addClass("back-open");
  } else {
    $(".back-btn").removeClass("back-open");
  }
});

// Goto Top of the Page
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $("#back-to-top").addClass("visible");
    } else {
      $("#back-to-top").removeClass("visible");
    }
  });
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

$("<button id='back-to-top'><span>Top</span></button>")
  .clone()
  .appendTo(".project_footer");
function displayWindowResize() {
  var screenw = document.documentElement.clientWidth;
  var screenh = document.documentElement.clientHeight;
  if (screenw >= 1200) {
    $("li.mega-menu")
      .children("ul")
      .wrap("<div class='menu-wrap'></div>")
      .addClass("added");
  }
  if (screenw >= 992) {
    $(".child_page_wrapper .section_image").each(function () {
      $(this).appendTo($(this).parents(".child_page_wrapper"));
    });
  }
  if (screenw <= 1199) {
  }
  if (screenw <= 767) {
  }
}
window.addEventListener("resize", displayWindowResize);
displayWindowResize();


/// Service Slider
$('.service-slider').slick({
    slidesToShow: 2,
    slideToScroll: 1,
    autoplay:true,
    dots: true,
    arrows: false,
    rows:2,
    responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 767,
       settings: {
         slidesToShow: 1,
         rows:1,
         slidesToScroll: 1
       }
     }
     ],
  });

  $('.case-slider').slick({
    slidesToShow:1,
    slideToScroll: 1,
    autoplay:true,
    centerMode:true,
    variableWidth:true,
    dots: true,
    arrows: true,
    asNavFor: '.slider-nav',
    responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         centerMode:false,
    variableWidth:false,
       }
     }
     ],


  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: '.case-slider',
    focusOnSelect: true
  });


  //Filter
  $(function() {
    
    var $filter = $('.filter');
    var $tab = $('.filter a');
    var $offers = $('.boxGroup .box')
    
    
    
    $filter.on('click touch', '.all',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.hide();
      $offers.fadeIn( 700 );
      
    });
    
    
    $filter.on('click touch', '.webDevelopment',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.webDevelopment').fadeIn( 400 );
    
    });
    
    
    
    $filter.on('click touch', '.ecommerce',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.ecommerce').fadeIn( 400 );
     
    });
    
    
    
    $filter.on('click touch', '.marketingCollateral',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.marketingCollateral').fadeIn( 400 );
     
    });

    $filter.on('click touch', '.webApplication',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.webApplication').fadeIn( 400 );
     
    });

    $filter.on('click touch', '.seo',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');
      
      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.seo').fadeIn( 400 );
     
    });
    
    
  });
  

  //Testimonial Slider
  $('.testimoalSlider').slick({
    slidesToShow:2,
    slideToScroll: 1,
    autoplay:false,
    dots: true,
    arrows: false,
    responsive: [
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
       }
     },
     {
       breakpoint: 767,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       }
     }
     ],


  });


//Modal
// var modal = document.getElementById("lpModal");
// var span = document.getElementsByClassName("close")[0];

// $('.lpBtn').click(function(){
//   modal.style.display = "block";
// })
// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// burger menu
let burgerBtn = document.querySelector('.burger-btn')
let burgerMenu = document.querySelector('.burger-menu-wrapper')
burgerBtn.addEventListener('click', function(){
  burgerMenu.classList.toggle('show-menu');
  burgerBtn.classList.toggle('show-menu');
  })


//AOS
const pos = { x : 0, y : 0 };
const saveCursorPosition = function(x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
}

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })

//counter

$('.counter-count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});



