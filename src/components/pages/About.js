import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2rem;
  font-family: sans-serif;

  span {
    font-style: italic;
    font-weight: bold;
  }

  h2 {
    color: #089;
    font-weight: bold;
  }

  p {
    font-size: 1.3rem;
    font-family: sans-serif;
  }

  .skill-stack {
    font-weight: bold;
    font-family: "Montserrat Alternates";
  }

  .skills {
    font-size: 1rem;
    font-family: "Montserrat Alternates";
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
      <h2>ABOUT ME</h2>
      <br />
      <h5>
        If you're <span>wondering</span> who <span>I am ...</span>
      </h5>
      <br />
      <br />
      <p>
        I'm Vivek, a 20 year old, Self-taught Full-Stack Developer from India.
      </p>
      <p>
        I'm a 3rd year student current completing my Bachelors in Computer
        Science.
      </p>
      <p>
        I took CSE because everybody told me there is so much scope in it just
        like PCM. It was first time since I started coding in C programming
        language and it was a very rough semester for me.
      </p>
      <p>
        I found it very difficult to understand. Then one day I woke up and
        thought about starting from the basics. So I started with the HTML and
        CSS and then I moved on with the basic JavaScript.
      </p>
      <p>
        I started developing an interest in JavaScript and it was then I got
        myself clear that I would like to continue my journey ahead with
        JavaScript. During this time I took a few courses and watched a
        countless number of YouTube videos.
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
        HTML5 - CSS3 - JAVASCRIPT - MONGODB - EXPRESSJS - REACTJS - NODEJS -
        STYLED COMPONENTS - FIGMA - GITHUB - CONTENTFUL - MYSQL
      </p>
    </MainWrapper>
  );
}

export default About;
