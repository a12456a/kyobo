$(function (){
    function prev (){
        $(".pod > li:last").prependTo(".pod");
        $(".pod ").css("marginLeft","-273px");
        $(".pod ").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".pod > li:first").appendTo(".pod");
        $(".pod").css("marginLeft", "0");
        $(".pod").stop().animate({marginLeft:"-273px"});
    }

    $(".pod_wrap > .swiper-button-prev").click(function(){
        prev();
    });
    $(".pod_wrap > .swiper-button-next").click(function(){
        next();
    });
});