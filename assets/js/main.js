//   slick slider
$('.sliders').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    arrows:false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      });

      // technology section
      function show(id) {

        var id = document.getElementById(id);
        var element = document.getElementsByClassName('content1');
        var len = element.length;

        for (var i = 0; i < len; i++) {

            if (element[i].classList.contains('block')) {
                element[i].classList.remove('block');
            }

        }
        id.classList.add('block');

    }
