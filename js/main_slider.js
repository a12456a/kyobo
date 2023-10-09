var i=0;

function slide(){
    i++;
    if(i> $(".main_slide > li:last").index()){
        i=0;
    }
    $(".main_slide > li").eq(i).stop().fadeIn(1000);
    $(".main_slide > li").eq(i-1).stop().fadeOut(1000);
}

setInterval(slide, 2000);
