$(function (){
    function prev (){
        $(".up > li:last").prependTo(".up ");
        $(".up ").css("marginLeft","-273px");
        $(".up ").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".up  > li:first").appendTo(".up ");
        $(".up ").css("marginLeft", "0");
        $(".up ").stop().animate({marginLeft:"-273px"});
    }

    $(".fluid_swiper_wrap > .swiper-button-prev").click(function(){
        prev();
    });
    $(".fluid_swiper_wrap > .swiper-button-next").click(function(){
        next();
    });
});