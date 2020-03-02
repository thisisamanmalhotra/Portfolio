import React from "react";
import styled from "styled-components";
import vivek from "./../assets/images/vivek-min.png";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  justify-content: center;
  align-items: center;
  margin: 0;

  h1 {
    font-family: "IBM Plex Mono", monospace;
    font-weight: bold;
  }

  .container {
    width: 50%;
  }

  .span1 {
    color: #089eca;
  }

  .span2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
  }

  .col1 {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .col2 {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  @media (max-width: 775px) {
    .col2 {
      display: none;
    }

    .container {
      width: 100%;
    }
  }

  .col2 img {
    border-radius: 50%;
    border: 2px solid #fff;
    background: url(img/duck.png) no-repeat;
    -moz-box-shadow: 0px 6px 5px #ccc;
    -webkit-box-shadow: 0px 6px 5px #ccc;
    box-shadow: 0px 6px 5px #ccc;
    -moz-border-radius: 190px;
    -webkit-border-radius: 190px;
    border-radius: 190px;
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
`;

const Home = () => {
  return (
    <Main>
      <div className="row">
        <div className="container">
          <div className="col1">
            <h1>
              Hi! 👋 I'm <span className="span1">Vivek</span>
            </h1>
            <h1>a Developer based in Chennai</h1>
            <h1>
              India <span className="span2">IN</span>
            </h1>
            <br />
            <br />
            <p>
              A <span className="change-content"></span> Full-Stack Developer!
            </p>
          </div>
        </div>
        <div className="col2">
          <img src={vivek} alt="Vivek" width="308px" height="308px" />
        </div>
      </div>
    </Main>
  );
};

export default Home;
