// main.js

$(function(){

  // gnb 열기
  $('.btn-toggle').on('click', function(){
    $('#gnb').addClass('show');
    console.log('click');
  });

  // gnb 닫기
  $('.btn-close').on('click', function(){
    $('#gnb').removeClass('show');
  });

  // url 파라미터 값 확인(synop = 1 ?)
  var val = location.href.substr(
    location.href.lastIndexOf('=') + 1
  );
  // 시놉시스 페이지면 팝업창 출력 및 메뉴 active
  if(val == 1) {
    $('#synop_popup').addClass('show');
    $('#gnb ul li').removeClass('active');
    $('#gnb ul li').eq(2).addClass('active');
    $('.header_box').css('display', 'none');
    $('title').text('STORY | FINDING DORY |도리를 찾아서');
  } else {
    $('#synop_popup').removeClass('show');
  }  

  // 갤러리 이미지 클릭시 변경하기
  $('#main > .thumb > li').on('click', function(){
    // 이미지 주소값 읽기
    let getUrl = $(this).find('img').attr('src');
    console.log(getUrl);
    // 이미지 쓰기
    $('#main > figure > img').attr('src', getUrl);
  })


});