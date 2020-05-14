import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2rem;
  font-family: "Montserrat", sans-serif;

  span {
    font-style: italic;
    font-weight: bold;
  }

  .title {
    transform: skew(-3deg, -3deg);
    box-shadow: 3px 3px 3px #888888;
    background: #089;
    padding: 0.4rem;

    h2 {
      font-weight: bold;
      color: #fff !important;
      letter-spacing: 0.1rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    line-height: 3rem;
  }

  .skill-stack {
    font-weight: bold;
  }

  .skills {
    font-size: 1rem;
    font-weight: bold;
    color: #089;
  }
`;

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/about");
}

function About() {
  initializeReactGA();

  return (
    <MainWrapper>
      <Helmet>
        <title>Vivek Mittal | About</title>
        <meta
          name="description"
          content="This page contains information about Vivek Mittal"
        />
      </Helmet>

      <div className="title">
        <h2>About Me</h2>
      </div>
      <br />
      <p>
        If you're <span>wondering</span> who <span>I am ...</span>
      </p>
      <br />
      <br />
      <p>
        I'm Vivek, a 20 year old, Self-taught designer and coder from India.
      </p>
      <p>
        I'm a 3rd year student current completing my Bachelors in Computer
        Science from SRM Institute Of Science and Technology.
      </p>
      <p>
        I started learning coding when I came to college. I struggled through my
        1st semester and was introduced with the C programming language.
      </p>
      <p>
        I found it very difficult to understand. Then one day I woke up and
        thought about starting from the basics. So I started with the HTML and
        CSS and then I moved on with JavaScript.
      </p>
      <p>
        I started developing an interest in JavaScript and at that moment I got
        myself clear that I would like to continue my journey ahead with
        JavaScript. During this time I took a few courses and watched a
        countless number of YouTube videos.
      </p>
      <p>
        I dream of creating my course someday to help others learn the modern
        trends in Computer Science and thinking of starting from the YouTube
        which is a great platform to start.
      </p>
      <p>
        I like to cook and play Clash of Clans & PUBG in my free time (I am
        quiet good at them 😜).
      </p>
      <p>
        I always want to learn more, do more, and be more. I’m also a firm
        believer that we should never settle.
      </p>
      <p>
        I’m hard working, super curious, passionate, committed, and also a fast
        learner!
      </p>
      <br />
      <br />
      <p className="skill-stack">
        My current Stack of languages/technologies is:
      </p>
      <br />
      <p className="skills">
        HTML5 - CSS3 - JAVASCRIPT - MONGODB - REACTJS - NODEJS - STYLED
        COMPONENTS - FIGMA - GITHUB - CONTENTFUL - MYSQL - REACT NATIVE
      </p>
    </MainWrapper>
  );
}

export default About;
