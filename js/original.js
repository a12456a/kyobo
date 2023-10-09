$(function (){
    function prev (){
        $(".original > li:last").prependTo(".original");
        $(".original").css("marginLeft","-273px");
        $(".original").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".original > li:first").appendTo(".original");
        $(".original").css("marginLeft", "0");
        $(".original").stop().animate({marginLeft:"-273px"});
    }

    $(".original_wrap > .swiper-button-prev").click(function(){
        prev();
    });
    $(".original_wrap > .swiper-button-next").click(function(){
        next();
    });
});