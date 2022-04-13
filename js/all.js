$(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示按鈕
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        if ($(".back-top").hasClass("hide")) {
          $(".back-top").toggleClass("hide");
        }
      } else {
        $(".back-top").addClass("hide");
      }
    });
});
<script>
        new WOW().init();
</script>