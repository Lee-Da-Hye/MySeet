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
     if(destination.index==2 || destination.index==3 || destination.index==5 || destination.index==6 || destination.index==7){
      $('.header').removeClass('up');
      $('#right_nav').removeClass('up');
     }else if(destination.index==0 || destination.index==1 ||destination.index==4){
      $('.header').addClass('up');
      $('#right_nav').addClass('up');
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
})//jq


// map

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

$(document).ready(function() {
  $('map[name="image-map"] area').click(function(e) {
    e.preventDefault();
    var markerId = $(this).attr('id');
    var popupId = 'popup' + markerId.substr(-1);
    var markerLabel = $('#marker' + markerId.substr(-1) + '-label');
    var popup = $('#' + popupId);

    // 팝업과 마커 레이블 초기화
    $('.popup').hide();
    $('.marker-label').removeClass('click');

    // 클릭한 마커에 대한 팝업과 마커 레이블 표시
    popup.show();
    markerLabel.addClass('click');

    // 이벤트 전파 중지
    e.stopPropagation();
  });

  $('map[name="image-map"] area').mouseover(function(){
    var markerId = $(this).attr('id');
    var markerLabel = $('#marker' + markerId.substr(-1) + '-label');
    markerLabel.addClass('hovered')
  })

  $('map[name="image-map"] area').mouseout(function(){
    var markerId = $(this).attr('id');
    var markerLabel = $('#marker' + markerId.substr(-1) + '-label');
    markerLabel.removeClass('hovered')
  })


  // 문서의 다른 부분 클릭 시

  $(document).click(function(e){
    if(!$(e.target).closest('map[name="image-map"]').length){
      $('.popup').hide();
      $('.marker-label').removeClass('click');
    }
  })
});

/*var markers = document.querySelectorAll('map[name="image-map"] area');
var markerLabels = document.querySelectorAll('.marker-label');

markers.forEach(function(marker) {
  marker.addEventListener('click', function(e) {
    e.preventDefault();
    var markerId = this.getAttribute('id');
    var popupId = 'popup' + markerId.substr(-1);
    var markerLabel = document.getElementById('marker' + markerId.substr(-1) + '-label');
    var popup = document.getElementById(popupId);

    // 모든 팝업을 일단 닫기
    document.querySelectorAll('.popup').forEach(function(popup) {
      popup.style.display = 'none';
    });

    // 모든 마커 레이블의 클래스 제거
    markerLabels.forEach(function(label) {
      label.classList.remove('hovered');
    });

    // 클릭된 마커에 해당하는 팝업 열기
    popup.style.display = 'block';

    // 클릭된 마커의 레이블 색상 변경
    markerLabel.classList.add('hovered');

    // 클릭된 마커의 이벤트 전파 방지
    e.stopPropagation();
  });
});

// close 버튼에 클릭 이벤트 추가
document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    // 부모 요소인 팝업을 찾아서 display 속성을 변경
    this.parentNode.style.display = 'none';

    // 닫힐 때 해당 마커 레이블의 클래스 제거
    var popupId = this.parentNode.id;
    var markerId = popupId.substr(5);
    var markerLabel = document.getElementById('marker' + markerId + '-label');
    markerLabel.classList.remove('hovered');
  });
});

// 마커 외의 다른 곳을 클릭할 때 마커 레이블의 색상 원래대로 변경
document.addEventListener('click', function(e) {
  if (!e.target.closest('.map-img')) {
    markerLabels.forEach(function(label) {
      label.classList.remove('hovered');
    });
  }
});*/

    

var copy1 = document.querySelector('.logos-slide').cloneNode(true);
var copy2 = document.querySelector('.logos-slide').cloneNode(true);

document.querySelector('.local-government').appendChild(copy1);
document.querySelector('.local-government').appendChild(copy2);

