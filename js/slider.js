/**
 * Created by Przemek on 2017-01-22.
 */
$(function () {
    $('.slider-track').slick({
        prevArrow: $('.arr-left'),
        nextArrow: $('.arr-right'),
        infinite: true,
        speed: 500,
        //fade: true,
        //cssEase: 'linear'
    });
});