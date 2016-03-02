(function ($) {

    var n = $('.lettre-n'),
        i = $('.lettre-i'),
        c = $('.lettre-c'),
        o = $('.lettre-o'),
        l = $('.lettre-l'),
        a = $('.lettre-a'),
        s = $('.lettre-s'),
        d = $('.lettre-d'),
        e = $('.lettre-e'),
        v = $('.lettre-v'),
        a2 = $('.lettre-a2'),
        u = $('.lettre-u'),
        x = $('.lettre-x'),
        trois = $('.trois'),
        bat1 = $('#battery-1'),
        bat2 = $('#battery-2'),
        bat3 = $('#battery-3'),
        bat4 = $('#battery-4'),
        html = $('#html'),
        css = $('#css'),
        js = $('#js'),
        tlAnim,
        tlBattery,
        tlDomainName,
        time1,
        time2,
        domaine = $('.ndd-article'),
        $piedsRobot = $('#robot-foots'),
        $robot = $('#svg-robot'),
        $brasUn = $('#bras-1'),
        $brasDeux = $('#bras-2'),
        tlRobot,
        $burgerPart = $('.burger-part'),
        tlBurger,
        $siteQuality = $('.site-quality');

    TweenMax.staggerTo($siteQuality, 2, {rotationX: '90deg', ease:SteppedEase.config(1),repeat:-1, repeatDelay:1.5, delay:-1}, 2);

    tlBurger = new TimelineMax({
        repeat: -1,
        repeatDelay: 4
    });
    
    tlBurger
        .staggerFromTo($burgerPart, 0.8, {y: -100}, {y: 0, ease:Power3.easeIn}, 0.3);    

    tlRobot = new TimelineMax({
        repeat: -1,
        yoyo: true
    });

    tlRobot
        .to($robot, 5, {x: 400})
        .to($brasUn, 2, {rotation: '90deg', transformOrigin: 'center center'}, '-=5')
        .to($piedsRobot, 5, {rotationY: '1200deg', transformOrigin: 'center center'}, '-=5');

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

    tlDomainName = new TimelineMax({repeat:-1, repeatDelay: 4, yoyo: true, delay: 4});
    tlDomainName
        .to(domaine, 2, {
        text:{
            value:"www.mon-site.fr",
            newClass:"ndd-article-pink",
            oldClass:"ndd-article"
        }, ease: Linear.easeNone
    });

    tlCaddie = new TimelineMax({repeat:-1, repeatDelay: 4, yoyo: false, delay: 4});

    tlCaddie
        .fromTo($('.caddie'), 4, {x: 0}, {x: 800, ease: Back.easeOut.config(1.7), y: 0});

    tlServeur = new TimelineMax({repeat: 0, repeatDelay: 1, yoyo: false, delay: 0});

    $('#animation-play').on('click', function (e) {
        tlServeur
        .fromTo([html, css, js], 4, {x: 0, y: 0}, {x: 260, y: -120, ease: Power4.easeInOut})
        .fromTo([html, css, js], 4, {x: 260, y: -120}, {x: 520, y: 0, ease: Power4.easeInOut})
    });
    
})(jQuery);