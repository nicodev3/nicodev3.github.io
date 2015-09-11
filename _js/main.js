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
        tlAnim,
        time1,
        time2;


    tlAnim = new TimelineMax({repeat: 0, repeatDelay: .5});
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
        .to([n, i, c, o, d, e, v], .5, {backgroundColor: "#D3D39E", ease: Linear.easeNone})
        .to(trois, .8, {autoAlpha: 1, x: -270, ease: Power4.easeInOut });

})(jQuery);