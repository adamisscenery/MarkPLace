$(function(){

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true,
    });

    $('.featured-product__wrapper').slick({
      arrows: true,
      infinite: true,
      prevArrow: '<button class="featured__slick-arrow featured__slick-prev"><span class="lnr lnr-chevron-left featured__arrow"></span></button>',
      nextArrow: '<button class="featured__slick-arrow featured__slick-next"><span class="lnr lnr-chevron-right featured__arrow"></span></button>',
    });

    $('.slider-product__inner').slick({
      infinite: true,
      arrows: true,
      prevArrow: '<button class="slider-slick-arrow slider-slick-prev"><span class="lnr lnr-chevron-left featured__arrow"></span></button>',
      nextArrow: '<button class="slider-slick-arrow slider-slick-next"><span class="lnr lnr-chevron-right featured__arrow"></span></button>',
      slidesToShow: 3,
      slidesToScroll: 3
    });

    $('.category-product__filter').on('click', function(){
      $('.category-product__hover').slideToggle();
    });

    var mixer = mixitup('.category-product__wrapper');

});
