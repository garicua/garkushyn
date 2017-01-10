
<!--responsive menu-->
    $(document).ready(function(){
        var touch = $('#touch-menu');
        var menu = $('.main-header__menu');

        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 760 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

// slider
$(document).ready(function(){
    $('.bxslider').bxSlider();
});

<!--anchor links-->
$(document).ready(function(){
        $(".loader__btn").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
<!--hideme-->
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(){

        var bottom_of_object = $(this).position().top + 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({
                'opacity':'1'

            },1000);
        }
    });
});

// Animation for START PAGE
$(function() {
    span = $('.garkushyn span'),
    g = $('.garkushyn span:nth-child(1)'),
    a = $('.garkushyn span:nth-child(2)'),
    r = $('.garkushyn span:nth-child(3)'),
    k = $('.garkushyn span:nth-child(4)'),
    u = $('.garkushyn span:nth-child(5)'),
    s = $('.garkushyn span:nth-child(6)'),
    h = $('.garkushyn span:nth-child(7)'),
    y = $('.garkushyn span:nth-child(8)'),
    n = $('.garkushyn span:nth-child(9)'),
    btn= $('.loader__btn'),
    tl = new TimelineMax();

    tl
        .to(span, 2, {autoAlpha:1, ease:Power1.easeOut})
        .from(g, 1, {top:60, left: 311, ease:Power1.easeOut},'-=1')
        .from(a, 1, {top:-180, left: -174, ease:Power1.easeOut},'-=1')
        .from(r, 1, {top:-227, left: -311, ease:Power1.easeOut},'-=1')
        .from(k, 1, {top:-62, left: 62, ease:Power1.easeOut},'-=1')
        .from(u, 1, {top:1, left:-421, ease:Power1.easeOut},'-=1')
        .from(s, 1, {top:-159, left:84, ease:Power1.easeOut},'-=1')
        .from(h, 1, {top:186, left:-389, ease:Power1.easeOut},'-=1')
        .from(y, 1, {top:1, left:-421, ease:Power1.easeOut},'-=1')
        .from(n, 1, {top:0, left:100, ease:Power1.easeOut},'-=1')
        .to(btn, 2, {autoAlpha:1, top: '67%', ease:Power1.easeOut},'=1')
        // .from(g, .7, {x: -25, autoAlpha: 0, ease:Power1.easeOut})

    // .from(g, 1, {rotation: 360, transformOrigin: '50% 50%', autoAlpha: 0, ease:Power1.easeOut},'-=0.5')
	//
    // .from(h5, 2, {text:"", ease:Power0.easeNone})
        // .fromTo(btn, 0.7,
        //     {x: -25, autoAlpha: 0},
        //     {x: 0, autoAlpha: 1, ease:Power1.easeOut})
});

// Animation for TEAM
$(function() {
        // team = $('.team'),
        h2 = $('#team'),
        js1 = $('.team__item:nth-child(2)'),
        html5= $('.team__item:nth-child(1)'),
        css3 = $('.team__item:nth-child(3)'),
        links = $('.team ul li ul li a'),
        scrollMagicController = new ScrollMagic(),
        tlTeam = new TimelineMax();

    tlTeam
        .from(h2, 0.5, {text:"", ease:Power0.easeNone})
        .from(js1, 2, {autoAlpha:0, ease:Power1.easeOut})
        .from(html5, 1, {top:-180, right: -300, autoAlpha:0,  ease: Expo.easeOut, y: -500},'-=1')
        .from(css3, 1, {top:-180, left: -300, autoAlpha:0, ease: Expo.easeOut, y: -500},'-=1')
        // .from(links, 1, { autoAlpha:0, ease:Power1.easeOut})
        .staggerFrom(links, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.4)

    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
        triggerElement: '.team',
        reverse: false,
        offset: 0 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tlTeam)
        .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
    // scene.addIndicators();
});




// Animation for WITH HELP
$(function() {
        h2 = $('#help'),
        help1 = $('.team__help:nth-child(1)'),
        help2 = $('.team__help:nth-child(2)'),
        help3 = $('.team__help:nth-child(3)'),
        help4 = $('.team__help:nth-child(4)'),
        scrollMagicController = new ScrollMagic(),

        tlHelp = new TimelineMax();

    tlHelp
        .from(h2, 0.5, {text:"", ease:Power0.easeNone})
        .from(help1, 1, {autoAlpha:0, left: 200, ease:Power1.easeOut})
        .from(help4, 1, {autoAlpha:0, left: -200, ease:Power1.easeOut}, '=-1')
        .from(help2, 0.75, {autoAlpha:0, right: 50, ease:Power1.easeOut})
        .from(help3, 0.75, {autoAlpha:0, right: -50, ease:Power1.easeOut}, '=-0.75')
    
    var scene = new ScrollScene({
        triggerElement: '.team__help',
        reverse: false,
        offset: -150 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tlHelp)
        .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
    // scene.addIndicators();


});

// Animation for Partners
$(function() {
        h2 = $('#partners'),
        partners = $('.partners__item'),       
        scrollMagicController = new ScrollMagic(),

        tlPartners = new TimelineMax();

    tlPartners
        .from(h2, 0.5, {text:"", ease:Power0.easeNone})
        .from(partners, 1, {autoAlpha:0, top: -50, ease:Power1.easeOut})

    // .from(help4, 1, {autoAlpha:0, left: -200, ease:Power1.easeOut}, '=-1')
        // .from(help2, 0.75, {autoAlpha:0, right: 50, ease:Power1.easeOut})
        // .from(help3, 0.75, {autoAlpha:0, right: -50, ease:Power1.easeOut}, '=-0.75')

    var scene = new ScrollScene({
        triggerElement: '.partners',
        reverse: false,
        offset: 0 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
    // scene.addIndicators();


});
