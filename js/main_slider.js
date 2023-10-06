$(function(){
 var i=0;
 $(".banner_control_inner li").click(function(e){
    e.preventDefault();
    $(this).addClass("under_dash").css("color","#000");
    $(this).siblings().removeClass().css("color","gray");
});
});