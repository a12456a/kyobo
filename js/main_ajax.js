/**오늘의 선택**/
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "심리", size: "50" },
    headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
  }).done(function (data) {
    console.log(data);
    $(".today_choice_con li").each(function (i) {
      const bookData = data.documents[i];
      let imageUrl = bookData.thumbnail;
  
      $(".prod_thumb_box img").eq(i).attr("src", imageUrl);
      $(".thumb_item img").eq(i).attr("src", imageUrl);
      $(".prod_info_box .prod_name").eq(i).text(bookData.title);
      $(".small_info_box .prod_name").eq(i).text(bookData.title);
      $(".prod_info_box .prod_author").eq(i).text(bookData.authors);
      $(".prod_info_box .val").eq(i).text(bookData.sale_price);
      $(".prod_info_box .prod_md_comment_desc").eq(i).text(bookData.contents);
    });
  });

    /**급상승!**/
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "시대", size: "10" },
        headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
      }).done(function (data) {
        console.log(data);
        $(".many_see li").each(function (i) {
          const bookData = data.documents[i];
          let imageUrl = bookData.thumbnail;
      
          $(this).find("img").attr("src", imageUrl);
          $(this).find(".prod_name").text(bookData.title);
          $(this).find(".prod_author").text(bookData.authors);
        });
      });

/**화제의 신상**/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "바람", size: "50" },
    headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
  }).done(function (data) {
    console.log(data);
    $(".new_topic li").each(function (i) {
      const bookData = data.documents[i];
      let imageUrl = bookData.thumbnail;
  
      $(this).find("img").attr("src", imageUrl);
      $(this).find(".prod_name").text(bookData.title);
      $(this).find(".prod_author").text(bookData.authors);
    });
  });

/**이 주의 책**/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "누구", size: "10" },
    headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
  }).done(function (data) {
    console.log(data);
    $(".this_book li").each(function (i) {
      const bookData = data.documents[i];
      let imageUrl = bookData.thumbnail;
  
      $(this).find("img").attr("src", imageUrl);
      $(this).find(".prod_name").text(bookData.title);
      $(this).find(".prod_author").text(bookData.authors);
      $(this).find(".val").text(bookData.sale_price);
    });
});

/**베스트 | 스테디**/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "도시", size: "50" },
    headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
  }).done(function (data) {
    console.log(data);
    $(".best_steady_wrap li").each(function (i) {
      const bookData = data.documents[i];
      let imageUrl = bookData.thumbnail;
  
      $(this).find("img").attr("src", imageUrl);
      $(this).find(".prod_name").text(bookData.title);
      $(this).find(".prod_author").text(bookData.authors);
      $(this).find(".val").text(bookData.sale_price);
    });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "삶", size: "20" },
  headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
}).done(function (data) {
  console.log(data);
  $(".best_steady_wrap_sec li").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;

    $(this).find("img").attr("src", imageUrl);
    $(this).find(".prod_name").text(bookData.title);
    $(this).find(".prod_author").text(bookData.authors);
    $(this).find(".val").text(bookData.sale_price);
  });
});

/**교보 오리지널**/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인간", size: "10" },
    headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
  }).done(function (data) {
    console.log(data);
    $(".original_wrap li").each(function (i) {
      const bookData = data.documents[i];
      let imageUrl = bookData.thumbnail;
  
      $(this).find("img").attr("src", imageUrl);
      $(this).find(".prod_name").text(bookData.title);
      $(this).find(".prod_author").text(bookData.authors);
    });
});

/**POD 주문형 출판**/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "좋아", size: "10" },
    headers: { Authorization: "KakaoAK 15ed7c82bbbbaf0b20d5580da99f6e0d" },
  }).done(function (data) {
    console.log(data);
    $(".pod_wrap .pod li").each(function (i) {
      const bookData = data.documents[i];
      let imageUrl = bookData.thumbnail;
  
      $(this).find("img").attr("src", imageUrl);
      $(this).find(".prod_name").text(bookData.title);
      $(this).find(".prod_author").text(bookData.authors);
    });
});