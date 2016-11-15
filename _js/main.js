(function ($) {

  var $i                  = $('.lettre-i'),
      $c                  = $('.lettre-c'),
      $o                  = $('.lettre-o'),
      $l                  = $('.lettre-l'),
      $a                  = $('.lettre-a'),
      $s                  = $('.lettre-s'),
      $d                  = $('.lettre-d'),
      $e                  = $('.lettre-e'),
      $v                  = $('.lettre-v'),
      $a2                 = $('.lettre-a2'),
      $u                  = $('.lettre-u'),
      $x                  = $('.lettre-x'),
      $trois              = $('.trois'),
      $html               = $('#html'),
      $css                = $('#css'),
      $js                 = $('#js'),
      tlAnim,
      tlDomainName,
      time1,
      $domaine            = $('.ndd-article'),
      $piedsRobot         = $('#robot-foots'),
      $robot              = $('#svg-robot'),
      $brasUn             = $('#bras-1'),
      tlRobot,
      $burgerPart         = $('.burger-part'),
      tlServeur,
      $responsiveDesktop  = $('#responsive_desktop'),
      $responsiveTablet   = $('#responsive_tablet'),
      $responsivePhone    = $('#responsive_phone'),
      $ciseauUn           = $('#ciseau-1'),
      $ciseauDeux         = $('#ciseau-2'),
      $speed              = $('#speedometer'),
      $serpUp             = $('#serp_up'),
      $serpDown           = $('#serp_down'),
      $serpLine           = $('.serp-line--low'),
      tlSiteOptimises,
      $pointer            = CSSRulePlugin.getRule('.plan-article:after');


  tlSiteOptimises = new TimelineMax({
    delay: 3,
    repeat: -1,
    repeatDelay: 4,
    yoyo: true
  });

  tlSiteOptimises
    .to($responsiveDesktop, 1, {morphSVG: $responsiveTablet, x: 80, ease: Bounce.easeOut})
    .to($responsiveDesktop, 1, {morphSVG: $responsivePhone, ease: Bounce.easeOut}, '+=1')
    .to($serpUp, 0.5, {x: '-=80'})
    .to($serpDown, 0.5, {x: '+=80'}, '-=0.5')
    .to($serpUp, 0.5, {y: -170})
    .to($serpDown, 0.5, {y: 60})
    .to($serpDown, 0.5, {x: '-=80'})
    .to($serpUp, 0.5, {x: '+=80'}, '-=0.5')
    .to($serpLine, 0.5, {stroke: '#018F6D'})
    .to($ciseauUn, 1, {rotation: '5deg', transformOrigin: '32% 50%'})
    .to($ciseauDeux, 1, {rotation: '-5deg', transformOrigin: '32% 50%'}, '-=1')
    .fromTo($speed, 1, {rotation: '0deg'}, {rotation: '90deg', transformOrigin: 'bottom left', ease: Bounce.easeInOut});

  TweenMax.staggerFromTo($burgerPart, 0.8, {y: -100}, {y: 0, ease: Power3.easeIn, repeat: -1, repeatDelay: 4}, 0.3);

  tlRobot = new TimelineMax({
    repeat: -1,
    yoyo: true
  });
  tlRobot
    .to($robot, 5, {x: 400})
    .to($brasUn, 2, {rotation: '90deg', transformOrigin: 'center center'}, '-=5')
    .to($piedsRobot, 5, {rotationY: '1200deg', transformOrigin: 'center center'}, '-=5');

  tlAnim = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true, delay: 2});
  time1  = .3;

  tlAnim
    .fromTo($l, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
    .fromTo($a, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
    .fromTo($s, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
    .fromTo($a2, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
    .fromTo($u, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
    .fromTo($x, time1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 20, ease: Power4.easeInOut})
    .fromTo($d, .2, {x: 0}, {x: -136, ease: Power4.easeInOut})
    .fromTo($e, .2, {x: 0}, {x: -136, ease: Power4.easeInOut})
    .fromTo($v, .2, {x: 0}, {x: -136, ease: Power4.easeInOut})
    .fromTo($i, .2, {x: 0}, {x: -4, ease: Power4.easeInOut})
    .fromTo($c, .2, {x: 0}, {x: -8, ease: Power4.easeInOut})
    .fromTo($o, .2, {x: 0}, {x: -12, ease: Power4.easeInOut})
    .to($d, .5, {x: -156, ease: Power4.easeInOut})
    .to($e, .5, {x: -162, ease: Power4.easeInOut})
    .to($v, .8, {x: -168, ease: Elastic.easeOut.config(1, 0.3)})
    .to($trois, .3, {autoAlpha: 1, ease: Power4.easeInOut})
    .to($trois, 2, {autoAlpha: 1, x: -270, rotationY: 380, ease: Power4.easeInOut});

  tlDomainName = new TimelineMax({repeat: -1, repeatDelay: 4, yoyo: true, delay: 4});
  tlDomainName
    .to($domaine, 2, {
      text: {
        value: "www.mon-site.fr",
        newClass: "ndd-article-pink",
        oldClass: "ndd-article"
      }, ease: Linear.easeNone
    });


  TweenMax.fromTo($('.caddie'), 4, {x: 0}, {x: 800, ease: Back.easeOut.config(1.7), y: 0, repeat: -1, repeatDelay: 4, yoyo: false, delay: 4});

  tlServeur = new TimelineMax({repeat: 0, repeatDelay: 1, yoyo: false, delay: 0});

  $('#animation-play').on('click', function (e) {
    tlServeur
      .fromTo([$html, $css, $js], 4, {x: 0, y: 0}, {x: 260, y: -120, ease: Power4.easeInOut})
      .fromTo([$html, $css, $js], 4, {x: 260, y: -120}, {x: 520, y: 0, ease: Power4.easeInOut})
  });

  TweenMax.to($pointer, 2, {cssRule: {top: "35%", rotation: '-40deg', ease:Power2.easeIn, delay: 4}});

})(jQuery);