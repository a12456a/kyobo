$(document).ready(function(){
    $(".banner_group_list").find("li").eq(0).mouseover(function(){
    $(".main_slide li").eq(0).fadeIn();
    $(".main_slide li").eq(0).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
    
  });
  $(".banner_group_list").find("li").eq(1).mouseover(function(){
    $(".main_slide li").eq(1).fadeIn();
    $(".main_slide li").eq(1).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
    
    
  });
  $(".banner_group_list").find("li").eq(2).mouseover(function(){
    $(".main_slide li").eq(2).fadeIn();
    $(".main_slide li").eq(2).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
  });
  $(".banner_group_list").find("li").eq(3).mouseover(function(){
    $(".main_slide li").eq(3).fadeIn();
    $(".main_slide li").eq(3).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
  });
  $(".banner_group_list").find("li").eq(4).mouseover(function(){
    $(".main_slide li").eq(4).fadeIn();
    $(".main_slide li").eq(4).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
  });
  $(".banner_group_list").find("li").eq(5).mouseover(function(){
    $(".main_slide li").eq(5).fadeIn();
    $(".main_slide li").eq(5).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
  });
  $(".banner_group_list").find("li").eq(6).mouseover(function(){
    $(".main_slide li").eq(6).fadeIn();
    $(".main_slide li").eq(6).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
  });
  $(".banner_group_list").find("li").eq(7).mouseover(function(){
    $(".main_slide li").eq(7).fadeIn();
    $(".main_slide li").eq(7).siblings().fadeOut();
    $(this).find("button").addClass("active");
    $(this).siblings().find("button").removeClass("active");
  });

  });

var i=0;
function slide(){
    i++;
    if(i> $(".main_slide > li:last").index()){
        i=0;
    }
    $(".main_slide > li").eq(i).stop().fadeIn(1000);
    $(".main_slide > li").eq(i-1).stop().fadeOut(1000);
}

setInterval(slide, 4000);

var i=0;
$(document).ready(function(){
          $(".header_swiper-button-prev").click(function(){
      i--;
      $(".main_slide li").eq(i).fadeIn();
      $(".main_slide li").eq(i+1).fadeOut();
    });

          $(".header_swiper-button-next").click(function(){
      i++;
      $(".main_slide li").eq(i).fadeIn();
      $(".main_slide li").eq(i-1).fadeOut();
    });

});

