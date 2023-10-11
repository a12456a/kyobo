$(function(){
    function prev (){
        $(".thumb_list > li:last").prependTo(".thumb_list");
        $(".thumb_list").css("marginLeft","-157px");
        $(".thumb_list").stop().animate({marginLeft:"0"},1000);
    }

    function next (){
        $(".thumb_list > li:first").appendTo(".thumb_list");
        $(".thumb_list").css("marginLeft", "0");
        $(".thumb_list").stop().animate({marginLeft:"-157px"});
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

$(function () {
    // 모든 버튼에 대한 클릭 이벤트 핸들러
    $(".today_choice_list .category_tag_item .btn_categoty").click(function () {
        // 모든 버튼의 스타일 초기화
        $(".today_choice_list .category_tag_item .btn_categoty .text").css({ "color": "#767676", "font-weight": "400" });
        $(".today_choice_list .category_tag_item .btn_categoty .text .btn_categoty::before").css("opacity", "0");
        
        // 모든 버튼의 "green_dot" 클래스 제거
        $(".today_choice_list .category_tag_item .btn_categoty").removeClass("green_dot");

        // 클릭된 버튼에 스타일 적용
        $(this).find(".text").css({ "color": "#474c98", "font-weight": "700" });
        $(this).find(".btn_categoty::before").css("opacity", "1");
        
        // 클릭된 버튼에 "green_dot" 클래스 추가
        $(this).addClass("green_dot");
        
        $(".category_tag_item").click(function(){
            $(".showcase_template_wrap").hide();
            let index = $(this).index();
            $(".showcase_template_wrap:eq( "+ index +" )").show();
        });

    });
});

// $(document).ready(function(){
//     $(".category_tag_item").trigger("click");
// });