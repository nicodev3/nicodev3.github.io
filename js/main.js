!function(e){var o,a,t,r,s,n,l,i=e(".lettre-i"),u=e(".lettre-c"),y=e(".lettre-o"),p=e(".lettre-l"),w=e(".lettre-a"),m=e(".lettre-s"),x=e(".lettre-d"),c=e(".lettre-e"),d=e(".lettre-v"),g=e(".lettre-a2"),O=e(".lettre-u"),f=e(".lettre-x"),T=e(".trois"),I=e("#html"),P=e("#css"),h=e("#js"),A=e(".ndd-article"),M=e("#robot-foots"),v=e("#svg-robot"),D=e("#bras-1"),S=e(".burger-part"),b=e("#responsive_desktop"),k=e("#responsive_tablet"),B=e("#responsive_phone"),_=e("#ciseau-1"),C=e("#ciseau-2"),F=e("#speedometer"),R=e("#serp_up"),j=e("#serp_down"),E=e(".serp-line--low");CSSRulePlugin.getRule(".plan-article:after");n=new TimelineMax({repeat:-1,repeatDelay:4,yoyo:!0}),n.staggerFromTo(e(".compemeter"),2,{widht:"0"},{width:"100%",ease:Power3.easeInOut},.3),l=new TimelineMax({delay:3,repeat:-1,repeatDelay:4,yoyo:!0}),l.to(b,1,{morphSVG:k,x:80,ease:Bounce.easeOut}).to(b,1,{morphSVG:B,ease:Bounce.easeOut},"+=1").to(R,.5,{x:"-=80"}).to(j,.5,{x:"+=80"},"-=0.5").to(R,.5,{y:-170}).to(j,.5,{y:60}).to(j,.5,{x:"-=80"}).to(R,.5,{x:"+=80"},"-=0.5").to(E,.5,{stroke:"#018F6D"}).to(_,1,{rotation:"5deg",transformOrigin:"32% 50%"}).to(C,1,{rotation:"-5deg",transformOrigin:"32% 50%"},"-=1").fromTo(F,1,{rotation:"0deg"},{rotation:"90deg",transformOrigin:"bottom left",ease:Bounce.easeInOut}),TweenMax.staggerFromTo(S,.8,{y:-100},{y:0,ease:Power3.easeIn,repeat:-1,repeatDelay:4},.3),r=new TimelineMax({repeat:-1,yoyo:!0}),r.to(v,5,{x:400}).to(D,2,{rotation:"90deg",transformOrigin:"center center"},"-=5").to(M,5,{rotationY:"1200deg",transformOrigin:"center center"},"-=5"),o=new TimelineMax({repeat:-1,repeatDelay:2,yoyo:!0,delay:2}),t=.3,o.fromTo(p,t,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(w,t,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(m,t,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(g,t,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(O,t,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(f,t,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(x,.2,{x:0},{x:-136,ease:Power4.easeInOut}).fromTo(c,.2,{x:0},{x:-136,ease:Power4.easeInOut}).fromTo(d,.2,{x:0},{x:-136,ease:Power4.easeInOut}).fromTo(i,.2,{x:0},{x:-4,ease:Power4.easeInOut}).fromTo(u,.2,{x:0},{x:-8,ease:Power4.easeInOut}).fromTo(y,.2,{x:0},{x:-12,ease:Power4.easeInOut}).to(x,.5,{x:-156,ease:Power4.easeInOut}).to(c,.5,{x:-162,ease:Power4.easeInOut}).to(d,.8,{x:-168,ease:Elastic.easeOut.config(1,.3)}).to(T,.3,{autoAlpha:1,ease:Power4.easeInOut}).to(T,2,{autoAlpha:1,x:-270,rotationY:380,ease:Power4.easeInOut}),a=new TimelineMax({repeat:-1,repeatDelay:4,yoyo:!0,delay:4}),a.to(A,2,{text:{value:"www.mon-site.fr",newClass:"ndd-article-pink",oldClass:"ndd-article"},ease:Linear.easeNone}),TweenMax.fromTo(e(".caddie"),4,{x:0},{x:800,ease:Back.easeOut.config(1.7),y:0,repeat:-1,repeatDelay:4,yoyo:!1,delay:4}),s=new TimelineMax({repeat:0,repeatDelay:1,yoyo:!1,delay:0}),e("#animation-play").on("click",function(e){s.fromTo([I,P,h],4,{x:0,y:0},{x:260,y:-120,ease:Power4.easeInOut}).fromTo([I,P,h],4,{x:260,y:-120},{x:520,y:0,ease:Power4.easeInOut})}),TweenMax.to(e("#pointer"),2,{cssRule:{top:"35%",rotation:"-40deg",ease:Power2.easeIn,delay:4}});var G=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:"#trigger1"}).setTween(e("#scroll-trigger"),.5,{scale:1,ease:Bounce.easeOut}).addTo(G)}(jQuery);