$(function (){
    function prev (){
        $(".event_big_swiper > ul > li:last").prependTo(".event_big_swiper > ul");
        $(".event_big_swiper > ul").css("marginLeft","-1200px");
        $(".event_big_swiper > ul").stop().animate({marginLeft:"0"},"slow");
    }

    function next (){
        $(".event_big_swiper > ul").stop().animate({marginLeft:"-1200px"}, 800, function(){
            $(".event_big_swiper > ul > li:first").appendTo(".event_big_swiper > ul");
            $(".event_big_swiper > ul").css("marginLeft", "0");
        });
    }

    $(".swiper_control_box > .swiper-button-prev").click(function(){
        prev();
    });
    $(".swiper_control_box > .swiper-button-next").click(function(){
        next();
    });

    setInterval(next, 3000);
});

$(function () {
    // 모든 버튼에 대한 클릭 이벤트 핸들러
    $(".event_list .category_item .btn_categoty").click(function () {
        // 모든 버튼의 스타일 초기화
        $(".event_list .category_item .btn_categoty .text").css({ "color": "#767676", "font-weight": "400" });
        $(".event_list .category_item .btn_categoty .text .btn_categoty::before").css("opacity", "0");
        
        // 모든 버튼의 "green_dot" 클래스 제거
        $(".event_list .category_item .btn_categoty").removeClass("green_dot");

        // 클릭된 버튼에 스타일 적용
        $(this).find(".text").css({ "color": "#474c98", "font-weight": "700" });
        $(this).find(".btn_categoty::before").css("opacity", "1");
        
        // 클릭된 버튼에 "green_dot" 클래스 추가
        $(this).addClass("green_dot");

        $(".category_item").click(function(){
            $(".event_big_swiper").hide();
            let index = $(this).index();
            $(".event_big_swiper:eq( "+ index +" )").show();
        });
    });
});

$("#welcome_event .category_item:first").trigger("click");
