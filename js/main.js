$(function () {

  $('.header .left a').on('click', function (e) {
    e.preventDefault()
    $('.gnb').toggleClass('on')
  })

  $('.gnb>li:first-child i').on('click', function (e) {
    e.preventDefault()
    $('.gnb').removeClass('on')
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


  // $(window).scroll(function () {

  //   var height = $(document).scrollTop();
  //   if ('1800' > height > '900') {
  //     $('.science .content_slide').on('init afterChange', function (e, s, c) {
  //       var idx = s.currentSlide;
  //       var current = $('.slick-current')

  //       $('.science .tab li').eq(idx).addClass('on').siblings().removeClass('on')
  //       $('.science .text div').eq(idx).addClass('on').siblings().removeClass('on')
  //       current.addClass('on').siblings().removeClass('on')
  //     })
  //   }
  // })

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
    //pauseOnHover:false,
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
    // autoplay: true,
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
})