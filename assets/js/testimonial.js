//Slick Carousel Controllers
$(".testimonial-reel").slick({
    centerMode: true,
    centerPadding: "40px",
    // dots: true,
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });