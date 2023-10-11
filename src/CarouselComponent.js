import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from './images/carouesl1.jpg';

import carousel2 from './images/carousel2.jpg';
import carousel3 from './images/carousel3.jpg';
import carousel4 from './images/carousel4.jpg';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
     autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-cell">
        <img src={carousel1} alt="Slide 1" />
        <div className="slide-text">
          <h1>Step into culture</h1>
          <h5>Footwear celebrating tradition</h5>
          <div className="carosel-button">Shop Now!</div>
        </div>
      </div>

      <div className="carousel-cell">
        <img src={carousel2} alt="Slide 2" />
        <div className="slide-text">
          <h1>Strut in Style</h1>
          <h5>Elegant and fashionable</h5>
        </div>
      </div>

      <div className="carousel-cell">
        <img src={carousel3} alt="Slide 3" />
        <div className="slide-text">
          <h1>Street Chic</h1>
          <h5>Trendy urban looks</h5>
        </div>
      </div>

      <div className="carousel-cell">
        <img src={carousel4} alt="Slide 4" />
        <div className="slide-text">
          <h1>Elevate Your Grace</h1>
          <h5>Luxury for every occasion</h5>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselComponent;
