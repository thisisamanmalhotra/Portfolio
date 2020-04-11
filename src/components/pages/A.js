import React from "react";
import styled from "styled-components";
import SliderView from "./../SliderView";
import { FaLink } from "react-icons/fa";

const Wrapper = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;

  .col1,
  .col2 {
    width: 50%;
  }

  .col2 {
    padding: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Montserrat Alternates";
  }

  .row {
    padding: 2rem;
  }

  .btn {
    border: 0;
    border-radius: 20px;
    background: #089;
  }

  .btn:hover {
    animation: jump 1.5s ease 0s normal;
  }

  @keyframes jump {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }

  .btn a {
    color: #fff;
    font-size: 0.8rem;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function A() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col1">
          <SliderView />
        </div>
        <div className="col2">
          <p>
            This very site you're watching right now. I wanted something fast
            and with good SEO for my portfolio. It is a static website and it is
            easy for me to keep adding portfolio items in it.
          </p>
          <br />
          <p className="skills">REACTJS - STYLED COMPONENTS</p>
          <button className="btn">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaLink className="icon" />
              VISIT
            </a>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <h1>asbkjfnasl</h1>
          <p>kjasnfalkasklmflas lf</p>
        </div>
        <div className="col2">
          <SliderView />
        </div>
      </div>
    </Wrapper>
  );
}
