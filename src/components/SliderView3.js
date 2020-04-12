import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import srmth1 from "./../assets/images/srmth1.jpg";
import srmth2 from "./../assets/images/srmth2.jpg";

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    box-shadow: 2px 2px 2px #000;
  }
`;

export default class SliderView3 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <img src={srmth1} alt="Portfolio" />
          </div>
          <div>
            <img src={srmth2} alt="Portfolio" />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
