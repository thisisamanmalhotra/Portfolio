import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import portfolio2 from "./../assets/images/portfolio2.png";
import beach from "./../assets/images/beach.png";
import srmth from "./../assets/images/srmth.png";

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    box-shadow: 1px 1px 1px #ccc;
  }
`;

export default class A extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <img src={portfolio2} alt="" />
          </div>
          <div>
            <img src={beach} alt="" />
          </div>
          <div>
            <img src={srmth} alt="" />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
