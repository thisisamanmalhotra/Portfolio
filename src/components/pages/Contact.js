import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  height: 75vh;

  h2 {
    color: #089;
    font-weight: bold;
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
    <Style>
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
    </Style>
  );
}

export default Contact;
