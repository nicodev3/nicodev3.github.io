(function ($) {

    var trois = $('.trois'),
        nicodev = $('.trig'),
        tlAnim;

    tlAnim = new TimelineMax({repeat: -1, repeatDelay: .5});

    tlAnim.fromTo(trois, 5, {autoAlpha: 0, xPercent: '1000'}, {
        autoAlpha: 1,
        xPercent: '-1000',
        ease: Power4.easeInOut
    });

})(jQuery);