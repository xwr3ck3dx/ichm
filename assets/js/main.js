$('.dropdown').mouseenter(function(){
    $('.dropdown-menu').addClass('show');
})
$('.dropdown-menu').mouseleave(function(){
    $('.dropdown-menu').toggleClass('show');
})