$(function () {

  $(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 2; // 이벤트를 발생시킬 스크롤의 이동 범위
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 0); // 스크롤이 멈춘 후 동작이 실행되기 까지의 딜레이

    function hasScrolled() {
      var st = $(this).scrollTop(); // 현재 window의 scrollTop 값

      // delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
      if (Math.abs(lastScrollTop - st) <= delta)
        return;

      if (st > lastScrollTop && st > navbarHeight) {
        // 스크롤을 내렸을 때
        $("header").hide(); // header 숨기기
      } else {
        // 스크롤을 올렸을 때
        if (st + $(window).height() < $(document).height()) {
          $("header").css("border-bottom", "1px solid #ddd");
          $("header").show(); // header 보이기
        }
      }
      lastScrollTop = st; // 현재 멈춘 위치를 기준점으로 재설정
    }
  })

  $('.header .left a').on('click', function (e) {
    e.preventDefault()
    $('.gnb').toggleClass('on')
  })

  $('.gnb>li:first-child i').on('click', function (e) {
    e.preventDefault()
    $('.gnb').removeClass('on')
    $('.gnb>li>a').find('i').removeClass('on')
  })

  $('.gnb>li>a').on('click', function (e) {
    e.preventDefault()
    $(this).find('i').toggleClass('on')
    $(this).next().toggleClass('on')
    $(this).parent().siblings().find('ul').removeClass('on')
  })

  $('#bgndVideo').YTPlayer({
    videoURL: 'https://youtu.be/hY_MqM-owAU',
    containment: '.main_visual',
    autoPlay: true,
    mute: true,
    startAt: 1,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: true,
  });

  $(window).scroll(function () {
    var height = $(document).scrollTop();
    var current = $('.slick-current')
    if (height > '750') {
      current.addClass('on').siblings().removeClass('on')
    }
  })

  $('.science .content_slide').on('afterChange', function (e, s, c) {
    var idx = s.currentSlide;
    var current = $('.slick-current')
    current.addClass('on').siblings().removeClass('on')
    $('.science .tab li').eq(idx).addClass('on').siblings().removeClass('on')
    $('.science .text div').eq(idx).addClass('on').siblings().removeClass('on')
  })

  $('.science .content_slide').slick({
    slidestoShow: 1,
    slidesToScroll: 1,
    arrows: false,
  })

  $('.science .control>div:nth-child(1)').on('click', function () {
    $('.science .content_slide').slick('slickPrev')
  })

  $('.science .control>div:nth-child(2)').on('click', function () {
    $('.science .content_slide').slick('slickNext')
  })

  $('#e_video').YTPlayer({
    videoURL: 'https://youtu.be/7ugxdDstCX8',
    containment: '#e_video',
    autoPlay: true,
    mute: true,
    startAt: 0,
    stopAt: 2.5,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: true,
  });

  $('#p_video').YTPlayer({
    videoURL: 'https://youtu.be/GG_IfnEBG8I',
    containment: '#p_video',
    autoPlay: true,
    mute: true,
    startAt: 5,
    stopAt: 8,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: true,
  });

  $('.select_slide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    dots: false,
    speed: 5000,
    centerMode: true,
    variableWidth: true,
    cssEase: "linear",
  })

  $('#category').change(function () {
    var idx = $(this).children('option:selected').index();
    $('.select p:nth-child(2) select').eq(idx).addClass('on').siblings().removeClass('on')
  })

  $('.product_slide').slick({
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '260px',
    focusOnSelect: true,
  })


  $('.product .tab li').on('click', function (e) {
    e.preventDefault();
    var idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    $('.product .product_slide').slick('slickGoTo', 0);
    $('.product .product_slide').eq(idx).addClass('on').siblings().removeClass('on')
  })


  $('.product .control>div:nth-child(1)').on('click', function () {
    $('.product .product_slide').slick('slickPrev')
  })

  $('.product .control>div:nth-child(2)').on('click', function () {
    $('.product .product_slide').slick('slickNext')
  })


  $('.deco .tab figure').on('click', function () {
    var idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    $('.deco .tab_content figure').eq(idx).addClass('on').siblings().removeClass('on')
  })

  $('.deco .tab_content .circle').on('mouseover', function () {
    $(this).addClass('on').siblings().removeClass('on')
  })

})