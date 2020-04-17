import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    box-shadow: 2px 2px 2px #000;
  }
`;

const settings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SliderView({ img1, img2, img3 }) {
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="img 1" />
        </div>
        <div>
          <img src={img2} alt="img 2" />
        </div>
        <div>
          <img src={img3} alt="img 3" />
        </div>
      </Slider>
    </Wrapper>
  );
}
