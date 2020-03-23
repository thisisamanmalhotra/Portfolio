import React from "react";
import styled from "styled-components";

import Card from "./Card";
import vivek from "./../../assets/images/vivek-min.png";
import resume from "./../../assets/Resume.pdf";

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

  .handshake {
    animation: shake 5s infinite linear;
  }

  @keyframes shake {
    0% {
     transform: translateX(10deg); 
    }
    50% {
     transform: translateX(20deg); 
    }
    100% {
     transform: translateX(0deg); 
    }
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
    justify-content: flex-end;
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
    box-shadow: 0px 6px 5px #ccc;
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
    font-family: "Montserrat Alternates";
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
    <Main>
      <div className="row">
        <div className="container">
          <div className="col1">
            <h1>
              Hi! <span className="handshake">👋</span> I'm{" "}
              <span className="span1">Vivek</span>
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
        <div className="col3">
          <button className="btn">
            <a href={resume}>
              <span class="btn-label">RESUME</span>
            </a>
          </button>
        </div>
      </div>
      <Card />
    </Main>
  );
};

export default Home;
