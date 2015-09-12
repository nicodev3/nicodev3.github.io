(function ($) {

    var n = $('.n'),
        i = $('.i'),
        c = $('.c'),
        o = $('.o'),
        l = $('.l'),
        a = $('.a'),
        s = $('.s'),
        d = $('.d'),
        e = $('.e'),
        v = $('.v'),
        a2 = $('.a2'),
        u = $('.u'),
        x = $('.x'),
        trois = $('.trois'),
        bat1 = $('#battery-1'),
        bat2 = $('#battery-2'),
        bat3 = $('#battery-3'),
        bat4 = $('#battery-4'),
        tlAnim,
        tlBattery,
        time1,
        time2;


    tlAnim = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true, delay: 2});
    time1 = .3;

    tlAnim
        .fromTo(l, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo(a, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo(s, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo(a2, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo(u, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo(x, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo(d,.2, {x: 0}, {x: -136, ease: Power4.easeInOut})
        .fromTo(e,.2, {x: 0}, {x: -136, ease: Power4.easeInOut})
        .fromTo(v,.2, {x: 0}, {x: -136, ease: Power4.easeInOut})
        .fromTo(i,.2, {x: 0}, {x: -6, ease: Power4.easeInOut})
        .fromTo(c,.2, {x: 0}, {x: -10, ease: Power4.easeInOut})
        .fromTo(o,.2, {x: 0}, {x: -14, ease: Power4.easeInOut})
        .to(d, .5, {x: -156, ease: Power4.easeInOut})
        .to(e, .5, {x: -162, ease: Power4.easeInOut})
        .to(v, .8, {x: -168, ease: Elastic.easeOut.config(1, 0.3)})
        .to([n, i, c, o, d, e, v], .5, {backgroundColor: "#D3D39E", borderRadius: 0, ease: Linear.easeNone})
        .to(trois, .3 , {autoAlpha: 1, ease: Power4.easeInOut })
        .to(trois, 2, {autoAlpha: 1, x: -270, rotationY: 380, ease: Power4.easeInOut });

    tlBattery = new TimelineMax({repeat: -1, repeatDelay: 6, yoyo: false, delay: 1});

    tlBattery
        .to(bat1,.3, {autoAlpha: 1,  ease: Power4.easeInOut})
        .to(bat2,.3, {autoAlpha: 1,  ease: Power4.easeInOut})
        .to(bat3,.3, {autoAlpha: 1,  ease: Power4.easeInOut})
        .to(bat4,.3, {autoAlpha: 1,  ease: Power4.easeInOut})
    ;

})(jQuery);