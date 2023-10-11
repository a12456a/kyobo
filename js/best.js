$(function () {
    // 모든 버튼에 대한 클릭 이벤트 핸들러
    $(".best_tag_list .category_item .btn_categoty").click(function () {
        // 모든 버튼의 스타일 초기화
        $(".best_tag_list .category_item .btn_categoty .text").css({ "color": "#767676", "font-weight": "400" });
        $(".best_tag_list .category_item .btn_categoty .text .btn_categoty::before").css("opacity", "0");
        
        // 모든 버튼의 "green_dot" 클래스 제거
        $(".best_tag_list .category_item .btn_categoty").removeClass("green_dot");

        // 클릭된 버튼에 스타일 적용
        $(this).find(".text").css({ "color": "#474c98", "font-weight": "700" });
        $(this).find(".btn_categoty::before").css("opacity", "1");
        
        // 클릭된 버튼에 "green_dot" 클래스 추가
        $(this).addClass("green_dot");

        $(".category_item").click(function(){
            $(".best_steady_wrap").hide();
            let index = $(this).index();
            $(".best_steady_wrap:eq( "+ index +" )").show();
        });
    });
});

$(function(){
    $(".btn_title_toggle").click(function(){
        $(this).css({"color":"#000"});
        $(this).siblings().css("color","#767676");
    });
});