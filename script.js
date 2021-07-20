// Show Nav bar and go to button
if ($(window).scrollTop() > 10) {
    $('header .top-bar-container').addClass('fixed');
    $('header .banner').css('paddingTop', $('header .top-bar').innerHeight());
    $('.go-to-top-icon').fadeIn();

} else {
    $('header .banner').css('paddingTop', '0');
    $('header .top-bar-container').removeClass('fixed');
    $('.go-to-top-icon').fadeOut();
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('header .top-bar-container').addClass('fixed');
        $('header .banner').css('paddingTop', $('header .top-bar').innerHeight());
        $('.go-to-top-icon').fadeIn();
    } else {
        $('header .top-bar-container').removeClass('fixed');
        $('header .banner').css('paddingTop', '0');
        $('.go-to-top-icon').fadeOut();
    }
})