import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Card from "./Card";
import vivek from "./../../assets/images/vivek.svg";
import resume from "./../../assets/Resume.pdf";
import ampersand from "./../../assets/images/ampersand.svg";
import bgImage from "./../../assets/images/bg.svg";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  
  .design-code {
    color: #089;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    img {
      vertical-align: baseline;
    }
  }

  .row {
    height: 80vh;
  }

  h1 {
    font-family: "IBM Plex Mono", sans-serif;
    font-weight: bold;
  }

  .container {
    width: 50%;
  }

  .span1 {
    color: #089;
  }

  .span2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
  }

  .col1 {
    display: flex;
    flex-direction: column;
    flex: 1;
    letter-spacing: 0.1rem;
    line-height: 5rem;
  }

  .col2 {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  @media (max-width: 1000px) {
    .col2 {
      display: none;
    }

    .container {
      width: 100%;
    }

    .design-code {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 420px) {
    .row {
      margin-bottom: 5rem;
    }
  }

  .col2 img {
    border: 1px solid #c2c2c2;
    box-shadow: 0px 3px 3px #c2c2c2;
    border-radius: 50%;
  }

  .change-content:after {
    content: "";
    animation: changeText 6s infinite linear;
    font-style: italic;
    font-weight: bold;
    color: #089;
  }

  @keyframes changeText {
    0% {
      content: "Passionate";
    }
    50% {
      content: "Committed";
    }
    100% {
      content: "Self-taught";
    }
  }

  .col3 {
    padding: 3rem;
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }

  .btn {
    background:transparent;
    text-align:center;
    letter-spacing:1px;
    font-size:1.4em;
    line-height:1.2em;
    border:5px solid #089;
    overflow:hidden;
    transition:all 0.5s;
    border-radius: 4px;
  }

  .btn:hover, .btn:active {
    text-decoration: none;
    color:#fff;
    border-color:#089;
    background:#089;
  }

  .btn-label {
    display:inline-block;
    position:relative;
    padding-right:0;
    transition:padding-right 0.5s;
    color:#089;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  .btn-label:after {
    content: "";
    position:absolute;
    right:-50px;
    opacity:0;
    top:22%;
    width:10px;
    height:10px;
    margin-right:-10px;
    background:rgba(0,0,0,0);
    border:3px solid #fff;
    border-top:none;
    border-right:none;
    transition: opacity 0.5s, top 0.5s, right 0.5s;
    transform:rotate(225deg);
  }

  .btn:hover .btn-label,
  .btn:active .btn-label {
    padding-right:30px;
    color:#f5f1e7;
  }

  .btn:hover .btn-label:after,
  .btn:active .btn-label:after {
    transition:opacity: 0.5s, top 0.5s, right 0.5s;
    opacity:1;
    right:10px;
    top:22%;
  }
`;

const Home = () => {
  return (
    <MainWrapper>
      <Helmet>
        <title>Vivek Mittal | Web Developer</title>
        <meta
          name="description"
          content="This is the homepage for Vivek Mittal"
        />
      </Helmet>

      <div className="row">
        <div className="container">
          <div className="col1">
            <h1>
              Hi! 👋 I'm <span className="span1">Vivek</span>
            </h1>
            <h1>
              a Developer based in Chennai, India
              <span className="span2"> IN</span>
            </h1>

            <p className="design-code">
              I Design <img src={ampersand} alt="&" /> Code.
            </p>

            <p>
              A <span className="change-content"></span> Full-Stack Developer!
            </p>
          </div>
        </div>

        <div className="col2">
          <img src={vivek} alt="Vivek" width="308px" height="308px" />
        </div>
        <div className="col3">
          <button className="btn">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <span class="btn-label">RESUME</span>
            </a>
          </button>
        </div>
      </div>
      <Card />
    </MainWrapper>
  );
};

export default Home;
