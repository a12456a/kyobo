$(function (){
    function prev (){
        $(".new_topic > li:last").prependTo(".new_topic ");
        $(".new_topic").css("marginLeft","-247px");
        $(".new_topic").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".new_topic > li:first").appendTo(".new_topic");
        $(".new_topic").css("marginLeft", "0");
        $(".new_topic").stop().animate({marginLeft:"-247px"});
    }

    $(".welcome_prod_swiper_wrap > .swiper-button-prev").click(function(){
        prev();
    });
    $(".welcome_prod_swiper_wrap > .swiper-button-next").click(function(){
        next();
    });
});