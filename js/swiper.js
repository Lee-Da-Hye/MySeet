var swiper = new Swiper(".rental-method-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 80,
  autoplay:true,
  delay:5000,
  disableOnInteraction: false,
});
$('.rental-method-Swiper').on('mouseover', function(){
  swiper.autoplay.stop();
});
$('.rental-method-Swiper').on('mouseout', function(){
  swiper.autoplay.start();
})
