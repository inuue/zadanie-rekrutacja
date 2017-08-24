$(document).ready(function() {
  menu();
  carouselSpa();
  carouselKonf();
  backTop();
  checkbox();
  dropdown();
});
$(window).resize(function(){
  menuRwd();
})
window.onscroll = function(e) {
  navbar();
}


function menu() {
  $('.hamburger').click(function(){
      $('.hamb1, .hamb2, .hamb3').toggleClass('click');
      $(this).toggleClass('x');
      $('.navbar').toggleClass('open');
      $('.navbar').toggleClass('closed');
      $('.nav.left, .nav.right').slideToggle(1000);
      $('.nav.left, .nav.right').toggleClass('open');
      var menuItems = $('.nav.left.open > li, .nav.right.open > li');
      TweenMax.staggerFrom(menuItems, 1, { top:5, opacity:0, delay: 0.2, ease:Power4.easeOut}, 0.1);
    });
}
function menuRwd() {
  if ($(document).width() < 992) {
     $('.nav.left, .nav.right').css('display', 'none');
     $('.nav.left, .nav.right').removeClass('open');
     $('.hamb1, .hamb2, .hamb3').removeClass('click');
     $('.navbar').removeClass('open');
  } else if ($(document).width() > 992) {
    $('.nav.left, .nav.right').css('display', 'inline-block');
  }
}
function navbar() {
  var nav = $('.navbar');
  if ($(window).scrollTop() > 150) {
    $(nav).addClass('scrolled');
  } else {
    $(nav).removeClass('scrolled');
  }
}
function dropdown() {
  if($(document).width() < 992) {
    $('.drop').click(function(){
      $(this).find('.drop-menu').slideToggle(500);
    });
  }
  }
function carouselSpa() {
  var pause = false;
    $('#spaPause').click(function(){
      if (pause == false){
        $("#spaCarousel").carousel("pause");
        $('#spaPause').find('img').attr('src', 'img/play.svg');
        pause = true;
      } else {
        $("#spaCarousel").carousel("cycle");
        $('#spaPause').find('img').attr('src', 'img/pause.svg');
        pause = false;
    }
  });
}

function carouselKonf() {
  var pause = false;
    $('#konfPause').click(function(){
      if (pause == false){
        $("#konfCarousel").carousel("pause");
        $('#konfPause').find('img').attr('src', 'img/play.svg');
        pause = true;
      } else {
        $("#konfCarousel").carousel("cycle");
        $('#konfPause').find('img').attr('src', 'img/pause.svg');
        pause = false;
    }
  });
}

function backTop() {
  var btn = $('#backTop');
  btn.click(function(){
    $('html, body').animate({scrollTop:0}, 2000);
  })

}

function checkbox() {
  var checkbtn = $("input:checkbox");
  $('#checker').click(function(){
    checkbtn.click();
    $('.checkMark').fadeToggle(200);
  })
}
