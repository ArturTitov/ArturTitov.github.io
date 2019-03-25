"use strict";

(function ($) {
  'use strict';

  $(function () {
    var windowWidth = $(window).innerWidth(),
        windowHeight = $(window).height(),
        headerHeight = $('#my-header').outerHeight(),
        laptop = 1200,
        tabletDesktop = 992,
        largeMobDesktop = 768,
        mobileDesktop = 576,
        xsMobileDesktop = 480,
        mobileMenu = $('#mobile-menu'),
        removeL = $('.remove-l'),
        removeMd = $('.remove-md'),
        removeSm = $('.remove-sm'),
        removeXs = $('.remove-xs');
    $('#my-wrapper').css('padding-top', headerHeight);
    $(".loader_inner").fadeOut();
    $(".loader").delay(300).fadeOut("slow");

    function ImagesLazyLoad() {
      setInterval(function () {
        var top = $("body").scrollTop();
        $("img.lazyload").each(function () {
          var rect = this.getBoundingClientRect();
          if (rect.top >= top + windowHeight || rect.bottom <= top) return;
          var img = $(this);
          img.attr("src", img.attr("data-src"));
          img.removeClass("lazyload");
          img.parent(".icon").removeClass("icon");
        });
      }, 300);
    }

    ImagesLazyLoad();

    if (windowWidth < tabletDesktop) {
      removeL.remove();
    }

    $(window).on('resize', function () {
      windowWidth = $(window).innerWidth();
      headerHeight = $('#my-header').outerHeight();

      if (!$('.search__w').hasClass('opened')) {
        $('#my-wrapper').css('padding-top', headerHeight);
      }

      if (windowWidth < laptop) {
        if ($('.product__additional-head').length) {
          $('.product__images').prepend($('.product__additional-head'));
        }
      }
    });

    if ($(mobileMenu).length) {
      var mobileMenuTitle = mobileMenu.data('title');
      $(mobileMenu).removeClass('hidden').mmenu({
        extensions: ['position-front', 'effect-menu-slide', 'pagedim-black', 'theme-white', 'shadow-panels', 'fx-listitems-slide', 'border-full', 'position-right'],
        setSelected: true,
        navbar: {
          title: mobileMenuTitle
        },
        navbars: [{
          height: 2,
          content: ['<div class="mobile-menu__top">' + '<a href="' + window.location.origin + '" class="mobile-menu__logo logo">' + '<img src="assets/img/logo.svg" alt="Полы и двери">' + '</a>' + '</div>']
        }]
      });
    } // search open


    function _searchButtonClickListener(e) {
      e.preventDefault();
      var searchTl = new TimelineMax(),
          $searchW = $('header').find('.search__w'),
          $form = $('header').find('.search__w form'),
          $searchInput = $('header').find('.search__w form input');

      if ($searchW.hasClass('opened')) {
        return;
      }

      $('header').find('.search__w').addClass('opened');
      searchTl.to($searchW, .25, {
        height: 80,
        ease: Power0.easeOut
      }).to($form, .25, {
        rotationX: 0,
        ease: Power0.easeOut
      });
      $($searchInput).focus();
    } // search close


    function _searchCloseButtonClickListener(e) {
      e.preventDefault();
      var searchTl = new TimelineMax(),
          $searchW = $('header').find('.search__w'),
          $form = $('header').find('.search__w form');
      $('header').find('.search__w').removeClass('opened');
      searchTl.to($form, .25, {
        rotationX: -100,
        ease: Power0.easeOut
      }).to($searchW, .25, {
        height: 0,
        ease: Power0.easeOut
      });
    }

    var $searchButton = $('header').find('.header__controls-search');
    var $searchCloseButton = $('header').find('.close-search-button');
    $searchButton.on('click', function (e) {
      _searchButtonClickListener(e);
    });
    $searchCloseButton.on('click', function (e) {
      _searchCloseButtonClickListener(e);
    });

    if ($('.promo__slider').length) {
      var promoSlider = new Swiper('.promo__slider', {
        loop: true,
        speed: 650,
        roundLengths: true,
        setWrapperSize: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }

    function slideTranslateInit() {
      if (windowWidth < laptop && windowWidth > tabletDesktop) {
        $(".selections__item-wrapper.swiper-slide-next").next().addClass("slide__next");
      } else {
        $(".selections__item-wrapper.swiper-slide-next").next().next().addClass("slide__next");
      }
    }

    function slideTranslateChange() {
      if (windowWidth < laptop && windowWidth > tabletDesktop) {
        $(".selections__item-wrapper").removeClass("slide__next");
        setTimeout(function () {
          $(".selections__item-wrapper.swiper-slide-next").next().addClass("slide__next");
        }, 100);
      } else {
        $(".selections__item-wrapper").removeClass("slide__next");
        setTimeout(function () {
          $(".selections__item-wrapper.swiper-slide-next").next().next().addClass("slide__next");
        }, 100);
      }
    }

    if ($('.promo__slider').length) {
      var selectionsSlider = new Swiper('.selections__slider', {
        on: {
          init: function init() {
            slideTranslateInit();
          },
          slideChangeTransitionStart: function slideChangeTransitionStart() {
            slideTranslateChange();
          }
        },
        slidesPerView: 3,
        speed: 600,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 2
          },
          680: {
            slidesPerView: 1
          }
        }
      });
    } // init products slider in tabs


    if ($('.promotabs-wrapper .products__slider').length) {
      if (windowWidth < largeMobDesktop) {
        $('.promotabs-wrapper').each(function () {
          var $slider = $(this).find('.products__slider:not(.__init-slider)');
          var productTabSlider = new Swiper($slider, {
            slidesPerView: 1,
            speed: 600,
            wrapperClass: 'products',
            slideClass: 'products__item',
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          });
        });
      }
    }

    if ($('.promotabs-wrapper .products__slider.__init-slider').length) {
      $('.promotabs-wrapper').each(function () {
        var $slider = $(this).find('.products__slider.__init-slider');
        var productTabSlider = new Swiper($slider, {
          slidesPerView: 3,
          speed: 600,
          wrapperClass: 'products',
          spaceBetween: 25,
          slideClass: 'products__item',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            676: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 25
            }
          }
        });
      });
    } // tabs


    $.fn.minimalTabs = function () {
      var tabWrapper = $(this),
          tabNav = tabWrapper.find('.tab-nav'),
          tabNavItem = tabWrapper.find('.tab-nav .tab-nav__item'),
          tabContent = tabWrapper.find('.tab-cont'),
          tabContentItem = tabWrapper.find('.tab-cont .tab-pane');
      tabNavItem.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
      });
      tabContentItem.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
      });
      var activeTab = tabNav.find('.tab-nav__item.active').data('tab');
      tabContentItem.not('[data-tab=' + activeTab + ']').hide();
      tabNav.on("click", '.tab-nav__item', function (event) {
        event.preventDefault();

        if ($(this).hasClass('active') === false) {
          tabNavItem.removeClass('active');
          $(this).addClass('active');
          activeTab = $(this).data('tab');
          tabContent.fadeOut('fast', function () {
            tabContentItem.hide();
            tabContentItem.filter('[data-tab=' + activeTab + ']').show();
            tabContent.fadeIn('fast');
          });
          var anim