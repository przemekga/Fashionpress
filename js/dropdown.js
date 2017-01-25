/**
 * Created by Przemek on 2017-01-25.
 */
$(function () {
   $('.burger').on('click', function () {
       $('.navigation').slideToggle(300);
   });

    $('#products-menu').on('click', function () {
        $('.side-menu').slideToggle(200);
    })
});