import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import Card from "./Card";
import vivek from "./../../assets/images/vivek.svg";
import resume from "./../../assets/Resume.pdf";
import ampersand from "./../../assets/images/ampersand.svg";
import bgImage from "./../../assets/images/bg.svg";
import Button from "../Button";

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
  animation: homePg 3s;

  @keyframes homePg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .design-code {
    color: #089;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;

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
    font-family: "Montserrat", sans-serif;
  }

  .col1 {
    display: flex;
    flex-direction: column;
    flex: 1;
    letter-spacing: 0.1rem;
    line-height: 5rem;
    animation: column1 1s ease;
  }

  @keyframes column1 {
    0% {
      transform: translate(-30px, -30px);
      opacity: 0;
    }
  }

  .col2 {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    animation: column2 1s ease;
  }

  @keyframes column2 {
    0% {
      transform: translate(30px, 30px);
      opacity: 0;
    }
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
    animation: changeText 4s infinite ease;
    font-style: italic;
    font-weight: bold;
    color: #089;
  }

  @keyframes changeText {
    0%,
    100% {
      content: "Passionate";
    }
    40% {
      content: "Committed";
    }
    80% {
      content: "Self-taught";
    }
  }

  .col3 {
    padding: 3rem;
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    animation: column3 1s ease;
  }

  @keyframes column3 {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/home");
}

function Home() {
  initializeReactGA();

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
          <Button link={resume} text="RESUME" />
        </div>
      </div>
      <Card />
    </MainWrapper>
  );
}

export default Home;
