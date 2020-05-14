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

  h2 {
    color: #089;
    font-weight: bold;
    letter-spacing: 0.25rem;
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

      <h2>CONTACT ME</h2>
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
