(function ($) {

    var $n = $('.lettre-n'),
        $i = $('.lettre-i'),
        $c = $('.lettre-c'),
        $o = $('.lettre-o'),
        $l = $('.lettre-l'),
        $a = $('.lettre-a'),
        $s = $('.lettre-s'),
        $d = $('.lettre-d'),
        $e = $('.lettre-e'),
        $v = $('.lettre-v'),
        $a2 = $('.lettre-a2'),
        $u = $('.lettre-u'),
        $x = $('.lettre-x'),
        $trois = $('.trois'),

        $pileLevel = $('.pile-level'),
        $tool = $('#tool-svg'),
        $masoneryBlockOne = $('#masonery_block_1'),
        $masoneryBlockTwo = $('#masonery_block_2'),
        $masoneryBlockThree = $('#masonery_block_3'),
        $masoneryBlockFour = $('#masonery_block_4'),
        tlCompetences,

        $html = $('#html'),
        $css = $('#css'),
        $js = $('#js'),
        tlAnim,
        tlDomainName,
        time1,
        $domaine = $('.ndd-article'),
        $piedsRobot = $('#robot-foots'),
        $robot = $('#svg-robot'),
        $brasUn = $('#bras-1'),
        tlRobot,
        $burgerPart = $('.burger-part'),
        tlBurger,
        $responsiveDesktop = $('#responsive_desktop'),
        $responsiveTablet = $('#responsive_tablet'),
        $responsivePhone = $('#responsive_phone'),
        $podiumStar = $('#podium-star'),
        $ciseauUn = $('#ciseau-1'),
        $ciseauDeux = $('#ciseau-2'),
        $speed = $('#speedometer'),
        tlSiteResponsive,
        tlSiteQuality;

  tlSiteResponsive = new TimelineMax({
    repeat: -1,
    repeatDelay: 3
  });

  tlSiteResponsive
    .to($responsiveDesktop, 1, {morphSVG: $responsiveTablet, x:80, ease: Bounce.easeOut})
    .to($responsiveDesktop, 1, {morphSVG: $responsivePhone, ease: Bounce.easeOut}, '+=1')
    .to($podiumStar, 1.4, {bezier: {type:"quadratic",
    values: [{x:-50,y:-30},{x:-125,y:-40},{x:-180,y:20}],
    autoRotate:90
  }})
    .to($podiumStar, 1, {bezier: {type: "quadratic",
    values: [{x: -180, y: 0},{x: -100, y: -20},{x: -80, y: -10}]}})
    .to($podiumStar, 1, {scale:1.2, ease: Elastic.easeInOut.config(1.2, 0.4)})
    .fromTo($speed, 1, {rotation: '0deg'}, {rotation: '90deg', transformOrigin: 'bottom left', ease:Bounce.easeInOut});

  TweenMax.to($ciseauUn, 1, {rotation: '5deg', transformOrigin: '32% 50%', yoyo:true, repeat:-1});
  TweenMax.to($ciseauDeux, 1, {rotation: '-5deg', transformOrigin: '32% 50%', yoyo:true, repeat:-1});

  tlCompetences = new TimelineMax({repeat: -1, repeatDelay: 4});

  tlCompetences
    .staggerFromTo($pileLevel, 0.5, {fill: "#fff"}, {fill: '#c8518d'}, 0.8)
    .to($tool, .6, {scale: '0.5', ease: Bounce.easeIn}, '+=1')
    .to($tool, .6, {scale: '1.7', ease: Bounce.easeOut})
    .to($masoneryBlockThree, 0.3, {y: 51, ease: Power3.easeIn}, '+=1')
    .to($masoneryBlockTwo, 0.6, {fill: 'none'})
    .to($masoneryBlockFour, 0.3, {y: 51, ease: Power3.easeIn})
    .to($masoneryBlockOne, 0.3, {x: 62, ease: Power3.easeIn});

  tlSiteQuality = new TimelineMax({
      repeat: -1,
      yoyo: true
    });




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
        .fromTo($l, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo($a, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo($s, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo($a2, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo($u, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo($x, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
        .fromTo($d,.2, {x: 0}, {x: -136, ease: Power4.easeInOut})
        .fromTo($e,.2, {x: 0}, {x: -136, ease: Power4.easeInOut})
        .fromTo($v,.2, {x: 0}, {x: -136, ease: Power4.easeInOut})
        .fromTo($i,.2, {x: 0}, {x: -6, ease: Power4.easeInOut})
        .fromTo($c,.2, {x: 0}, {x: -10, ease: Power4.easeInOut})
        .fromTo($o,.2, {x: 0}, {x: -14, ease: Power4.easeInOut})
        .to($d, .5, {x: -156, ease: Power4.easeInOut})
        .to($e, .5, {x: -162, ease: Power4.easeInOut})
        .to($v, .8, {x: -168, ease: Elastic.easeOut.config(1, 0.3)})
        .to([$n, $i, $c, $o, $d, $e, $v], .5, {backgroundColor: "#fff", borderRadius: 0, ease: Linear.easeNone})
        .to($trois, .3 , {autoAlpha: 1, ease: Power4.easeInOut })
        .to($trois, 2, {autoAlpha: 1, x: -270, rotationY: 380, ease: Power4.easeInOut });

    tlDomainName = new TimelineMax({repeat:-1, repeatDelay: 4, yoyo: true, delay: 4});
    tlDomainName
        .to($domaine, 2, {
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
        .fromTo([$html, $css, $js], 4, {x: 0, y: 0}, {x: 260, y: -120, ease: Power4.easeInOut})
        .fromTo([$html, $css, $js], 4, {x: 260, y: -120}, {x: 520, y: 0, ease: Power4.easeInOut})
    });
    
})(jQuery);