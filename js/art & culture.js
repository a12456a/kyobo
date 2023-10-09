$(function (){
    function prev (){
        $(".art_and > li:last").prependTo(".art_and ");
        $(".art_and ").css("marginLeft","-273px");
        $(".art_and ").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".art_and  > li:first").appendTo(".art_and ");
        $(".art_and ").css("marginLeft", "0");
        $(".art_and ").stop().animate({marginLeft:"-273px"});
    }

    $(".art_wrap > .swiper-button-prev").click(function(){
        prev();
    });
    $(".art_wrap > .swiper-button-next").click(function(){
        next();
    });
});