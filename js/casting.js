$(function(){
    var i=0;
function backNext (){
    i++;
    if(i > $(".casting_blur > ul > li:last").index()){
        i=0;
    }
    $(".casting_blur > ul > li").eq(i).stop().fadeIn();
    $(".casting_blur > ul > li").eq(i-1).stop().fadeOut();
    $(".casting_banner_area_wrap").eq(i).stop().fadeIn();
    $(".casting_banner_area_wrap").eq(i-1).stop().fadeOut();
}

var a=0;
function backPrev (){
    a--;
    if(a < $(".casting_blur > ul > li:first").index()){
        a=0;
    }
    $(".casting_blur > ul > li").eq(a-1).stop().fadeIn();
    $(".casting_blur > ul > li").eq(a).stop().fadeOut();
    $(".casting_banner_area_wrap").eq(a-1).stop().fadeIn();
    $(".casting_banner_area_wrap").eq(a).stop().fadeOut();
}

$(".casting_swiper_control_box > .swiper-button-prev").click(function(){
    backPrev();
});
$(".casting_swiper_control_box > .swiper-button-next").click(function(){
    backNext();
});
});

/**동그란 슬라이드**/
$(function (){
    function prev (){
        $(".casting_post_list > li:last").prependTo(".casting_post_list ");
        $(".casting_post_list").css("marginLeft","-273px");
        $(".casting_post_list ").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".casting_post_list > li:first").appendTo(".casting_post_list");
        $(".casting_post_list ").css("marginLeft", "0");
        $(".casting_post_list").stop().animate({marginLeft:"-273px"});
    }

    $(".casting_post_wrap > .swiper-button-prev").click(function(){
        prev();
    });
    $(".casting_post_wrap > .swiper-button-next").click(function(){
        next();
    });
});
/**배경글 보이게 하기**/
$(function(){
    $(".post_item").hover(function(){
        $(this).find(".post_info_area").css({"display":"block"});
        $(this).find(".post_title").css({"padding-top":"110px"});
    }, function(){
        $(this).find(".post_info_area").css({"display":"none"});
    });
});

