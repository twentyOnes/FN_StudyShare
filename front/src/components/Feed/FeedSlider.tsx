import React from 'react';
import Slider from 'react-slick';
import { FeedImg } from './styles';

//피드 슬라이드 이미지
const FeedSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
  };

  return (
    <FeedImg>
      <Slider {...settings}>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/slider01.jpg'} alt="" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/slider01.jpg'} alt="" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/slider01.jpg'} alt="" />
        </div>
      </Slider>
    </FeedImg>
  );
};

export default FeedSlider;
