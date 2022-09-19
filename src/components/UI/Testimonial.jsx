import React from "react";
import Slider from "react-slick";
import "../../styles/Testimonial.css";

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
            dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          necessitatibus voluptas voluptate! Voluptas quisquam nam, numquam
          quaerat vel eligendi illo reiciendis porro libero ipsam provident
          quidem at? Ducimus iusto fugiat ipsum. Velit suscipit aliquam mollitia
          eius pariatur? Voluptates ratione nesciunt laboriosam inventore? Illo.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
            alt=""
            className="w-25 h-25 rounded-2"
          />

          <div>
            <h6 className="mb-0 mt-3">Joe Jhonson</h6>
            <p className="section__desc">Custumer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          necessitatibus voluptas voluptate! Voluptas quisquam nam, numquam
          quaerat vel eligendi illo reiciendis porro libero ipsam provident
          quidem at? Ducimus iusto fugiat ipsum. Velit suscipit aliquam mollitia
          eius pariatur? Voluptates ratione nesciunt laboriosam inventore? Illo.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt=""
            className="w-25 h-25 rounded-2"
          />

          <div>
            <h6 className="mb-0 mt-3">Joe Jhonson</h6>
            <p className="section__desc">Custumer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          necessitatibus voluptas voluptate! Voluptas quisquam nam, numquam
          quaerat vel eligendi illo reiciendis porro libero ipsam provident
          quidem at? Ducimus iusto fugiat ipsum. Velit suscipit aliquam mollitia
          eius pariatur? Voluptates ratione nesciunt laboriosam inventore? Illo.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img
            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
            alt=""
            className="w-25 h-25 rounded-2"
          />

          <div>
            <h6 className="mb-0 mt-3">Joe Jhonson</h6>
            <p className="section__desc">Custumer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          necessitatibus voluptas voluptate! Voluptas quisquam nam, numquam
          quaerat vel eligendi illo reiciendis porro libero ipsam provident
          quidem at? Ducimus iusto fugiat ipsum. Velit suscipit aliquam mollitia
          eius pariatur? Voluptates ratione nesciunt laboriosam inventore? Illo.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
            className="w-25 h-25 rounded-2"
          />

          <div>
            <h6 className="mb-0 mt-3">Joe Jhonson</h6>
            <p className="section__desc">Custumer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
