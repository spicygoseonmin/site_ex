$(document).ready(function () {
  $.ajax({
    url: "gallery.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      // console.log(data)
      data.forEach(function (item, index) {
        // console.log(item)
        // console.log(index)
        let imgInfo = `
                <div class="gallery_item">
                <img src="${item.img}" alt="${item.title}">
                <div class="item_desc">
                    <h1>${item.title}</h1>
                    <p>${item.dec}</p>
                </div>
                </div>
                `;
        // console.log(imgInfo)
        $(".gallery_wrap").append(imgInfo);
        // 클릭시 detail 아이템 추가
        let detailItem = `
                    <div class="gallery_detail">
                    <div class="gallery_detail_wrap">
                    <div class="detail_left">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <div class="detail_right">
                    <div class="content">
                        <h1 class="detail_title">${item.title}</h1>
                        <div class="title_line"></div>
                        <p class="detail_sub">${item.info}</p>
                    </div>
                    </div>
                    <span>×</span>
                    </div>
                    </div>`;
            $(".gallery_wrap").append(detailItem);
      });
    //   아이템을 클릭했을때 디테일 내용이 나옴
    $(".gallery_item").click(function(){
        $(this).next(".gallery_detail").show();
    })
    $(".gallery_detail span").click(function(){
        $(".gallery_detail").hide();
    })
    },
    error: function (status, error) {
      console.error("오류:", status, error);
    },
  });
});
