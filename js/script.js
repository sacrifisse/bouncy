$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('header').toggleClass('bg');
        $('body').toggleClass('fixed-page');
    });
});