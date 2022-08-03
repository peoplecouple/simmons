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
    //$('.s_menu').slideUp();
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

  $('.science .content_slide').slick({
    slidestoShow: 1,
    slidesToScroll: 1,
    // arrows:false,
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

})