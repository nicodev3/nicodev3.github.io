function onReady() {

    var anim = $('.anim-path');
    TweenMax.fromTo(anim, 6, {
        drawSVG: "0 0%"
    }, {
        drawSVG: "0% 100%"
    });

    $(document).ready(onReady);
}