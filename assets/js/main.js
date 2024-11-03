 AOS.init();

// Navigation

$(".menu").click(function () {
    var menuitem = $(".navigation > .navigator").length;

    if ($(".navigation").hasClass("open")) {
        for (var i = 1; i <= menuitem; i++) {
            $(".navigation .navigator:nth-child(" + i + ")").css("transition", "all .1s linear ." + i + "s  ")
        }
        $(".navigation.open").css("transition", "all .2s linear ." + (menuitem + 1) + "s ");
        $(".navigation").toggleClass("open");

    } else {
        $(".navigation").toggleClass("open");
        for (var i = 1; i <= menuitem; i++) {
            $(".navigation .navigator:nth-child(" + i + ")").css("transition", "all .1s linear ." + i + "s  ");
            $(".navigation").css("transition", "all .2s linear .0s ");

        }
    }
})


// navigation scrolled

window.addEventListener('scroll', function() {
    const branding = document.querySelector('.branding');
  
    // Add 'scrolled' class when scrolled down
    if (window.scrollY > 0) {
      branding.classList.add('scrolled');
    } else {
      branding.classList.remove('scrolled');
    }
  });
  


// Index Product Slider

$(document).ready(function(){
    $('.product-slick-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button class="slick-prev">←</button>',  // Custom left arrow
      nextArrow: '<button class="slick-next">→</button>',  // Custom right arrow
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  

// New Arrival Slider

$(document).ready(function(){
    $('.new-arrival-slide').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.new-arrival .prev-arrow'),  // Custom left arrow
      nextArrow: $('.new-arrival .next-arrow'),  // Custom right arrow
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  

  // collection-slide

$(document).ready(function(){
    $('.collection-slide').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.new-arrival .prev-arrow'),  // Custom left arrow
      nextArrow: $('.new-arrival .next-arrow'),  // Custom right arrow
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  