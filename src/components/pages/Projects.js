import React from "react";
import styled from "styled-components";
import { FaLink } from "react-icons/fa";

import port1 from "./../../assets/images/port1.png";
import beach1 from "./../../assets/images/beach1.png";
import srmth1 from "./../../assets/images/srmth1.png";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Montserrat Alternates";

  h2 {
    color: #089;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  .main {
    display: flex;
    flex-direction: row;
  }

  .projects {
    padding-bottom: 2rem;
  }

  .heading {
    font-size: 1.7rem;
    font-weight: bold;
  }

  .img,
  .desc {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    margin: 2rem;
    border: 2px solid #fff;
    box-shadow: 2px 2px 2px #ccc;
  }

  .desc {
    padding: 2rem;
    flex-direction: column;
  }

  .img1,
  .img3,
  .desc2 {
    order: 1;
  }

  .img2,
  .desc1,
  .desc3 {
    order: 2;
  }
  .skills {
    font-size: 1rem;
    color: #089;
    font-weight: bold;
  }

  .icon {
    margin-right: 0.8rem;
  }

  img {
    width: 100%;
  }

  button {
    border-radius: 20px;
    background: #089;
  }

  button:hover {
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

  a {
    color: #fff;
    font-size: 0.8rem;
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 850px) {
    .img1,
    .img2,
    .img3 {
      order: 1;
    }

    .desc1,
    .desc2,
    .desc3 {
      order: 2;
    }

    .img,
    .desc {
      width: 90%;
    }

    .main {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

const Projects = () => (
  <MainWrapper>
    <h2>PROJECTS</h2>
    <hr />
    <hr />
    <div className="projects">
      <p className="heading">Portfolio Site</p>
      <div className="main">
        <div className="img img1">
          <img src={port1} alt="Portfolio Site" />
        </div>
        <div className="desc desc1">
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
    </div>

    <hr />
    <hr />

    <div className="projects">
      <p className="heading">Beach Resort</p>
      <div className="main">
        <div className="img img2">
          <img src={beach1} alt="Beach Resort" width="60%" />
        </div>
        <div className="desc desc2">
          <p>
            My internship Project. This site was created for all the beach
            lovers who like to travel around the globe and love to have a beach
            view from their resorts/hotels.
          </p>
          <br />
          <p className="skills">REACTJS - CONTENTFUL CMS</p>
          <button className="btn">
            <a
              href="https://resort.ga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className="icon" />
              VISIT
            </a>
          </button>
        </div>
      </div>
    </div>

    <hr />
    <hr />

    <div className="projects">
      <p className="heading">SRM Team Humanoid Website</p>
      <div className="main">
        <div className="img img3">
          <img src={srmth1} alt="SRM Team Humanoid" width="60%" />
        </div>
        <div className="desc desc3">
          <p>
            My very first freelance project. Here I created a website for a team
            called Humanoid from SRM Institute Of Science & Technology. I wanted
            it to be simple and convenient to browse.
          </p>
          <br />
          <p className="skills">HTML5 - CSS3 - VANILLA JAVASCRIPT</p>
          <button className="btn">
            <a
              href="https://srmth.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className="icon" />
              VISIT
            </a>
          </button>
        </div>
      </div>
    </div>
  </MainWrapper>
);

export default Projects;
