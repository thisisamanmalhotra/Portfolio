import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  height: 100vh;

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

  span {
    font-style: italic;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
  }

  a {
    font-weight: bold;
  }

  a:hover {
    text-decoration: none;
    color: #089;
    transition: 0.2s ease-in-out;
  }
`;

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/contact");
}

function Contact() {
  initializeReactGA();

  return (
    <MainWrapper>
      <Helmet>
        <title>Vivek Mittal | Contact</title>
        <meta
          name="description"
          content="This page contains the contact details of Vivek Mittal"
        />
      </Helmet>

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <br />
      <br />
      <br />
      <p>
        Want to <span>contact</span> me?
      </p>
      <p>
        Feel <span>free</span> to <span>reach me</span> at:
      </p>
      <br />
      <a href="mailto: vivekmittal199@gmail.com" className="lmao">
        vivekmittal199@gmail.com
      </a>
    </MainWrapper>
  );
}

export default Contact;
