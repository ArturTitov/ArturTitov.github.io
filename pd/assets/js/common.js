(function($) {
	'use strict';

	$(function() {

		let windowWidth = $(window).innerWidth(),
				windowHeight = $(window).height(),
				headerHeight = $('#my-header').outerHeight(),
				laptop = 1200,
				tabletDesktop = 992,
				largeMobDesktop = 768,
				mobileDesktop = 576,
				xsMobileDesktop = 480,
				mobileMenu = $('#mobile-menu'),
				removeXl = $('.remove-xl'),
				removeL = $('.remove-l'),
				removeMd = $('.remove-md'),
				removeSm = $('.remove-sm'),
				removeXs = $('.remove-xs');
			
		$('#my-wrapper').css('padding-top', headerHeight);


		if (windowWidth < laptop) {
			removeXl.remove();
		}


		$(window).on('resize', function() {
			windowWidth = $(window).innerWidth();
			headerHeight = $('#my-header').outerHeight();
			if(!$('.search__w').hasClass('opened')){
				$('#my-wrapper').css('padding-top', headerHeight);
			}
			if (windowWidth < laptop) {
				if($('.product__additional-head').length){
					$('.product__images').prepend( $('.product__additional-head') );				
				}
			}
		});


		if ($(mobileMenu).length) {
			let mobileMenuTitle = mobileMenu.data('title');
			$(mobileMenu).removeClass('hidden').mmenu({
				extensions: [ 
					'position-front',
					'effect-menu-slide',
					'pagedim-black',
					'theme-white',
					'shadow-panels',
					'fx-listitems-slide',
					'border-full',
          'position-right', ],
				setSelected: true,
				navbar: {
					title: mobileMenuTitle
				},
				navbars: [
					{
            height: 2,
            content: [
              '<div class="mobile-menu__top">' +
                '<a href="' + window.location.origin +'" class="mobile-menu__logo logo">' +
                  '<img src="assets/img/logo.svg" alt="Полы и двери">' +
                '</a>' +
              '</div>'
            ]
					},
				]
			});
		}


		// search open
		function _searchButtonClickListener(e) {
			e.preventDefault();

			let searchTl = new TimelineMax(),
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
		}

		// search close
		function _searchCloseButtonClickListener(e) {
			e.preventDefault();

			let searchTl = new TimelineMax(),
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

		let $searchButton = $('header').find('.header__controls-search');
		let $searchCloseButton = $('header').find('.close-search-button');
				
		$searchButton.on('click', function(e) {
			_searchButtonClickListener(e);
		});
		$searchCloseButton.on('click', function(e) {
				_searchCloseButtonClickListener(e);
		});


		if($('.promo__slider').length) {
			let promoSlider = new Swiper ('.promo__slider', {
				loop: true,
				speed: 650,
				roundLengths: true,
				setWrapperSize: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
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
				setTimeout(()=> {
					$(".selections__item-wrapper.swiper-slide-next").next().addClass("slide__next");
				}, 100)
			} else {
				$(".selections__item-wrapper").removeClass("slide__next");
				setTimeout(()=> {
					$(".selections__item-wrapper.swiper-slide-next").next().next().addClass("slide__next");
				}, 100)
			}			
		}


		if($('.promo__slider').length) {
			let selectionsSlider = new Swiper ('.selections__slider', {
				on: {
					init: ()=> {
						slideTranslateInit();
					},
					slideChangeTransitionStart: ()=> {
						slideTranslateChange();
					},
				},
				slidesPerView: 3,
				speed: 600,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					1200: {
						slidesPerView: 2,
					},
					680: {
						slidesPerView: 1,
					},
				}
			});
		}


		// init products slider in tabs
		if($('.promotabs-wrapper .products__slider').length){
			if (windowWidth < largeMobDesktop) {
				$('.promotabs-wrapper').each(function() {
					let $slider = $(this).find('.products__slider:not(.__init-slider)');
							
					let productTabSlider = new Swiper ($slider, {
						slidesPerView: 1,
						speed: 600,
						wrapperClass: 'products',
						slideClass: 'products__item',
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}
					});
	
				});
			}
		}		
		if($('.promotabs-wrapper .products__slider.__init-slider').length){
			$('.promotabs-wrapper').each(function() {
				let $slider = $(this).find('.products__slider.__init-slider');
						
				let productTabSlider = new Swiper ($slider, {
					slidesPerView: 3,
					speed: 600,
					wrapperClass: 'products',
					spaceBetween: 25,
					slideClass: 'products__item',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
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
		}		


		// tabs
		$.fn.minimalTabs = function () {
			var tabWrapper = $(this),
					tabNav = tabWrapper.find('.tab-nav'),
					tabNavItem = tabWrapper.find('.tab-nav .tab-nav__item'),
					tabContent = tabWrapper.find('.tab-cont'),
					tabContentItem = tabWrapper.find('.tab-cont .tab-pane');

			tabNavItem.each(function(i){
				$(this).attr('data-tab','tab'+i);
			});
			tabContentItem.each(function(i){
				$(this).attr('data-tab','tab'+i);
			});

			var activeTab = tabNav.find('.tab-nav__item.active').data('tab');
					tabContentItem.not('[data-tab='+activeTab+']').hide();

			tabNav.on("click", '.tab-nav__item', function(event){
				event.preventDefault();
				if ($(this).hasClass('active') === false) {
					tabNavItem.removeClass('active');
					$(this).addClass('active');

					activeTab = $(this).data('tab');
				
					tabContent.fadeOut('fast', function(){
						tabContentItem.hide();
						tabContentItem.filter('[data-tab='+activeTab+']').show();
						tabContent.fadeIn('fast');
					});
					var animateItems = tabContentItem.filter('[data-tab='+activeTab+']').find('.center-animate');
					if (animateItems.length && !$(animateItems).hasClass("show")){
						setTimeout(function(){
							animateItems.addClass('show');
						}, 250);
					}
					
				}
				
			});
		}
		if ($('.promotabs-wrapper').length) {
			$('.promotabs-wrapper').each(function() {
				$(this).minimalTabs();
			});
		}
		if ($('.authorization__tabs').length) {
			$('.authorization__tabs').minimalTabs();
		}		
		if ($('.product__info-tabs').length) {
			$('.product__info-tabs').minimalTabs();
		}		

		
		// tooltip init
		var $tooltip = $('.tooltip');
		$tooltip.each(function () {
				var dataInfo = $(this).data("tooltip");
				$(this).append('<span class="tooltip-content">' + dataInfo + '</span>');
		});

		// custom scrollbar
		$('.scrollbar-inner').scrollbar();


		$('[data="cart-toggle"]').on('click', function() {
			$('html').toggleClass('__show-overlay');
			$('#modal__cart').toggleClass('__active');
		});

		$('.page-overlay').on('click', function() {
			$('html').removeClass('__show-overlay __show-header');
			if($('#modal__cart').hasClass('__active')) $('#modal__cart').removeClass('__active');
			if($('.authorization').hasClass('__active'))$('.authorization').removeClass('__active');
		});


		// authorization
		$('[data="toggle-signin"]').on('click', function() {
			$('.modal__signin').toggleClass('__lost');
		});
		$('.header__auth-link').on('click', function(e) {
			e.preventDefault();
			let authorizationTab = $(this).data("authorization");
			let $authorizationTabClass = '.' + authorizationTab;
			if(!$('.authorization').hasClass('__active'))$('.authorization').addClass('__active');
			$($authorizationTabClass).click();
			if (windowWidth > largeMobDesktop) {
				$('html').addClass('__show-overlay __show-header');
			}
		});
		$('[data="authorization-close"]').on('click', ()=> {
			$('html').removeClass('__show-overlay __show-header');
			if($('.authorization').hasClass('__active'))$('.authorization').removeClass('__active');
		});


		// input mask
		function initMasks(){
			$('.language-select').each(function(){
				let country = $(this).find('option:selected').val();
				let phoneInput =  $(this).closest('.form__group-phone').find('input[type=tel]');
				let maskuse;
				if(country=='ua') { maskuse="+38 (000) 000 00 00"; }
				if(country=='ru') { maskuse="+71 (000) 000 00 00"; }
				if(country=='kz') { maskuse="+75 (000) 000 00 00"; }
				$(phoneInput).mask(maskuse);
			});
		}
		initMasks();

		// custom select
		let customSelect = $('.custom-select');
		if ($(customSelect).length) {
			$(customSelect).each(function () {
				let _this = this;
	
				$(this).select2({
					minimumResultsForSearch: -1
				});
				$(this).on('change', function (e) {
					$(_this).closest('.form__group').addClass('active');
				});
				
			});
		}

		// lenguage select
		function formatCountry (country) {
			if (!country.id) {
				return country.text;
			}
			var baseUrl = "assets/img/countries";
			var $country = $(
				'<img src="' + baseUrl + '/' + country.element.value.toLowerCase() + '.png" class="country-img" />'
			);
			return $country;
		};

		let countrySelect = $('.country-select');
		if ($(countrySelect).length) {
			$(countrySelect).each(function () {
				let _this = this;
				let country;
				let phoneInput = $(this).closest('.form__group-phone').find('input[type=tel]');
				let maskuse;
	
				$(this).select2({
					dropdownParent: $(this).closest('.form__group'),
					minimumResultsForSearch: -1,
					templateSelection: formatCountry,
					templateResult: formatCountry
				});
				$(this).on('change', function (e) {
					country = $(_this).val();
					if(country=='ua') { maskuse="+38 (000) 000 00 00"; }
					if(country=='ru') { maskuse="+77 (000) 000 00 00"; }
					if(country=='kz') { maskuse="+55 (000) 000 00 00"; }	
					phoneInput.mask(maskuse);
				});
					
			});
		}


		// filter trigger
		$('.js-filter-tab-toggle').on('click', function(){
			$(this).next('.filter-tab__content').slideToggle(300);
			$(this).closest('.js-filter-tab').toggleClass('open');
		});
		$('.filter-tab .filter-option.checked').closest('.js-filter-tab').find('.filter-tab__content').addClass('open');
		$('.filter-tab .filter-option.checked').closest('.js-filter-tab').addClass('open');

		$('.js-more-options').on('click', function(e){
			e.preventDefault();
			let filterOptions = $(this).closest('.filter-tab__options-list').find('.js-filter-tab-more'),
					triggerOpenText = $(this).attr('data-text-open'),
					triggerCloseText = $(this).attr('data-text-close');
			if(!$(this).hasClass('active')){
				filterOptions.slideToggle(300);
				$(this).addClass('active');
				$(this).text(triggerCloseText);
			} else {
				filterOptions.slideToggle(300);
				$(this).removeClass('active');
				$(this).text(triggerOpenText);
			}
		});

		// trigger to mobile filter
		$('[data-toggle="filter"]').click(function() {
			$('.catalog-sidebar__col').toggleClass('active');
			$('html').toggleClass('__fixed __filter-active');
		});


		// filter price slider init
		let keypressSlider = document.getElementById('keypress'),
				input0 = document.getElementById('input-with-keypress-0'),
				input1 = document.getElementById('input-with-keypress-1'),
				input0Start = parseInt($('#input-with-keypress-0').attr("data-start")),
				input1Start = parseInt($('#input-with-keypress-1').attr("data-start")),
				input1Min = parseInt($('#input-with-keypress-1').attr("data-min")),
				input1Max = parseInt($('#input-with-keypress-1').attr("data-max")),
				inputs = [input0, input1];

		if(document.getElementById('keypress')){
			noUiSlider.create(keypressSlider, {
				start: [input0Start, input1Start],
				connect: true,
				tooltips: true,
				range: {
					'min': [input1Min],
					// '10%': [10, 10],
					// '50%': [80, 50],
					// '80%': 150,
					'max': input1Max
				}
			});

			keypressSlider.noUiSlider.on('update', function( values, handle ) {
				inputs[handle].value = Math.round(values[handle]);
			});
			// /filter price slider init
	
			// FILTER price slide
			function setSliderHandle(i, value) {
				var r = [null,null];
				r[i] = value;
				keypressSlider.noUiSlider.set(r);
			};
	
			// Listen to keydown events on the input field.
			inputs.forEach(function(input, handle) {
			
				input.addEventListener('change', function(){
					setSliderHandle(handle, this.value);
				});
			
				input.addEventListener('keydown', function( e ) {
			
					var values = keypressSlider.noUiSlider.get();
					var value = Number(values[handle]);
					var steps = keypressSlider.noUiSlider.steps();
					var step = steps[handle];
					var position;
					switch ( e.which ) {
						case 13:
							setSliderHandle(handle, this.value);
							break;
						case 38:
							position = step[1];
							if ( position === false ) {
								position = 1;
							}
							if ( position !== null ) {
								setSliderHandle(handle, value + position);
							}
							break;			
						case 40:			
							position = step[0];			
							if ( position === false ) {
								position = 1;
							}			
							if ( position !== null ) {
								setSliderHandle(handle, value - position);
							}			
							break;
					}
				});
			});
		};
		// /FILTER price slide


		if($('.reviews-slider').length){			
			let $slider = $(this).find('.reviews-slider');
					
			let productTabSlider = new Swiper ($slider, {
				loop: true,
				slidesPerView: 3,
				speed: 600,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					767: {
						slidesPerView: 1,
						spaceBetween: 0
					},
					1200: {
						slidesPerView: 2,
						spaceBetween: 25
					}
				}
			});			
		}
		
		
		$('[data-fancybox]').fancybox({
			toolbar  : false,
			smallBtn : true,
			iframe : {
				preload : false
			},
			buttons: [],
			beforeShow : function() {
				$('body').addClass('fancybox-show');
				if ($('#my-header').is(':visible')) {
					$('.fancybox-container').css({
						'top' : headerHeight,
						'height' : 'calc(100% - ' + headerHeight + 'px)'
					});
				} 
			},
			afterClose : function() {
				$('body').removeClass('fancybox-show');
			}
		});

		$('body').on('click', '.js-question', function(e){
			e.preventDefault();
			let answer = $(this).next('.answer').html();
			$('#modal__additional-questions').html(answer);
			$.fancybox.open({
				src  : '#modal__additional-questions',
				type : 'inline',
				opts : {
					toolbar  : false,
					smallBtn : true,
					iframe : {
						preload : false
					},
					buttons: [],
					beforeShow : function() {
						$('body').addClass('fancybox-show');
						if ($('#my-header').is(':visible')) {
							$('.fancybox-container').css({
								'top' : headerHeight,
								'height' : 'calc(100% - ' + headerHeight + 'px)'
							});
						} 
					},
					afterClose : function() {
						$('body').removeClass('fancybox-show');
					}
				}
			});
		});
		
		$('body').on('click', '.js-review-more', function(e){
			e.preventDefault();
			let reviews = $(this).closest('.reviews__item').find('.reviews__item-content').html();
			let reviewsHead = $(this).closest('.reviews__item').find('.reviews__item-header').html();
			$('#modal__reviews').find('.reviews__item-header').html(reviewsHead);
			$('#modal__reviews').find('.reviews__item-content').html(reviews);
			$.fancybox.open({
				src  : '#modal__reviews',
				type : 'inline',
				opts : {
					toolbar  : false,
					smallBtn : true,
					iframe : {
						preload : false
					},
					buttons: [],
					beforeShow : function() {
						$('body').addClass('fancybox-show');
						if ($('#my-header').is(':visible')) {
							$('.fancybox-container').css({
								'top' : headerHeight,
								'height' : 'calc(100% - ' + headerHeight + 'px)'
							});
						} 
					},
					afterClose : function() {
						$('body').removeClass('fancybox-show');
					}
				}
			});
		});

		$('body').on('click', '.js-modal-trigger', function(e){
			e.preventDefault();
			let content = $(this).closest('.js-modal-item').find('.js-modal-content').html();
			$('#modal__custom').html(content);
			$.fancybox.open({
				src  : '#modal__custom',
				type : 'inline',
				opts : {
					toolbar  : false,
					smallBtn : true,
					iframe : {
						preload : false
					},
					buttons: [],
					beforeShow : function() {
						$('body').addClass('fancybox-show');
						if ($('#my-header').is(':visible')) {
							$('.fancybox-container').css({
								'top' : headerHeight,
								'height' : 'calc(100% - ' + headerHeight + 'px)'
							});
						} 
					},
					afterClose : function() {
						$('body').removeClass('fancybox-show');
					}
				}
			});
		});

		
		function fancyImg() {
			let $img = $('.js-fancy-img');
			if ($img.length) {
				$img.fancybox({
					margin : [110, 20, 20, 20],
					slideShow  : false,
					fullScreen : false,
					thumbs     : false,
					loop: true,
					buttons: [
						"thumbs",
						"close"
					],
					baseTpl	:
								'<div class="fancybox-container" role="dialog" tabindex="-1">' +
										'<div class="fancybox-bg"></div>' +
												'<div class="fancybox-toolbar">' +
														'{{buttons}}' +
												'</div>' +
		
										'<div class="fancybox-inner">' +
												'<div class="fancybox-navigation">' +
														'<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left"><i class="icon-chevron-thin-left"></i></button>' +
														'<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right"><i class="icon-chevron-thin-right"></i></button>' +
												'</div>' +
												'<div class="fancybox-stage"></div>' +
												'<div class="fancybox-caption-wrap">' +
														'<div class="fancybox-caption"></div>' +
												'</div>' +
										'</div>' +
								'</div>',
					btnTpl : {
						close   : '<button data-fancybox-close class="popup-simple__close" title="{{CLOSE}}"><i class="icon-close"></i></button>'
					},
					transitionEffect : 'slide'
				});
			}
		}
		fancyImg();


		$('body').on('click', '.toggle-block__btn', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			let $toggleContent = $(this).closest('.toggle-block').find('.toggle-block__content');
			$toggleContent.toggleClass('not-visible');
		});

		// change interior
    $('body').on('click', '.product__interior-item', function(e) {
			e.preventDefault();
			if ($(this).hasClass('active')) return;

			$('.product__interior-item').removeClass('active');
			$(this).addClass('active');
			
			$('.product__interior-image').attr('src', $(this).data('large'));
			$('.product__interior-nav .js-download').attr('href', $(this).data('large'));
		});

		function interior() {
			let interiorImg = $('.product__interior-item.active').data('large');
			$('.product__interior-nav .js-download').attr('href', interiorImg);
			$('.product__interior-image').attr('src', interiorImg);
		}
		interior();


		if($('.product__images-slider').length) {
			let promoSlider = new Swiper ('.product__images-slider', {
				loop: false,
				speed: 650,
				roundLengths: true,
				setWrapperSize: true,
				preloadImages: false,
				lazy: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			});
		}

		if($('.custom-nav__second').length) {
			$('.custom-nav__second').each(function(){
				let slides = $(this).find('.swiper-slide');
				if(slides.length == 1) {
					$(this).addClass('disabled');
				}
			});
		}

		

		//показ блока с дверями в интерьере на карточке
    $('body').on('click', '.toggle-switch__main', $.debounce(function(e) {
				$('.toggle-switch__item button:not(.js-link--active)').click();
				$('.toggle-block__btn').removeClass('active');
				$('.toggle-block__content').removeClass('not-visible');
    }, 300));

    $('body').on('click', '.toggle-switch button', function() {

				if ($(this).hasClass('js-link--active')) return;
				
				$('#product').toggleClass('active-interior');

				$(this).parents('.toggle-switch').toggleClass('active-right');
				
				$('.toggle-block__btn').removeClass('active');
				$('.toggle-block__content').removeClass('not-visible');

        // var view = $('#information').data('view');
        // var setShort = false;
        // if (view != undefined) {
        //     switch(view) {
        //         case 'short' : 
        //             setShort = true;
        //             setTimeout(function() {
        //                 $('#information').addClass('short-view');
        //             }, 200);
        //             break;
        //         case 'normal' : 
				// 					$('#information').removeClass('short-view');
				// 					break;
        //     }
        // } else {
        //     setShort = true;
        //     setTimeout(function() {
        //         $('#information').addClass('short-view');
        //     }, 250)
        // }

        // if ($(this).data('view') == 'interior') {
        //     $('#information').data('height', $('.option-top .options-block.top').outerHeight());
        //     $('#information').data('width', $('#information').width());
        // }

        $('button', $(this).parents('.toggle-switch')).removeClass('js-link--active');
        $(this).addClass('js-link--active');

        // нажали на просмотр в интерьере
        if ($(this).data('view') == 'interior') {

            // ставим ненужным блокам анимацию скрытия
            $('.short-view-out').each(function(index) {
                (function(that, i) { 
                    var t = setTimeout(function() {                         
                        $(that)
													.addClass('fadeOutRight')
													.removeClass('fadeInRight fadeInLeft')
                    }, 100 * i);
                })(this, index);
            });

        } else {

            // ставим скрытым блокам анимацию открытия
            var items = $('.short-view-out').toArray();

            items = items.reverse();

            items.forEach(function(el, index) {
                index += 6;
                (function(that, i) { 
                    var t = setTimeout(function() { 
                        $(that).css({
													'visibility': 'visible'
                        });
                        $(that)
                            .addClass('fadeInRight')
                            .removeClass('fadeOutRight fadeOutLeft')
                    }, 100 * i);
                })(el, index);
            });


            // $('.prod-interior__bgr').removeClass('fadeInRight');

        }

        // $('.prod-interior__bgr').toggleClass('visible');
        // $('.p-page__view-config').toggleClass('active-interior');
        $('.prod-view-option').removeClass('visible');
		});


		if (windowWidth < laptop) {
			if($('.product__additional-head').length){
				$('.product__images').prepend( $('.product__additional-head') );				
			}
		}


		// animate
		function animate() {
			$('.lazyload, .one-element-r, .one-element-l, .one-element-up, .one-element-down, .right-animate, .left-animate, .up-animate, .down-animate, .fall-animate, .center-animate, .scale-animate, .js-splitme').each(function() {
				var self = this;
				var slideDown = new Waypoint({
						element: $(self),
						handler: function (direction) {
							if (direction == 'down') {
									if (!$(self).hasClass("show") && $(self).hasClass("up-animate")) {
										TweenMax.staggerFromTo($(self).find(".item-animate"), 0.5, { opacity: 0, y: 80 }, { opacity: 1, y: 0 }, 0.15);
										$(self).addClass("show");
									}
									if (!$(self).hasClass("show") && $(self).hasClass("down-animate")) {
										TweenMax.staggerFromTo($(self).find(".item-animate"), 0.5, { opacity: 0, y: -80 }, { opacity: 1, y: 0 }, 0.15);
										$(self).addClass("show");
									}
									if (!$(self).hasClass("show") && $(self).hasClass("fall-animate")) {
										TweenMax.staggerFromTo($(self).find(".item-animate"), 0.5, { opacity: 0, y: -10 }, { opacity: 1, y: 0 }, 0.15);
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("left-animate")){
										TweenMax.staggerFromTo($(self).find(".item-animate"), 0.5, { opacity: 0, x: -200}, { opacity: 1, x: 0}, 0.15);
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("right-animate")){
										TweenMax.staggerFromTo($(self).find(".item-animate"), 0.5, { opacity: 0, x: 200}, { opacity: 1, x: 0}, 0.15);
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("one-element-r")){
										TweenMax.staggerFromTo($(self), 1, { opacity: 0, x: 200}, { opacity: 1, x: 0});
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("one-element-l")){
										TweenMax.staggerFromTo($(self), 1, { opacity: 0, x: -200}, { opacity: 1, x: 0});
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("one-element-up")){
										TweenMax.staggerFromTo($(self), 1, { opacity: 0, y: 80}, { opacity: 1, y: 0});
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("one-element-down")){
										TweenMax.staggerFromTo($(self), 1, { opacity: 0, y: -80}, { opacity: 1, y: 0});
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).is(':visible') && $(self).hasClass("center-animate")){
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("scale-animate")){
										TweenMax.staggerFromTo($(self), 1.1, { opacity: 0, scale: 0.3}, { opacity: 1, scale: 1});
										$(self).addClass("show");
									}
									if(!$(self).hasClass("show") && $(self).hasClass("js-splitme")){
										TweenMax.staggerFromTo($(self).find(".letter"), 0.3, {y: 20,opacity: 0}, {y: 0,opacity: 1,ease: Back.easeOut.config(3)},0.04)
									}
									if (!$(self).hasClass("show") && $(self).hasClass("lazyload")) {
										$(self).attr("src", $(self).attr("data-src"));
										$(self).removeClass("lazyload");
										$(self).parent(".icon").removeClass("icon");
										$(self).addClass("show");
									}
							}
						},
						offset: '85%'
				});
			});
		}


		$(".loader_inner").fadeOut();
		$(".loader").delay(300).fadeOut("slow");
		setTimeout(function(){
			animate();
		}, 350);

		// function ImagesLazyLoad() {
		// 	setInterval(function() {
		// 			var top = $("body").scrollTop();
		// 			$("img.lazyload").each(function() {
		// 					var rect = this.getBoundingClientRect();
		// 					if (rect.top >= top + windowHeight + 100 || rect.bottom <= top)
		// 							return;
		// 					var img = $(this);
		// 					img.attr("src", img.attr("data-src"));
		// 					img.removeClass("lazyload");
		// 					img.parent(".icon").removeClass("icon");
		// 			})
		// 	}, 200)
		// }
		// ImagesLazyLoad();
		

	});

})(jQuery);

/*
	debounce, throttle паттерны
*/
$.extend({
	debounce : function(fn, timeout, invokeAsap, ctx) {
		if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
			ctx = invokeAsap;
			invokeAsap = false;
		}
		var timer;
		return function() {
			var args = arguments;
						ctx = ctx || this;
			invokeAsap && !timer && fn.apply(ctx, args);
			clearTimeout(timer);
			timer = setTimeout(function() {
				!invokeAsap && fn.apply(ctx, args);
				timer = null;
			}, timeout);
		};
	},
	throttle : function(fn, timeout, ctx) {
		var timer, args, needInvoke;
		return function() {
			args = arguments;
			needInvoke = true;
			ctx = ctx || this;
			if(!timer) {
				(function() {
					if(needInvoke) {
						fn.apply(ctx, args);
						needInvoke = false;
						timer = setTimeout(arguments.callee, timeout);
					}
					else {
						timer = null;
					}
				})();
			}
		};
	}
});