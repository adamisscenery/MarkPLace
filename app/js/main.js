$(function(){

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true,
    });

    $('.big-slider__wrapper').slick({
      arrows: true,
      infinite: true,
      prevArrow: '<button class="big-slide__slick-arrow big-slide__slick-prev"><span class="lnr lnr-chevron-left big-slide__arrow"></span></button>',
      nextArrow: '<button class="big-slide__slick-arrow big-slide__slick-next"><span class="lnr lnr-chevron-right big-slide__arrow"></span></button>',
    });

    $('.category__inner-block-filter').on('click', function(){
      $('.category__inner-block-filter-hover').slideToggle();
    });

    var mixer = mixitup('.category__wrapper-block');

});
