(function($) {
	'use strict';

	$(function() {

		var windowWidth = $(window).innerWidth(),
				windowHeight = $(window).height(),
				laptop = 1200,
				tabletDesktop = 992,
				largeMobDesktop = 767,
				mobileDesktop = 576,
				xsMobileDesktop = 480,
				removeMd = $('.remove-md'),
				removeSm = $('.remove-sm'),
				removeXs = $('.remove-xs');
		
		setTimeout(function(){
			var headerHeight = $('#my-header').outerHeight();
			$('#my-wrapper').css('padding-top', headerHeight);
			
			if($('.product-sort__item').length) {
				$('.filter-trigger').css('top', headerHeight + 40);
			}
		}, 50);

		// media
		if (windowWidth <= tabletDesktop) {
			removeMd.remove();

			$('.navbar').append($('.hm-center'));

			$('#mobile-catalog').removeClass('hidden').mmenu({
				extensions: [ 'position-front', 'effect-menu-slide', 'pagedim-black', 'theme-white' ],
				setSelected: true,
				navbar: {
					title: 'Каталог'
				}
			});

		}

		if (windowWidth <= largeMobDesktop) {
			removeSm.remove();
		}

		if (windowWidth <= mobileDesktop) {
			removeXs.remove();
		}
		
		if (windowWidth >= mobileDesktop) {
			$('.products-row .product-thumb .product-thumb__image').equalHeights();
			$('.products-row .product-thumb .product-thumb__content').equalHeights();
		}


		// animate
		function animate() {
			$('.items-animate').each(function() {
				var self = this;
				var slideDown = new Waypoint({
						element: $(self),
						handler: function (direction) {
							if (direction == 'down') {
								if (!$(self).hasClass("show") && $(self).hasClass("items-animate")) {
									var tl = new TimelineMax();
									tl.staggerFromTo($(self).find(".item-animate"), 0.6, {
										opacity: 0,
										y: 100
									}, {
											opacity: 1,
											y: 0
										}, 0.15);
									$(self).addClass("show");
								}
							}
						},
						offset: '95%'
				});
			});
		}
		if($('.items-animate').length){
			animate();
		}
		


		// site navigation category image
		setTimeout(function(){
			if($('.nav__wrapper nav').length){
				$('.nav-item').hover(function(){
					var navCategoryImg = $(this).data('img');
					if(navCategoryImg != undefined){
						$(this).find('.nav-item__submenu-img img').attr('src', navCategoryImg);
					}
				});
			}
		}, 100);


		// product zoom img
		if (windowWidth >= tabletDesktop) {
			$('#glasscase').glassCase({
				zoomPosition: 'right',
				thumbsPosition: 'bottom',
				heightDisplay: 460,
				autoInnerZoom: true,
				nrThumbsPerRow: 3,
				isZoomDiffWH: true,
				isShowAlwaysIcons: false,
				isDownloadEnabled: false,
				isOneThumbShown: true,
				zoomMargin: 10,
				colorActiveThumb: 'none',
				thumbsMargin: 25
			});
		} else {
			$('#glasscase').glassCase({
				isOverlayEnabled: false,
				isZoomEnabled: false,
				thumbsPosition: 'bottom',
				heightDisplay: 410,
				autoInnerZoom: false,
				nrThumbsPerRow: 0,
				isZoomDiffWH: true,
				isShowAlwaysIcons: true,
				isDownloadEnabled: false,
				colorActiveThumb: 'none',
				thumbsMargin: 0
			});

			if('#glasscase'.length){
				setTimeout(function(){
					var imagecaseDisplayAreaHeight = $('.glass-case .gc-display-area').innerHeight();
					$('.glass-case').css('height', imagecaseDisplayAreaHeight + 3 + 'px');
					$('.product-images').css('max-height', imagecaseDisplayAreaHeight + 20 + 'px');
				}, 100);
			}

			var initialX = null;
			var initialY = null;
			
			function startTouch(e) {
				initialX = e.touches[0].clientX;
				initialY = e.touches[0].clientY;
			};
			
			function moveTouch(e) {
				if (initialX === null) {
					return;
				}
			
				if (initialY === null) {
					return;
				}
			
				var currentX = e.touches[0].clientX;
				var currentY = e.touches[0].clientY;
			
				var diffX = initialX - currentX;
				var diffY = initialY - currentY;
			
				if (Math.abs(diffX) > Math.abs(diffY)) {
					// sliding horizontally
					if (diffX > 0) {
						// swiped left
						$('.gc-display-area .gc-icon-prev').trigger('click');
					} else {
						// swiped right
						$('.gc-display-area .gc-icon-next').trigger('click');
					}  
				} 
				// else {
				// 	// sliding vertically
				// 	if (diffY > 0) {
				// 		// swiped up
				// 	} else {
				// 		// swiped down
				// 	}  
				// }
			
				initialX = null;
				initialY = null;
				
				// e.preventDefault();
			};
		

			$( ".product-images" ).on( "touchstart", startTouch);
			$( ".product-images" ).on( "touchmove", moveTouch);
			
		}
		if('#glasscase'.length){
			setTimeout(function(){
				$('#glasscase').wrap('<div class="glasscase__thumbs--wrapper"></div>');
				var glasscaseDisplayAreaHeight = $('.glass-case .gc-display-area').innerHeight();
				var stickerSaleHeight = $('.product-images .sticker__sale').innerHeight();
				$('.product-images .sticker__sale').css('top', glasscaseDisplayAreaHeight - stickerSaleHeight - 13 + 'px');
			}, 100);
		}


		// banner init
		function responsiveBannerImages() {
			 $('.main-banner .banner-item').each(function(){
				var desctopImg = $(this).data('img-desctop');
				var tabletImg = $(this).data('img-tablet');
				var mobileImg = $(this).data('img-mobile');

				if (windowWidth > largeMobDesktop) {
					$(this).find('img').attr('src', desctopImg);
				} else if (windowWidth >= mobileDesktop && windowWidth <= largeMobDesktop) {
					$(this).find('img').attr('src', tabletImg);
				} else {
					$(this).find('img').attr('src', mobileImg);
				}
			});
		}


		// on page-overlay click
		$('.page-overlay').on('click', function() {
			if($('html').hasClass('__fixed __show-overlay') == true ) {
				$('html').removeClass('__fixed __show-overlay');
				$('[data-toggle="filter"]').removeClass('active');
				$('.filter__wrapper').removeClass('active');
				$('.account__nav--wrapper').removeClass('active');
			}
		});

		// tooltip init
		var $tooltip = $('.js-tooltip');
		$tooltip.each( function () {
			var dataInfo = $(this).data("tooltip");
			$(this).append('<span class="tooltip-content">' + dataInfo + '</span>');
		});	

		// init main banner slider
		if ($('.main-banner').length) {
			var $bannerSlider = $('.main-banner');

			$bannerSlider.on("init", function(event, slick){
				responsiveBannerImages();
			});

			$bannerSlider.slick({
				slidesToShow: 1,
				lazyLoad: 'progressive',
				dots: true,
				arrows: false,
				speed: 1000,
				adaptiveHeight: false,
				autoplay: true,
				autoplaySpeed: 8000
			});
		}


		// .product-slider === start
		var slidesPerPage = 4;
		var $productSlider = $('.slider');	
		if (windowWidth <= tabletDesktop && windowWidth >= largeMobDesktop) {
			slidesPerPage = 3;
		}	
		if (windowWidth <= largeMobDesktop && windowWidth >= xsMobileDesktop) {
			slidesPerPage = 2
		}	
		if (windowWidth <= xsMobileDesktop) {
			slidesPerPage = 1
		}	

		$productSlider.on("init", function(event, slick){
			var maxPages = Math.ceil(slick.slideCount/slidesPerPage),
					currentPages = Math.ceil(slick.currentSlide/slidesPerPage + 1),
					calc = ( (currentPages) / (maxPages) ) * 100,
					sliderPagination = $(this).closest('.slider__wrapper').find('.slider-paging'),
					$progressBar = $(this).closest('.slider__wrapper').find('.progress'),
					$customNextButton = $(this).closest('.slider__wrapper').find('.slider-nav .next'),
					$customPrevButton = $(this).closest('.slider__wrapper').find('.slider-nav .prev'),
					$nextButton = $(this).find('.slick-next').attr('aria-disabled'),
					$prevButton = $(this).find('.slick-prev').attr('aria-disabled');

			$('.slider .product-thumb .product-thumb__image').equalHeights();
			$('.slider .product-thumb .product-thumb__content').equalHeights();

			sliderPagination.find('.total').text(maxPages);
			sliderPagination.find('.current').text(currentPages);
			$progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc );
			$customNextButton.attr('aria-disabled', $nextButton);
			$customPrevButton.attr('aria-disabled', $prevButton);

		});
	 
		$productSlider.slick({
			infinite: false,
			arrows: true,
			speed: 1000,
			slidesToShow: slidesPerPage,
			slidesToScroll: slidesPerPage
		});
		
		$productSlider.on('afterChange', function(event, slick, currentSlide) {
			var maxPages = Math.ceil(slick.slideCount/slidesPerPage),
				currentPages = Math.ceil(slick.currentSlide/slidesPerPage + 1),
				calc = ( (currentPages) / (maxPages) ) * 100,
				sliderPagination = $(this).closest('.slider__wrapper').find('.slider-paging'),
				$progressBar = $(this).closest('.slider__wrapper').find('.progress'),
				$customNextButton = $(this).closest('.slider__wrapper').find('.slider-nav .next'),
				$customPrevButton = $(this).closest('.slider__wrapper').find('.slider-nav .prev'),
				$nextButton = $(this).find('.slick-next').attr('aria-disabled'),
				$prevButton = $(this).find('.slick-prev').attr('aria-disabled');

			sliderPagination.find('.total').text(maxPages);
			sliderPagination.find('.current').text(currentPages);
			$progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc );
			$customNextButton.attr('aria-disabled', $nextButton);
			$customPrevButton.attr('aria-disabled', $prevButton);
		});

		$('.slider-nav .prev').on('click', function(){
			$(this).closest('.slider__wrapper').find('.slick-prev').click();
		});
		$('.slider-nav .next').on('click', function(e){
			$(this).closest('.slider__wrapper').find('.slick-next').click();
		});
		// .product-slider === end
		

		// brands slider init
		$('.brands-slider').slick({
			infinite: false,
			arrows: true,
			speed: 700,
			rows: 2,
			slidesPerRow: 5,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesPerRow: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesPerRow: 3,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesPerRow: 2,
					}
				}
			]
		});


		// advantages-slider init
		$('.advantages-slider').slick({
			infinite: false,
			arrows: true,
			speed: 700,
			slidesToShow: 6,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});


		// accordion
		$.fn.accordion = function () {
			var accordion = $(this),
					$accordionItem = accordion.find('.accordion__item'),
					$accordionActiveItem = accordion.find('.accordion__item.active'),
					$accordionItemTitle = accordion.find('.accordion__item--head'),
					$accordionItemContent = accordion.find('.accordion__item--content');

			if($accordionActiveItem.length){
				$accordionActiveItem.find('.accordion__item--content').show();
			}

			function closeAccordionItem() {
				$($accordionItemContent).slideUp(300);
				$($accordionItem).removeClass('active');
			}
			
			$($accordionItemTitle).on('click', function(e) {
				e.preventDefault();
				var $currentItem = $(this).closest('.accordion__item');

				if(!$currentItem.hasClass('active')) {
					closeAccordionItem();
					$currentItem.addClass('active');
					$currentItem.find('.accordion__item--content').slideDown(300);
				} else {
					closeAccordionItem();
				}
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

			// addition for compare
			if($('#compare__tabs').length){
				tabNav.find('.tab-nav__item.active').parent().addClass('active');
			}

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
				
					var tabSlider = tabContentItem.filter('[data-tab='+activeTab+']').find('.slider');
					if (tabSlider.length){
						setTimeout(function(){
							tabSlider.slick('reinit');
						}, 250);
					}

					// addition for compare
					if($('#compare__tabs').length){
						$('.compare__tabs .tab__item').removeClass('active');
						$(this).parent().addClass('active');
						setTimeout(function(){
							$('.compare-page__slider').slick('reinit');
						}, 250);
					}
				}
				
			});
		}
		// init tabs 
		if ($('#products-tabs').length) {
			$('#products-tabs').minimalTabs();
		}

		if (windowWidth > largeMobDesktop) {
			if ($('#product-info__tabs').length) {
				$('#product-info__tabs').minimalTabs();
			}
			if ($('#cart-kit__tabs').length) {
				$('#cart-kit__tabs').minimalTabs();
			}
		} else {
			if ($('.js-accordion').length) {
				$('.js-accordion').accordion();
			}
			if ($('.js-cart-accordion').length) {
				$('.js-cart-accordion').accordion();
			}
		}

		if ($('#compare__tabs').length) {
			$('#compare__tabs').minimalTabs();
		}
		if ($('#faq-tabs').length) {
			$('#faq-tabs').minimalTabs();
		}		
		// /tabs
		

		// reviews slider init
		$('.reviews-slider').slick({
			infinite: false,
			arrows: true,
			speed: 700,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						adaptiveHeight: true
					}
				}
			]
		});
		if (windowWidth >= largeMobDesktop) {
			$('.reviews-slider .review').equalHeights();
		}	
		
		
		// same height in about-us section
		// if (windowWidth >= tabletDesktop) {
		// 	$('.s-about-us .socials__wrapper, .s-about-us .about-us__wrapper').equalHeights();
		// }


		// to top
		$('.top').click(function() {
			$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > $(window).height()) {
				$('.top').addClass("active");
			} else {
				$('.top').removeClass("active");
			}

			// fixed site header
			if ($(this).scrollTop() >= 50) {
				$("#my-header").addClass("sticky");
			} else{
				$("#my-header").removeClass("sticky");
			}
		});


		// input mask init
		$('input[type=tel]').mask('+38 (000) 000 00 00');


		// init popups
		$('.to-popup').magnificPopup({
			type: 'inline',
			fixedContentPos: true,
			fixedBgPos: true,
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			mainClass: 'mfp-fade',
			removalDelay: 300,
		});
		$('.popup').on('click', '.btn-continue', function(e) {
			e.preventDefault();
			$.magnificPopup.close();
		});


		// filter trigger
		$('[data-filter-tab="toggle"]').on('click', function(){
			$(this).closest('.filter-tab').toggleClass('filter-tab__closed');
			$(this).next('.filter-tab__content').slideToggle(300);
		});
		$('.filter-tab .filter-option__label.checked').closest('.filter-tab__content').addClass('open');

		$('[data-trigger="options"]').on('click', function(e){
			e.preventDefault();
			var filterOptions = $(this).closest('.filter-tab__options-list').find('[data-visible]'),
					triggerOpenText = $(this).attr('data-text-open'),
					triggerCloseText = $(this).attr('data-text-close');
			if(!$(this).hasClass('active')){
				filterOptions.attr('data-visible', 'true');
				$(this).addClass('active');
				$(this).find('.filter-option__name').text(triggerCloseText);
			} else {
				filterOptions.attr('data-visible', 'false');
				$(this).removeClass('active');
				$(this).find('.filter-option__name').text(triggerOpenText);
			}
		});

		// trigger to mobile filter
		$('[data-toggle="filter"]').click(function() {
			$('.filter__wrapper').addClass('active');
			$('html').addClass('__fixed __show-overlay');
		});
		$('[data-close="filter"]').on('click', function(){
			$('.filter__wrapper').removeClass('active');
			$('html').removeClass('__fixed __show-overlay');
		});

		// trigger to mobile account nav
		$('[data-toggle="account__nav"]').click(function() {
			$('.account__nav--wrapper').addClass('active');
			$('html').addClass('__fixed __show-overlay');
		});

		// filter price slider init
		var keypressSlider = document.getElementById('keypress');
		var input0 = document.getElementById('input-with-keypress-0');
		var input1 = document.getElementById('input-with-keypress-1');
		var input0Start = parseInt($('#input-with-keypress-0').attr("data-start"));
		var input1Start = parseInt($('#input-with-keypress-1').attr("data-start"));
		var input1Min = parseInt($('#input-with-keypress-1').attr("data-min"));
		var input1Max = parseInt($('#input-with-keypress-1').attr("data-max"));
		var inputs = [input0, input1];

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


		//  more text
		function showText() {
			$('.show-text').each(function(){
				var textBlock = $(this),
						heightTextWrap = textBlock.find(".text-wrap").innerHeight(),
						heightText = textBlock.find(".text-wrap .text").innerHeight(),
						textMoreBtnWrap = textBlock.find(".btn-wrap"),
						textMoreBtn = textBlock.find(".btn-wrap .btn__text-more");
						
				if (heightText > heightTextWrap) {
					textMoreBtnWrap.removeClass('hidden');
					textMoreBtn.on('click', function() {
						var heightTextWrapAfterClick = $(this).closest(".show-text").find(".text-wrap").innerHeight(),
								textWrap = $(this).closest(".show-text").find(".text-wrap"),
								heightInside = textWrap.find(".text").innerHeight() + 20,
								closeText = $(this).attr('data-text-close'),
								openText = $(this).attr('data-text-open');

						
						
						if(heightTextWrap == heightTextWrapAfterClick) {
							textBlock.addClass('active');
							textWrap.innerHeight(heightInside);
							textBlock.find(".text-wrap").css("max-height", heightInside);
							$(this).text(closeText);
						}
						else {
							textBlock.removeClass('active');
							textWrap.innerHeight(heightTextWrap);
							$(this).text(openText);
						}
					});
				};
			});
		}
		if ($('.show-text').length) {
			showText();
		}


		// same width for product sort blocks
		if($('.product-sort__item').length) {
			$('.product-sort__group .product-sort__item').each( function () {
				var $sortItemSelectedWidth = $(this).find('.product-sort__item-selected'),
						$sortItems = $(this).find('.product-sort__item-select').css("width");
				$sortItemSelectedWidth.css("width", $sortItems);
			});
		}

		if($('.product-thumb__more').length) {
			var productThumbHeight = $('.product-thumb:first').innerHeight();
			$('.product-thumb__more').css('height', productThumbHeight)
		}

		// lost password trigger
		$('.login-form__lost').on('click', function() {
			$('[data-form="login"]').hide();
			$('[data-form="lost"]').show();
		});
		$('.lost-form__login').on('click', function() {
			$('[data-form="lost"]').hide();
			$('[data-form="login"]').show();
		});

		// custom select
		function initStyledSelects() {
			$('body').delegate('.form__group-select-head', 'click', function (e) {
				var isActive = $(this).closest('.form__group-select-wrap').hasClass('active');
	
				$('.form__group-select-head').each(function () {
					$(this).closest('.form__group-select-wrap').removeClass('active');
				});
	
				if (isActive) {
					$(this).closest('.form__group-select-wrap').removeClass('active');
				} else {
					$(this).closest('.form__group-select-wrap').addClass('active');
				}
			});
	
			$('body').delegate('.js-select .form__group-select-list li', 'click', function () {
				var $selectedValue = $(this).closest('.form__group-select').find('.selectedvalue');
				$selectedValue.val($(this).attr('data-value'));
				$selectedValue.trigger('change');
				$(this).closest('.form__group-select-wrap').removeClass('active');
	
				$(this).closest('.js-select').find('.form__group-select-selected').text($(this).text());
			});
		}	

		initStyledSelects();

		// Initialize ajax autocomplete:
		$('#city').autocomplete({
			serviceUrl: 'assets/js/cities.json',
			dataType: 'json',
			minChars: 1,
			appendTo: '.checkout__city',
			onSelect: function(suggestion) {
				$('#city-id-selected').val(suggestion.data);
				$('#invalidate-selection').hide();
			},
			onInvalidateSelection: function() {
				$('#invalidate-selection').show().html('Пожалуйста, выберите город из выпадающего списка');
			}
		});

		// checkout select delivery & payment
		$('body').delegate('.checkout__delivery .checkout__option input', 'change', function (e) {
			$('.checkout__delivery .checkout__option').attr('data-checked', 'false');
			$(this).closest('.checkout__option').attr('data-checked', 'true');
		});
		$('body').delegate('.checkout__payment .checkout__option input', 'change', function (e) {
			$('.checkout__payment .checkout__option').attr('data-checked', 'false');
			$(this).closest('.checkout__option').attr('data-checked', 'true');
		});

		// checkout comment trigger
		$('.checkout__comment-btn').on('click', function(e){
			$(this).closest('.checkout__comment').toggleClass('active');
			// $(this).next('.checkout__comment-textarea').slideToggle(300);
		});


		// custom scroll init
		$('.scrollbar-rail').scrollbar();

		// checkout applys trigger
		$('.applys__item .btn-link').on('click', function(e){
			$(this).closest('.applys__item').toggleClass('active');
		});

		// checkout step trigger
		$('#btn-next-step').on('click', function(e){
			e.preventDefault();
			$(this).closest('.btn-submit__wrap').addClass('active');
			$('.checkout__steps-item__del-ord').show(300);
		});

		// checkout totals responsive swith
		if (windowWidth <= tabletDesktop) {
			$('.order__data').appendTo('.checkout__cart');
		}
				

		// input file
		$('.file-input').on('change', function (e) {
			var file = e.originalEvent.srcElement.files[0];
			var reader = new FileReader();
			var inputParent = $(this).closest('.form__group-input');
			var fileImg = inputParent.find('.file-img');
			reader.onloadend = function () {
				inputParent.addClass('active');
				fileImg.attr('src', reader.result);
			}
			reader.readAsDataURL(file);
		});


		// map
		var mapLat = +$('.map').attr("data-lat");
		var mapLng = +$('.map').attr("data-lng");
		var mapTitle = $('.map').attr("data-title");

		function initMap() {

			var mapOptions = {
				zoom: 17,
				center: new google.maps.LatLng(mapLat, mapLng),
				mapTypeControl: false,
				styles: [
					{ stylers: [{ saturation: -80 }, { gamma: 1 }] },
					{ featureType: "transit.station", elementType: "labels.icon", stylers: [{ gamma: 1 }, { saturation: 50 }] }
				]
			};

			var mapElement = document.querySelector('.map');
			var map = new google.maps.Map(mapElement, mapOptions);

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(mapLat, mapLng),
				map: map,
				title: mapTitle
			});
		}

		if(document.querySelector('.map')){
			initMap();
		}

		// compare
		function compareItemsHeights() {
			var compareTable = $('.table-compare');
			compareTable.each(function(){
				var compareItem = $(this).find('.table-compare__item');
				compareItem.each(function(i){
					$(this).attr('data-item','item-'+i);
				});
				setTimeout(function(){
					for(let i = 0; i < compareItem.length; i++){
						$('[data-item=item-'+i+']').equalHeights();
					}
				}, 200);
			});	
		}
		
		// if($('.compare__block').length){
		// 	$('.compare__block .one-goods__image').equalHeights();
		// 	setTimeout(function(){
		// 		$('.compare__block .one-goods__first').equalHeights();
		// 	}, 100);
		// 	compareItemsHeights();
		// }

		$('.compare-page__slider').on("init", function(event, slick){
			$('.compare__block .one-goods__image').equalHeights();
			setTimeout(function(){
				$('.compare__block .one-goods__first').equalHeights();
			}, 30);
			compareItemsHeights();
		});
		
		$('.compare-page__slider').slick({
			infinite: false,
			arrows: true,
			speed: 700,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						adaptiveHeight: true
					}
				}
			]
		});


		// FAQ accordion
		if ($('.faq-accordion').length) {
			$('.faq-accordion').accordion();
		}

		// scroll to id
		$('.to-id').on('click', function(e){
			e.preventDefault();
			$(document).off("scroll");

			var target = this.hash,
					$target = $(target);

			$('html, body').stop().animate({
					'scrollTop': $target.offset().top - 100
			}, 700, 'swing');
		});


		// product refular delivery
		$('#reg-delivery__input').on('change', function(){
			var priceCurrent = $(this).data('price-current');
			var priceSale = $(this).data('price-sale');
			if($(this).prop('checked')){
				$(this).closest('.reg-delivery').find('.form__group-select').addClass('active');
				$(this).closest('.product-info_container').find('.price-new').text(priceSale).addClass('accent-light');
			} else {
				$(this).closest('.reg-delivery').find('.form__group-select').removeClass('active');
				$(this).closest('.product-info_container').find('.price-new').text(priceCurrent).removeClass('accent-light');
			}
		});
		if (windowWidth <= largeMobDesktop) {
			$('.product-info .reg-delivery').insertBefore('.product-info .product-controls');
		}


		/**
		 * Function NumberEnd
		 **/
		function NumberEnd( mNumber, mEnds ) {
			var cases = [2, 0, 1, 1, 1, 2];
			return mEnds[ (mNumber%100>4 && mNumber%100<20)? 2 : cases[Math.min(mNumber%10, 5)] ];
		}
		// console.log("В корзине: <span>"+5+"</span> товар"+NumberEnd(5, ["", "а", "ов"]));


		// add pets
		$('.btn__add-pets').on('click', function(e){
			e.preventDefault();
			var popupForm = $(this).data('form');
			var popupTitle = $(this).data('title');
			$('#pets__form').attr('data-form', popupForm);
			$('#pets__form .popup__title').text(popupTitle);
		}).magnificPopup({
			items: {
				src: '#pets__popup',
				type: 'inline'
			}
		});
		

		// history orders trigger
		$('[data-toggle="history-order__descr-table"]').click(function() {
			if($(this).hasClass('active') == true ){
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
			$(this).next('.history-order__descr-table').slideToggle(500);
		});


		// share slider init
		if ($('.share-slider').length) {		
			$('.share-slider').slick({
				slidesToShow: 1,
				dots: true,
				arrows: false,
				speed: 800,
				adaptiveHeight: false,
				autoplay: true,
				autoplaySpeed: 7000
			});
		}


		// change info case switcher
		$('.js-case-info-btn').on('click', function(e){
			e.preventDefault();
			var $case = $(this).closest('.case-info');
			var $form = $(this).data('form');
			$case.hide();
			$($form).show();
		});
		
		
		$(document).on('click touchstart', function (event) {	
			if (!$(event.target.closest('.form__group-select-wrap')).is(".form__group-select-wrap") && $('.form__group-select-wrap').hasClass('active')) {
				$(".form__group-select-wrap").removeClass('active');
			}
		});
		
	});


})(jQuery);
