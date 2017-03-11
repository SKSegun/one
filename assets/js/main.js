/*
$(".section_one .container p:nth-child(1)").click(function(){
$(".menu").slideToggle(300)
});
$("section_one .container p:nth-child(2)").click(function(){
  $(".menu").slideDown(300)
}); */
//комент на одну страко
/* на много

1000 это секунда 300 0.3сек
*/

$('.slick').slick({
  infinite: true,
  slidesToShow: 1,
  slideToScroll: 1,
  speed: 800,
  autoplaySpeed: 2500,
  autoplay:true
});
