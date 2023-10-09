$(function (){
    function prev (){
        $(".hit > li:last").prependTo(".hit ");
        $(".hit ").css("marginLeft","-276px");
        $(".hit ").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".hit > li:first").appendTo(".hit ");
        $(".hit").css("marginLeft", "0");
        $(".hit ").stop().animate({marginLeft:"-276px"});
    }

    $(".hit_swiper_controller > .swiper-button-prev").click(function(){
        prev();
    });
    $(".hit_swiper_controller> .swiper-button-next").click(function(){
        next();
    });
});