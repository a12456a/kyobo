$(function (){
    function prev (){
        $(".hit > li:last").prependTo(".hit ");
        $(".hit ").css("marginLeft","-293px");
        $(".hit ").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".hit > li:first").appendTo(".hit ");
        $(".hit").css("marginLeft", "0");
        $(".hit ").stop().animate({marginLeft:"-293px"});
    }

    $(".hit_swiper_controller > .swiper-button-prev").click(function(){
        prev();
    });
    $(".hit_swiper_controller> .swiper-button-next").click(function(){
        next();
    });

    setInterval(next, 3000);
});

$(function(){
    $(".hit_prod_area").hover(function(){
        $(this).find(".hit_info_box").css({"display":"block"});
        $(this).find(".hit_info_box .prod_name").css({"padding-top":"70px"});
    }, function(){
        $(this).find(".hit_info_box").css({"display":"none"});
    });
});