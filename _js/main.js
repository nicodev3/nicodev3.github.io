(function ($) {

    var trois = $('.trois'),
        nicodev = $('.trig'),
        tlAnim;



    tlAnim = new TimelineMax({repeat: -1, repeatDelay: .5});

    tlAnim
        .set([trois, nicodev], {autoAlpha: 0})
        .fromTo(nicodev, 2, {autoAlpha: 0, xPercent: '-1000'}, {autoAlpha: 1, xPercent: '0', ease: Power4.easeInOut})
        .add('nicodevIn')
        .fromTo(trois, 3, {autoAlpha: 0, xPercent: '3000'}, {autoAlpha: 1, xPercent: '-48', ease: Power4.easeInOut})
        .;

})(jQuery);