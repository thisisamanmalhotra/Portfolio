import React from "react";
import styled from "styled-components";
import SliderView from "../SliderView";
import ReactGA from "react-ga";
import { FaLink } from "react-icons/fa";
import { Helmet } from "react-helmet";

import port1 from "./../../assets/images/port1.png";
import port2 from "./../../assets/images/port2.jpeg";
import port3 from "./../../assets/images/port3.jpeg";
import srmth1 from "./../../assets/images/srmth1.jpeg";
import srmth2 from "./../../assets/images/srmth2.jpeg";
import srmth3 from "./../../assets/images/srmth3.jpeg";
import blog1 from "./../../assets/images/blog1.png";
import blog2 from "./../../assets/images/blog2.png";
import blog3 from "./../../assets/images/blog3.png";
import Button2 from "../Button2";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;

  h2 {
    color: #089;
    font-weight: bold;
    letter-spacing: 0.25rem;
  }

  p {
    letter-spacing: 0.1rem;
    line-height: 2rem;
  }

  .col1 {
    width: 50%;
    animation: column1 1s ease;
  }

  @keyframes column1 {
    0% {
      transform: translate(20px, -20px);
    }
  }

  .col2 {
    padding: 3rem;
    width: 50%;
    justify-content: center;
    align-items: center;
    animation: column2 1s ease;
  }

  @keyframes column2 {
    0% {
      transform: translateX(20px);
    }
  }

  .row {
    padding: 2rem;
  }

  .heading {
    font-size: 1.7rem;
    font-weight: bold;
    animation: heading 1s ease;
  }

  @keyframes heading {
    0% {
      transform: translateX(-20px);
    }
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

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/project");
}

function Projects() {
  initializeReactGA();

  return (
    <MainWrapper>
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
        <p className="heading">Personal Blog</p>
        <div className="row">
          <div className="col1">
            <SliderView img1={blog1} img2={blog2} img3={blog3} />
          </div>
          <div className="col2">
            <p>
              My personal blog site where I try to make life of web developers
              easy.
            </p>
            <br />
            <p className="skills">
              GATSBY - GRAPHQL - MDX - REACTJS - STYLED COMPONENTS - FIGMA
            </p>
            <Button2
              link="https://vivek-writes.netlify.com"
              icon={<FaLink className="icon" />}
              text="VISIT"
            />
          </div>
        </div>
      </div>

      <hr />
      <hr />

      <div className="projects">
        <p className="heading">Portfolio Site</p>
        <div className="row">
          <div className="col2">
            <p>This very site you're watching right now.</p>
            <br />
            <p className="skills">REACTJS - STYLED COMPONENTS - FIGMA</p>
            <Button2 link="/" icon={<FaLink className="icon" />} text="VISIT" />
          </div>
          <div className="col1">
            <SliderView img1={port1} img2={port2} img3={port3} />
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
            <Button2
              link="https://srmth.in"
              icon={<FaLink className="icon" />}
              text="VISIT"
            />
          </div>
        </div>
      </div>

      <hr />
      <hr />
    </MainWrapper>
  );
}

export default Projects;
