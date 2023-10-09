$(function(){
    function prev (){
        $(".thumb_list > li:last").prependTo(".thumb_list");
        $(".thumb_list").css("marginLeft","-142px");
        $(".thumb_list").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".thumb_list > li:first").appendTo(".thumb_list");
        $(".thumb_list").css("marginLeft", "0");
        $(".thumb_list").stop().animate({marginLeft:"-142px"});
    }

    var i=0;
    function nnext (){
        i++;
        if(i> $(".today_choice > li:last").index()){
            i=0;
        }
        $(".today_choice > li").eq(i).stop().fadeIn(500);
        $(".today_choice > li").eq(i-1).stop().fadeOut(500);
    }

    var a=0;
    function pprev (){
        a--;
        if(a < $(".today_choice > li:first").index()){
            a=4;
        }
        $(".today_choice > li").eq(a-1).stop().fadeIn(500);
        $(".today_choice > li").eq(a).stop().fadeOut(500);
    }

    $(".expand_related_book_wrap > .swiper-button-next ").click(function(){
        next();
        nnext();
    });

    $(".expand_related_book_wrap > .swiper-button-prev").click(function(){
        prev();
        pprev();
    });
});