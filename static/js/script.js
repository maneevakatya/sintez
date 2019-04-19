$(document).ready(function(event) {
    window.sf = {},

    window.sf.form = {
      init: function() {
        var o = this;
        $(".request__input--phone").keydown(function(e) {
            -1 !== $.inArray(e.keyCode, [
              46,
              8,
              9,
              27,
              13,
              110,
              190
            ]) || 65 == e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && e.keyCode <= 40 || (e.shiftKey || e.keyCode < 48 || 57 < e.keyCode) && (e.keyCode < 96 || 105 < e.keyCode) && e.preventDefault()
          }),
          $(".request__input--phone").inputmask("+7 (999) 999 - 99 - 99", {
            placeholder: " ",
            showMaskOnHover: !1,
            showMaskOnFocus: !1
          }),
          $(".request__form").submit(function(e) {
            if (!o.checkForm($(this)))
              return !1
          })
      },
      checkForm: function(e) {
        var o = !0;
        return e.find(".warning").removeClass("warning"),
          e.find("input, textarea, select").each(function() {
            if ($(this).data("req"))
              switch ($(this).data("type")) {
                case "mobile":
                  $.trim($(this).val()).length < 22 && ($(this).addClass("warning"), o = !1);
                  break;
                default:
                  "" === $.trim($(this).val()) && ($(this).addClass("warning"), o = !1)
              }
          }),
          o
      }
    }.init();

    window.sf.slider = ({
      init: function () {

        var Slider = new Swiper('.js-slider', {
          speed: 1500,
          spaceBetween: 240,
          effect: 'fade',
          direction: 'horizontal',
          slidesPerView: 1,
          pagination: {
            el: '.js-slider .swiper-pagination',
            type: 'bullets',
            clickable: true
          },
        });



      }
    }).init();

    window.sf.burger = ({
      init: function () {
        $('.js-burger').on('click', function () {
          var _t = $(this),
            nav = _t.siblings('.nav'),
            body = $('body');
          if (!_t.hasClass('header-fixed__burger--active')) {
            _t.addClass('header-fixed__burger--active');
           
            nav.fadeIn('350');
          } else {
            _t.removeClass('header-fixed__burger--active');
            
            nav.fadeOut('350');
          }
          return false;
        });
      }
    }).init();



    window.sf.slider = ({
      init: function () {

      $(window).scroll(function () {
        var top_show = 600; 
        if ($(window).width() > 1010) {

           if ($(this).scrollTop() > top_show) {
               $('.header-fixed').addClass('visible');
           }
           if ($(this).scrollTop() < top_show) {
               $('.header-fixed').removeClass('visible');   
           }
        }
      });
    }
    }).init();

    $("body").on("click", ".js-scrollTo", function(event) {
      event.preventDefault();
      var elementClick = $(this).attr("href").substr(1);
      var destination = $(elementClick).offset().top;

        if (($(window).width() <= 1010)) {

          $("html, body").animate({
            scrollTop: destination - 85
          }, 1500)

          $(".nav").slideUp('slow', function() {
            $(this).css('display', 'none');
          })
          $(".header-fixed__burger").toggleClass("header-fixed__burger--active");
          $("body").toggleClass("ovh");

        }
         else {
          $("html, body").animate({
            scrollTop: destination - 85
          }, 1500)
        }
    });

    window.sf.contacts = ({

		bindEvents: function() {
			var styles = 
            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "lightness": 75
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  },
                  {
                    "lightness": 40
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                  {
                    "lightness": -35
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "saturation": 100
                  },
                  {
                    "lightness": 100
                  },
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "color": "#80ff00"
                  },
                  {
                    "saturation": 100
                  },
                  {
                    "lightness": 100
                  },
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  },
                  {
                    "lightness": 35
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "saturation": 100
                  },
                  {
                    "lightness": 100
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "lightness": 65
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "labels",
                "stylers": [
                  {
                    "lightness": 25
                  },
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "lightness": 100
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "lightness": 30
                  }
                ]
              },
              {
                "featureType": "transit.station.rail",
                "elementType": "labels",
                "stylers": [
                  {
                    "lightness": 15
                  },
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "transit.station.rail",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "saturation": -100
                  },
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]

			var styledMap = new google.maps.StyledMapType(styles, {
				name: "Styled Map"
			});

			var mapOptions = {
				zoom: 16,
				scrollwheel: false,
				center: '',
                styles: styles,
                disableDefaultUI: true

			};

			var image = '/static/i/pin.png';

			mapOptions.center = new google.maps.LatLng(55.761103, 37.628890);
			map = new google.maps.Map(document.getElementById('contactsmap'), mapOptions);
			var start_point = new google.maps.LatLng(55.761103, 37.628890);

			var map_center = new google.maps.LatLng(55.761103, 37.628890);

			// if ($(window).width() <= 900) {
			// 	map.setCenter(start_point);
			// 	image = 'static/img/pin2.png';
			// } else {
			// 	map.setCenter(map_center);
			// }

			var marker = new google.maps.Marker({
				position: start_point,
				map: map,
				icon: image
			});

		},

		init: function() {

			if ($('#contactsmap').length)
				this.bindEvents();
		}

    }).init();
    
});


