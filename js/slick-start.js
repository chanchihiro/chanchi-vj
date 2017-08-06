$(document).ready(function(){
  $(".slider").slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: ".slider-thumb" //サムネイルのクラス名
  });
  $('.slider-thumb').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      asNavFor: '.thumb-item', //スライダー本体のクラス名
      focusOnSelect: true,
  });
  console.log("きたぞ！")
});