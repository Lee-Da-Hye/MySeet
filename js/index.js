$(function(){
  //섹션 1의 슬라이더 bxslider

  $(".slider1").bxSlider({
    auto: true,
    mode:'fade',
    pager: false,
    autoControls: true,
    autoControlsCombine: true,


    onSlideBefore:function($slideElement, oldIndex, newIndex){
      //슬라이드 넘어가기 직전
      $slideElement.children('img').removeClass('on')
    },
    onSlideAfter:function($slideElement, oldIndex, newIndex){
      $slideElement.children('img').addClass('on');
      $('.count').text(newIndex+1);
    },
  })


  // 섹션1 슬라이더 이미지 사이즈

  let winWidth=$(window).innerWidth();
  let winHeight = $(window).innerHeight();
  $('.slider1 img').width(winWidth+(winWidth*0.3));
  $('.slider1 img').height(winHeight+(winHeight*0.3));

  // fullpagel

  $('#fullpage').fullpage({
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    menu:'#right_nav',
    slidesNavigation: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage','sixthPage','seventhPage','eighthPage','lastPage'],

    afterRender: function(){
    $('.slogon_title').delay(200).animate({top:'50px', opacity:1}, 800)
    $('.slogon_txt').delay(1200).animate({top:'50px', opacity:1}, 800)
    },

    afterLoad: function(origin, destination, direction, trigger){
     if(destination.index==2 || destination.index==3 || destination.index==5 || destination.index==7){
      $('.header').removeClass('up');
      $('#left_nav').removeClass('up');
     }else if(destination.index==0 || destination.index==1 ||destination.index==4 || destination.index==6){
      $('.header').addClass('up');
      $('#left_nav').addClass('up');
     }


     //1,3번 섹션의 내용 보이게 하기
     if(destination.index==1){
      $('.section2 .inner').animate({paddingTop:'100px', opacity:1})
     }else if(destination.index==3){
      $('.section4 .inner').animate({paddingTop:'100px', opacity:1})
     }
    }//end: afterLoad 콜백
  });//end fullpage




  // 섹션2 슬라이드 slick 슬라이더
  $('.slider2').slick({
    dots: true,
    autoplay:true,
    speed: 300,
    autoplaySpeed:2000,
    arrow: false,
    
  })

  $('.play').on('click', function(){
    $('.slider2').slick('slickPlay')
  })
  $('.pause').on('click', function(){
    $('.slider2').slick('slickPause')
  })


  // gnb

  $('.gnb').on('mouseenter',function(){
    $('.header').addClass('on');
    $('.gnb_bg').stop().slideDown();
    $('.dep2').stop().slideDown();
  })
  $('.pop_notice, .section, .util, #logo').on('mouseenter',function(){
    $('.header').removeClass('on');
    $('.gnb_bg').stop().slideUp();
    $('.dep2').stop().slideUp();
  })

/*섹션5 슬라이더 swiper*/
    // Initialize Swiper.js inside FullPage.js
    new Swiper('.information-swiper-Swiper', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 3000, // Adjust autoplay delay as needed
      },
      pagination: {
        el: '.swiper-pagination', // Pagination element
        clickable: true // Enable navigation through pagination
      },
    });


  $(".slider3").bxSlider({
    minSlides: 3,
    maxSlides: 5,
    slideWidth: 282,
    slideMargin: 5,
    pager: false,
  });

// $('.slider4').bxSlider({
//     minSlides: 5,
//     maxSlides: 10,
//     slideWidth: 170,
//     auto: true, 
//     controls: false,
//     speed: 5000,
//     pause: 0,
//     infiniteLoop:true,
//     pager:false,
//   });



})//jq



var markers = document.querySelectorAll('map[name="image-map"] area');
markers.forEach(function(marker) {
  marker.addEventListener('click', function(e) {
    e.preventDefault();
    var markerId = this.getAttribute('id');
    var popupId = 'popup' + markerId.substr(-1);

    // 모든 팝업을 일단 닫기
    document.querySelectorAll('.popup').forEach(function(popup) {
      popup.style.display = 'none';
    });

    // 클릭된 마커에 해당하는 팝업 열기
    document.getElementById(popupId).style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    // 부모 요소인 팝업을 찾아서 display 속성을 변경
    this.parentNode.style.display = 'none';
  });
});

    

var copy1 = document.querySelector('.logos-slide').cloneNode(true);
var copy2 = document.querySelector('.logos-slide').cloneNode(true);

document.querySelector('.local-government').appendChild(copy1);
document.querySelector('.local-government').appendChild(copy2);

