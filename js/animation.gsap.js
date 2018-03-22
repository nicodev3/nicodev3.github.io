!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,w,h){"use strict";var n="animation.gsap",o=window.console||{},t=Function.prototype.bind.call(o.error||o.log||function(){},o);e||t("("+n+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),w||t("("+n+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var p,d=this,g=function(){d._log&&(Array.prototype.splice.call(arguments,1,0,"("+n+")","->"),d._log.apply(this,arguments))};d.on("progress.plugin_gsap",function(){f()}),d.on("destroy.plugin_gsap",function(e){d.removeTween(e.reset)});var f=function(){if(p){var e=d.progress(),n=d.state();p.repeat&&-1===p.repeat()?"DURING"===n&&p.paused()?p.play():"DURING"===n||p.paused()||p.pause():e!=p.progress()&&(0===d.duration()?0<e?p.play():p.reverse():d.tweenChanges()&&p.tweenTo?p.tweenTo(e*p.duration()):p.progress(e).pause())}};d.setTween=function(e,n,o){var t;1<arguments.length&&(arguments.length<3&&(o=n,n=1),e=w.to(e,n,o));try{(t=h?new h({smoothChildTiming:!0}).add(e):e).pause()}catch(e){return g(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),d}if(p&&d.removeTween(),p=t,e.repeat&&-1===e.repeat()&&(p.repeat(-1),p.yoyo(e.yoyo())),d.tweenChanges()&&!p.tweenTo&&g(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),p&&d.controller()&&d.triggerElement()&&2<=d.loglevel()){var r=w.getTweensOf(d.triggerElement()),i=d.controller().info("vertical");r.forEach(function(e,n){var o=e.vars.css||e.vars;if(i?void 0!==o.top||void 0!==o.bottom:void 0!==o.left||void 0!==o.right)return g(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1})}if(1.14<=parseFloat(TweenLite.version))for(var a,l,s=p.getChildren?p.getChildren(!0,!0,!1):[p],c=function(){g(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},u=0;u<s.length;u++)a=s[u],l!==c&&(l=a.vars.onOverwrite,a.vars.onOverwrite=function(){l&&l.apply(this,arguments),c.apply(this,arguments)});return g(3,"added tween"),f(),d},d.removeTween=function(e){return p&&(e&&p.progress(0).pause(),p.kill(),p=void 0,g(3,"removed tween (reset: "+(e?"true":"false")+")")),d}})});