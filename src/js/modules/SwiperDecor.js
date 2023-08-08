import Swiper, {
  Navigation,
  Pagination
} from "swiper/swiper-bundle";

Swiper.use([Navigation, Pagination]);

export default function () {
  if (window.matchMedia('(max-width: 1200px)').matches) {
    const sliders = document.querySelectorAll('.decor__swiper');

    sliders.forEach(slider => {

      new Swiper(slider, {
        // loop: true,
        speed: 500,
        slidesPerView: 1.2,
        spaceBetween: 2,
        // autoHeight: true,
        navigation: {
          nextEl: slider.querySelector('.decor__swiper-navigation-next'),
          prevEl: slider.querySelector('.decor__swiper-navigation-prev')
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2.2,
          },
        },
      });
    });
  }

}
