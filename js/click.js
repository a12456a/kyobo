$(function(){
    $(".btn_brand_more").hover(function(){
        $(".brand_more_list_box").css("display","block");
    }, function(){
        $(".brand_more_list_box").css("display","none");
    });
});

$(function () {
    var isAnbOpen = false; // 초기 상태는 닫혀있음을 나타냅니다.

    $(".btn_anb").click(function () {
        $(".anb_area").stop().toggle(function () {
            if ($(".anb_area").is(":visible")) {
                // anb_area가 열렸을 때
                $(".anb_area").css({ "display": "block" });
                $(".btn_anb").css({ "background-image": "url('../img/btn_anb_open_active@2x.png')" });
                isAnbOpen = true; // 상태 업데이트
            } else {
                // anb_area가 닫혔을 때
                if (isAnbOpen) {
                    $(".btn_anb").css({ "background-image": "url('../img/btn_anb_open@2x.png')" });
                    isAnbOpen = false; // 상태 업데이트
                }
            }
        });
    });
});