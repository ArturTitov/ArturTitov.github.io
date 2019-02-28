(function($) {
	'use strict'

	$(function() {

		var windowWidth = $(window).innerWidth(),
				windowHeight = $(window).height(),
				laptop = 1200,
				tabletDesktop = 992,
				largeMobDesktop = 767,
				mobileDesktop = 576,
				removeMd = $('.remove-md'),
				removeSm = $('.remove-sm'),
				removeXs = $('.remove-xs'),
				headerHeight = parseInt($('#my-header').innerHeight()),
				filterHeight = windowHeight - headerHeight;

		
		// media
		if (windowWidth <= tabletDesktop) {
			removeMd.remove();
			
			$('#my-content').css('margin-top', headerHeight);

			$('#mobile-catalog').removeClass('hidden').mmenu({
				extensions: [ 'position-front', 'effect-menu-slide', 'pagedim-black', 'theme-white' ],
				setSelected: true,
				navbar: {
					title: 'Каталог'
				}
			});

			$('.filter__wrapper').css('height', filterHeight);
			$('.filter__wrapper').css('top', headerHeight);
			$('.filter-trigger').css('top', headerHeight);
		}


		if (windowWidth <= largeMobDesktop) {
			removeSm.remove();
		}


		if (windowWidth <= mobileDesktop) {
			removeXs.remove();
		}

		if (windowWidth >= laptop) {
			var comparisonTable = $('.comparison');
			var thLength = comparisonTable.find('thead tr th').length;
			function comparisonTableWidth(elLength) {
				if(elLength <= 3 && comparisonTable.hasClass('full-width') == false) {
					comparisonTable.addClass('full-width');
				} else {
					comparisonTable.removeClass('full-width');
				}
			} comparisonTableWidth(thLength);
		}

		if (windowWidth >= mobileDesktop) {
			$('.blog-item__title').equalHeights();
			$('.product-item').equalHeights();
			$('.category-item__name').equalHeights();
			$('.share-item__info').equalHeights();
			$('.faq-list .accordion-item__title').equalHeights();
		}


		$('.menu .has-dropdown > span').on('click', function(e){
			e.preventDefault();
			$(this).parent().find('.dropdown').show();
		});


		$('.h-phones-more').on('click', function(e){
			e.preventDefault();
			$(this).next('.dropdown').show();
		});


		$('.search-btn').on('click', function(){
			$(this).closest('.search').toggleClass('active');
		});

		// product zoom img
		if (windowWidth >= largeMobDesktop) {
			$('#glasscase').glassCase({
				zoomPosition: 'inner',
				thumbsPosition: 'bottom',
				widthDisplay: 654,
				heightDisplay: 370,
				autoInnerZoom: true,
				nrThumbsPerRow: 4,
				isZoomDiffWH: true,
				isShowAlwaysIcons: true,
				isDownloadEnabled: false,
				zoomMargin: 10,
				colorActiveThumb: '#c6c6c6',
				thumbsMargin: 25
			});
		} else {
			$('#glasscase').glassCase({
				isOverlayEnabled: false,
				zoomPosition: 'inner',
				thumbsPosition: 'bottom',
				widthDisplay: 654,
				heightDisplay: 370,
				autoInnerZoom: true,
				nrThumbsPerRow: 4,
				isZoomDiffWH: true,
				isShowAlwaysIcons: true,
				isDownloadEnabled: false,
				zoomMargin: 10,
				colorActiveThumb: '#c6c6c6',
				thumbsMargin: 25
			});
		}

		// Product Grid
		if ($('#filter').length == 0) {
			$('.products-row .product-item').parent().attr('class', 'col-sm-6 col-lg-4');
		}

		// init main banner slider
		if ($('.main-banner').length) {
			$(".main-banner").slick({
				slidesToShow: 1,
				lazyLoad: 'progressive',
				dots: true,
				arrows: false,
				speed: 700,
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 8000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							autoplay: false,
						}
					}
				]
			});
		}


		// trigger to mobile filter
		$('[data-toggle="filter"]').click(function() {
			$(this).addClass('active');
			$('.filter__wrapper').addClass('active');
			$('html').addClass('__fixed __show-overlay');
		});

		// custom select
		$('.select').selectize();


		// mobile menu trigger
		$('[data-toggle="mobile-menu"]').click(function (e) {
			$(this).toggleClass('active');
			$('#mobile-menu').toggleClass('active');
			$('html').toggleClass('__fixed __show-overlay');
		});
		$('.mobile-menu .btn-close').on('click', function() {
			$('.mobile-menu').removeClass('active');
			$('#mobile-menu').removeClass('active');
			$('html').removeClass('__fixed __show-overlay');
		});

		// on page-overlay click
		$('.page-overlay').on('click', function() {
			if($('html').hasClass('__fixed __show-overlay') == true ) {
				$('html').removeClass('__fixed __show-overlay');
				$('#mobile-menu').removeClass('active');
				$('[data-toggle="filter"]').removeClass('active');
				$('.filter__wrapper').removeClass('active');
			}
		});


		// tabs
		$.fn.minimalTabs = function () {
			var tabWrapper = $(this),
					tabNav = tabWrapper.find('.tab-nav'),
					tabNavItem = tabWrapper.find('.tab-nav > li'),
					tabContent = tabWrapper.find('.tab-cont'),
					tabContentItem = tabWrapper.find('.tab-cont > .tab-pane');
			
			tabNavItem.each(function(i){
				$(this).attr('data-tab','tab'+i);
			});
			tabContentItem.each(function(i){
				$(this).attr('data-tab','tab'+i);
			});

			var activeTab = tabNav.find('li.active').data('tab');

			tabContentItem.not('[data-tab='+activeTab+']').hide();

			tabNav.on("click", 'li', function(event){
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
				}
			});
		};
		// init tabs 
		$('.products-tabs').minimalTabs();
		$('.blog-tabs').minimalTabs();
		$('.product-info__tabs').minimalTabs();
		// /tabs


		// init manufacturer slider
		$('.manufacturer-slider').slick({
			dots: false,
			arrows: true,
			speed: 1000,
			variableWidth: true,
			adaptiveHeight: false,
			slidesToShow: 1,
			slidesToScroll: 6,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						variableWidth: false
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						variableWidth: false
					}
				}
			]
		});
		$('.s-manufacturer .manufacturer-item__img').equalHeights();


		//  text more
		function showText() {
			var heightTextWrap = $(".show-text .text-wrap").innerHeight(),
					heightText = $(".show-text .text-wrap .text").innerHeight(),
					textMoreBtn = $(".show-text .btn-wrap .btn__text-more");
					
			if (heightText > heightTextWrap) {
					$(".show-text .btn-wrap").removeClass('hidden');
					textMoreBtn.on('click', function() {
							var heightTextWrapAfterClick = $(this).closest(".show-text").find(".text-wrap").innerHeight();
							var textWrap = $(this).closest(".show-text").find(".text-wrap");
							var heightInside = textWrap.find(".text").innerHeight() + 20;
							
							if(heightTextWrap == heightTextWrapAfterClick) {
									$(".show-text").addClass('active');
									textWrap.innerHeight(heightInside);
									$(".show-text .text-wrap").css("max-height", heightInside);
							}
							else {
									$(".show-text").removeClass('active');
									textWrap.innerHeight(heightTextWrap);
							}
					});
			};
		} showText();
		

		// init popups
		$('.to-popup').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			mainClass: 'mfp-fade',
			removalDelay: 300,
		});
		$('.btn-continue').on('click', function(e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
		
		
		// lost password trigger
		$('.login-form__lost').on('click', function() {
			$('[data-form="login"]').hide();
			$('[data-form="lost"]').show();
		});
		$('.lost-form__login').on('click', function() {
			$('[data-form="lost"]').hide();
			$('[data-form="login"]').show();
		});


		// input type file customization
		$(document).on('change', 'input[type="file"]', function() {
			var files = $(this).parent().find("input").prop("files");
			var names = $.map(files, function(val) { return val.name; });
			$(this).parent().find(".reviews-form__file-name").text(names);
		});


		// init products slider
		$('.slider-products').slick({
			dots: false,
			arrows: true,
			speed: 700,
			adaptiveHeight: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});


		// FAQ accordion
		var accordionItemTitle = $('.accordion-item__title'),
				accordionItemContent = $('.accordion-item__content');

		function closeAccordionItem() {
      $(accordionItemTitle).removeClass('active');
      $(accordionItemContent).slideUp(300);
		}
		
		$(accordionItemTitle).on('click', function(e) {
			e.preventDefault();

			if($(this).hasClass('active') == false) {
				closeAccordionItem();
				$(this).addClass('active');
				$(this).next('.accordion-item__content').slideDown(300);
			} else {
				closeAccordionItem();
			}
		});

		
		// filter price slider init
		var keypressSlider = document.getElementById('keypress');
		var input0 = document.getElementById('input-with-keypress-0');
		var input1 = document.getElementById('input-with-keypress-1');
		var input0Start = +$('#input-with-keypress-0').attr("data-start");
		var input1Start = +$('#input-with-keypress-1').attr("data-start");
		var input1Min = +$('#input-with-keypress-1').attr("data-min");
		var input1Max = +$('#input-with-keypress-1').attr("data-max");
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
			
					// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
					var steps = keypressSlider.noUiSlider.steps();
			
					// [down, up]
					var step = steps[handle];
			
					var position;
			
					// 13 is enter,
					// 38 is key up,
					// 40 is key down.
					switch ( e.which ) {
			
						case 13:
							setSliderHandle(handle, this.value);
							break;
			
						case 38:
			
							// Get step to go increase slider value (up)
							position = step[1];
			
							// false = no step is set
							if ( position === false ) {
								position = 1;
							}
			
							// null = edge of slider
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

		// reviews quantity
		var reviewsQnty =  $('.reviews-list .reviews-item').length;
		$('.reviews-section__head .reviews-qnty').html('(' + reviewsQnty + ')');

		
		$('.reviews-list__item').each(function() {
			var reviewsLevel1 = $(this).find('.reviews-item.level1'),
					reviewsLevel1Qnty = reviewsLevel1.length,
					reviewsLevel1QntyWithoutFirst = reviewsLevel1Qnty - 1,
					reviewsLevelFirst = reviewsLevel1.eq(0);
					
			if(reviewsLevel1Qnty > 1) {
				reviewsLevelFirst.removeClass('hidden');
				reviewsLevelFirst.after('<span class="show__all-reviews">Показать все ответы (' + reviewsLevel1QntyWithoutFirst + ')</span>');
				$('.show__all-reviews').on('click', function() {
					$(this).addClass('hidden');
					$(this).closest('.reviews-list__item').find('.reviews-item.hidden').removeClass('hidden');
				});
			}
		});
		

		// answer comment form
		$('[data-form="answer"]').on('click', function() {
				var toAnswerBtn = $(this);
				var div = $(this).parent().parent();
				var reviewerName = toAnswerBtn.closest('.reviews-item').find('.reviews-item__reviewer').text();
        
				var html = "<form class='answer-form'>";
				html += "<div class='answer-form__head'>Ответить <strong>"+ reviewerName +"</strong></div>";
				html += "<div class='d-flex justify-content-sm-between flex-wrap'>";
        html += "<div class='answer-form__content'>";
        html += "<textarea name='ReviewsText' cols='30' rows='2' required placeholder='Ответ...'></textarea>";
				html += "<label class='reviews-form__file'>";
				html += "<input type='file' name='file' multiple><span class='reviews-form__file-name'></span><span class='reviews-form__file-icon'><i class='icon-attach_file'></i></span>";
        html += "</label>";
        html += "</div>";
				html += "<div class='answer-form__info'>";
				html += "<input type='text' name='Name' required placeholder='Ваше имя'><button type='submit' class='btn butt1'><span>Ответить</span></button><button class='butt2'><span>Отмена</span></button>";
				html += "</div>";
				html += "</div>";
        html += "</form>";
				
        var block = $(html);		

        block.find(".butt2").click(function() {
					toAnswerBtn.css("display", "block");
					block.remove();
				});
        
        div.after(block);
				toAnswerBtn.css("display", "none");
		});
		
		/** 
		 * Function NumberEnd
		 **/
		function NumberEnd( mNumber, mEnds ) {
			var cases = [2, 0, 1, 1, 1, 2];
			return mEnds[ (mNumber%100>4 && mNumber%100<20)? 2 : cases[Math.min(mNumber%10, 5)] ];
		}
		console.log("В корзине: <span>"+5+"</span> товар"+NumberEnd(5, ["", "а", "ов"]));


		// map
		var mapLat = +$('.map').attr("data-lat");
		var mapLng = +$('.map').attr("data-lng");
		var mapMarker = $('.map').attr("data-marker");
		var mapTitle = $('.map').attr("data-title");
		var mapAddress = $('.contacts-item__title address').text();
		var mapPhones = $('.phones-list').html();

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

			var infowindow = new google.maps.InfoWindow({
				content: '<p class="info-window-title">Магазин велосипедов"' + mapTitle + '"</p>' +
					'<p class="info-w-text">' + mapAddress + '</p>' +
					'<ul class="info-window-phones">' + mapPhones +	'</ul>'
			});

			marker.addListener('click', function() {
					infowindow.open(map, marker);
			});
		}

		if(document.querySelector('.map')){
			initMap();
		}
		// /map


		// comparison		
		$('.comparison .comparison-product__close').on('click', function(e){
			e.preventDefault();
			var n = $(this).parent().parent().index();
			$('.comparison tr').find('td:eq('+ n +'),th:eq('+ n +')').remove();
		}); 
		$('.comparison-product .comparison-product__info').equalHeights();


		// history orders trigger
		$('[data-toggle="history-order__descr-table"]').click(function() {
			if($(this).hasClass('active') == true ){
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
			$(this).next('.history-order__descr-table').slideToggle(500);
		});


		// product tables qnty
		if($('.sizes-popup__tables .sizes-popup__table--wrapper').length == 2){
			$('.sizes-popup').removeClass('sizes-popup__col-1')
			$('.sizes-popup__tables').addClass('sizes-popup__tables-2');
		}

		
		// Initialize ajax autocomplete:
		$('#city').autocomplete({
			serviceUrl: 'assets/js/cities.json',
			dataType: 'json',
			minChars: 1,
			appendTo: '.checkout__row-city',
			onSelect: function(suggestion) {
				$('#city-id-selected').val(suggestion.data);
				$('#invalidate-selection').hide();
			},
			onInvalidateSelection: function() {
				$('#invalidate-selection').show().html('Пожалуйста, выберите город из выпадающего списка');
			}
		});	
		

		// to top
		$('.top').click(function() {
			$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > $(window).height()) {
				$('.top').addClass("active");
			} else {
				$('.top').removeClass("active");
			};
		});


		// animate text 
		$.fn.animate_Text = function () {
			var string = this.text();
			return this.each(function () {
				var $this = $(this);
				$this.html(string.replace(/./g, '<span class="new">$&</span>'));
				$this.find('span.new').each(function (i, el) {
					setTimeout(function () { $(el).addClass('div_opacity'); }, 35 * i);
				});
			});
		};


		// character
		function characterShow(el) {
			var $this = el;
			$this.addClass('active');
			setTimeout(function(){
				$this.find($('.character-text__inner')).addClass('active');
				$this.find($('.character-text__inner')).animate_Text();
			}, 700);
		}
		function characterHide(el) {
			var $this = el;
			setTimeout(function(){
				$this.removeClass('active');
				$this.find($('.character-text__inner')).removeClass('active');
			}, 6700); 
		}
		function characterLogic(el, t) {
			setTimeout(function(){
				characterShow(el);
				characterHide(el);
			}, t);
		};

		if($('.character-welcome').length){
			var timeBeforeShow = parseInt($('.character-welcome').attr("data-time"));
			characterLogic($('.character-welcome'), timeBeforeShow);

			// $(document).idle({
			// 	onIdle: function(){
			// 		$('.character-welcome').addClass('active');
			// 		setTimeout(function(){
			// 			$('.character-welcome .character-text__inner').addClass('active');
			// 			$('.character-welcome .character-text__inner').animate_Text();
			// 		}, 550);
			// 	},
			// 	onActive: function(){
			// 		setTimeout(function(){
			// 			$('.character-welcome').removeClass('active');
			// 			$('.character-welcome .character-text__inner').removeClass('active');
			// 			$('.character-welcome').addClass('used');
			// 		}, 3000);        
			// 	},
			// 	startAtIdle: true,
			// 	events: 'mousemove',
			// 	idle: 5000,
			// 	keepTracking: true
			// });
		}

		if($('.character-filter--help').length){
			var timeBeforeShow = parseInt($('.character-filter--help').attr("data-time"));
			characterLogic($('.character-filter--help'), timeBeforeShow);
		}

		if($('.character-help').length){
			var timeBeforeShow = parseInt($('.character-help').attr("data-time"));
			characterLogic($('.character-help'), timeBeforeShow);
		}
		
		if($('.character-checkout--help').length){
			var timeBeforeShow = parseInt($('.character-checkout--help').attr("data-time"));
			characterLogic($('.character-checkout--help'), timeBeforeShow);
		}
	
	});

	$(document).mouseup(function (e) {

		var dropdown = $(".dropdown"),
				search = $('.search');

		if(dropdown.is(':visible')) {dropdown.hide();}

		if(search.hasClass('active') == true && search.has(e.target).length === 0) {search.removeClass('active');}
	});

})(jQuery);
