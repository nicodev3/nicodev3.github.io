!function(e){var a,o,t,r,s,n,l,i,u=e(".lettre-n"),y=e(".lettre-i"),p=e(".lettre-c"),m=e(".lettre-o"),x=e(".lettre-l"),c=e(".lettre-a"),f=e(".lettre-s"),w=e(".lettre-d"),d=e(".lettre-e"),O=e(".lettre-v"),T=e(".lettre-a2"),I=e(".lettre-u"),g=e(".lettre-x"),P=e(".trois"),h=e(".pile-level"),b=e("#tool-svg"),A=e("#masonery_block_1"),v=e("#masonery_block_2"),M=e("#masonery_block_3"),_=e("#masonery_block_4"),k=e("#html"),D=e("#css"),B=e("#js"),C=e(".ndd-article"),S=e("#robot-foots"),j=e("#svg-robot"),q=e("#bras-1"),z=e(".burger-part"),E=e("#responsive_desktop"),F=e("#responsive_tablet"),G=e("#responsive_phone"),L=e("#podium-star"),N=e("#ciseau-1"),R=e("#ciseau-2"),V=e("#speedometer");l=new TimelineMax({repeat:-1,repeatDelay:3}),l.to(E,1,{morphSVG:F,x:80,ease:Bounce.easeOut}).to(E,1,{morphSVG:G,ease:Bounce.easeOut},"+=1").to(L,1.4,{bezier:{type:"quadratic",values:[{x:-50,y:-30},{x:-125,y:-40},{x:-180,y:20}],autoRotate:90}}).to(L,1,{bezier:{type:"quadratic",values:[{x:-180,y:0},{x:-100,y:-20},{x:-80,y:-10}]}}).to(L,1,{scale:1.2,ease:Elastic.easeInOut.config(1.2,.4)}).fromTo(V,1,{rotation:"0deg"},{rotation:"90deg",transformOrigin:"bottom left",ease:Bounce.easeInOut}),TweenMax.to(N,1,{rotation:"5deg",transformOrigin:"32% 50%",yoyo:!0,repeat:-1}),TweenMax.to(R,1,{rotation:"-5deg",transformOrigin:"32% 50%",yoyo:!0,repeat:-1}),a=new TimelineMax({repeat:-1,repeatDelay:4}),a.staggerFromTo(h,.5,{fill:"#fff"},{fill:"#c8518d"},.8).to(b,.6,{scale:"0.5",ease:Bounce.easeIn},"+=1").to(b,.6,{scale:"1.7",ease:Bounce.easeOut}).to(M,.3,{y:51,ease:Power3.easeIn},"+=1").to(v,.6,{fill:"none"}).to(_,.3,{y:51,ease:Power3.easeIn}).to(A,.3,{x:62,ease:Power3.easeIn}),i=new TimelineMax({repeat:-1,yoyo:!0}),n=new TimelineMax({repeat:-1,repeatDelay:4}),n.staggerFromTo(z,.8,{y:-100},{y:0,ease:Power3.easeIn},.3),s=new TimelineMax({repeat:-1,yoyo:!0}),s.to(j,5,{x:400}).to(q,2,{rotation:"90deg",transformOrigin:"center center"},"-=5").to(S,5,{rotationY:"1200deg",transformOrigin:"center center"},"-=5"),o=new TimelineMax({repeat:-1,repeatDelay:2,yoyo:!0,delay:2}),r=.3,o.fromTo(x,r,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(c,r,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(f,r,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(T,r,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(I,r,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(g,r,{autoAlpha:1,y:0},{autoAlpha:0,y:20,ease:Power4.easeInOut}).fromTo(w,.2,{x:0},{x:-136,ease:Power4.easeInOut}).fromTo(d,.2,{x:0},{x:-136,ease:Power4.easeInOut}).fromTo(O,.2,{x:0},{x:-136,ease:Power4.easeInOut}).fromTo(y,.2,{x:0},{x:-6,ease:Power4.easeInOut}).fromTo(p,.2,{x:0},{x:-10,ease:Power4.easeInOut}).fromTo(m,.2,{x:0},{x:-14,ease:Power4.easeInOut}).to(w,.5,{x:-156,ease:Power4.easeInOut}).to(d,.5,{x:-162,ease:Power4.easeInOut}).to(O,.8,{x:-168,ease:Elastic.easeOut.config(1,.3)}).to([u,y,p,m,w,d,O],.5,{backgroundColor:"#fff",borderRadius:0,ease:Linear.easeNone}).to(P,.3,{autoAlpha:1,ease:Power4.easeInOut}).to(P,2,{autoAlpha:1,x:-270,rotationY:380,ease:Power4.easeInOut}),t=new TimelineMax({repeat:-1,repeatDelay:4,yoyo:!0,delay:4}),t.to(C,2,{text:{value:"www.mon-site.fr",newClass:"ndd-article-pink",oldClass:"ndd-article"},ease:Linear.easeNone}),tlCaddie=new TimelineMax({repeat:-1,repeatDelay:4,yoyo:!1,delay:4}),tlCaddie.fromTo(e(".caddie"),4,{x:0},{x:800,ease:Back.easeOut.config(1.7),y:0}),tlServeur=new TimelineMax({repeat:0,repeatDelay:1,yoyo:!1,delay:0}),e("#animation-play").on("click",function(e){tlServeur.fromTo([k,D,B],4,{x:0,y:0},{x:260,y:-120,ease:Power4.easeInOut}).fromTo([k,D,B],4,{x:260,y:-120},{x:520,y:0,ease:Power4.easeInOut})})}(jQuery);