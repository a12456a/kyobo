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

$(function () {
    // 모든 버튼에 대한 클릭 이벤트 핸들러
    $(".new_tag_list .category_item .btn_categoty").click(function () {
        // 모든 버튼의 스타일 초기화
        $(".new_tag_list .category_item .btn_categoty .text").css({ "color": "#767676", "font-weight": "400" });
        $(".new_tag_list .category_item .btn_categoty .text .btn_categoty::before").css("opacity", "0");
        
        // 모든 버튼의 "green_dot" 클래스 제거
        $(".new_tag_list .category_item .btn_categoty").removeClass("green_dot");

        // 클릭된 버튼에 스타일 적용
        $(this).find(".text").css({ "color": "#474c98", "font-weight": "700" });
        $(this).find(".btn_categoty::before").css("opacity", "1");
        
        // 클릭된 버튼에 "green_dot" 클래스 추가
        $(this).addClass("green_dot");

        $(".category_item").click(function(){
            $(".welcome_prod_swiper_wrap").hide();
            let index = $(this).index();
            $(".welcome_prod_swiper_wrap:eq( "+ index +" )").show();
        });
    });
});