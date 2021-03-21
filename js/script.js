// スクロールイベント
// トップに戻る
$(function () {
  $('.header-logo-link').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
// お問い合わせﾍﾟｰｼﾞまでスクロールする
$(function () {
  var position = $('#contact-wrapper').offset().top;
  $('.nav-btn').click(function () {
    $('html, body').animate({ scrollTop: position }, 500);
    return false;
  });
});
// ページ内リンクまでスクロール
$(function () {
  var headerHeight = 100;
  $('[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHeight;
    $('html, body').animate({ scrollTop: position }, 500);
    return false;
  });
});
// ハンバーガーメニュー
$(function () {
  // ハンバーガーボタンをクリックした際
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive');
    // ハンバーガーメニューが非表示の場合
    if ($(this).attr('aria-expanded') == 'false') {
      // メニューを表示する
      $(this).attr('aria-expanded', 'true');
      $('#js-global-menu').attr('area-hidden', 'false');
    } else {
      // メニューを非表示する
      $(this).attr('aria-expanded', 'false');
      $('#js-global-menu').attr('area-hidden', 'true');
    }
    // メニューリンクのクリックでドロワーを閉じる
    $('nav a').click(function () {
      if (window.innerWidth <= 768) {
        $('#js-hamburger').click();
      }
    });
  });
  // ドロワー背景クリックでドロワーを閉じる
  $('.drawer-background').click(function () {
    $('body').toggleClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
  });
});

// アコーディオン機能
$(function () {
  $('.js-Accordion-open').on('click', function () {
    $(this).next().slideToggle();
  });
});
// スライダー機能
$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
    },
    autoHeight: true,
    effect: "slide",
    speed: 500,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 55,
    centeredSlides: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
});
// フォーム誤発信防止機能
$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});
// フォーム送信後画面制御機能
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGvHiuLXzET0pO6kc3Np4RJGyKWbiRKZ5ows1PtyR5tEAM4g/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});
// AOS
AOS.init();