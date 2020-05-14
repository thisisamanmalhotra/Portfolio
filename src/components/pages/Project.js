import React from "react";
import styled from "styled-components";
import SliderView from "../SliderView";
import { FaLink } from "react-icons/fa";
import { Helmet } from "react-helmet";

import port1 from "./../../assets/images/port1.jpeg";
import port2 from "./../../assets/images/port2.jpeg";
import port3 from "./../../assets/images/port3.jpeg";
import srmth1 from "./../../assets/images/srmth1.jpeg";
import srmth2 from "./../../assets/images/srmth2.jpeg";
import srmth3 from "./../../assets/images/srmth3.jpeg";
import beach1 from "./../../assets/images/beach1.jpeg";
import beach2 from "./../../assets/images/beach2.jpeg";
import beach3 from "./../../assets/images/beach3.jpeg";

const Wrapper = styled.div`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  font-family: "Montserrat Alternates", sans-serif;

  h2 {
    color: #089;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    letter-spacing: 0.25rem;
  }

  .col1,
  .col2 {
    width: 50%;
  }

  .col2 {
    padding: 3rem;
    justify-content: center;
    align-items: center;
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
    animation: jump 1s ease 0s normal;
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

  .heading {
    font-size: 1.7rem;
    font-weight: bold;
  }

  .skills {
    font-size: 1rem;
    color: #089;
    font-weight: bold;
  }

  @media (max-width: 850px) {
    .col1 {
      order: 1;
      margin-top: 1rem;
      width: 80%;
      padding: 0;
    }

    .col2 {
      order: 2;
      width: 80%;
      margin-top: 4rem;
      padding: 0;
    }

    .row {
      padding: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

function Projects() {
  return (
    <Wrapper>
      <Helmet>
        <title>Vivek Mittal | Projects</title>
        <meta
          name="description"
          content="This page contains all the projects done by Vivek Mittal"
        />
      </Helmet>

      <h2>PROJECTS</h2>
      <hr />
      <hr />
      <div className="projects">
        <p className="heading">Portfolio Site</p>
        <div className="row">
          <div className="col1">
            <SliderView img1={port1} img2={port2} img3={port3} />
          </div>
          <div className="col2">
            <p>
              This very site you're watching right now. I wanted something fast
              and with good SEO for my portfolio. It is a static website and it
              is easy for me to keep adding portfolio items in it.
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
        <div className="row">
          <div className="col2">
            <p>
              My internship Project. This site was created for all the beach
              lovers who like to travel around the globe and love to have a
              beach view from their resorts/hotels.
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
          <div className="col1">
            <SliderView img1={beach1} img2={beach2} img3={beach3} />
          </div>
        </div>
      </div>

      <hr />
      <hr />

      <div className="projects">
        <p className="heading">SRM Team Humanoid</p>
        <div className="row">
          <div className="col1">
            <SliderView img1={srmth1} img2={srmth2} img3={srmth3} />
          </div>
          <div className="col2">
            <p>
              My very first freelance project. Here I created a website for a
              team called Humanoid from SRM Institute Of Science & Technology. I
              wanted it to be simple and convenient to browse.
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

      <hr />
      <hr />
    </Wrapper>
  );
}

export default Projects;
