import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCodepen,
} from "react-icons/fa";

const Style = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
  padding-top: 3rem;
  padding-bottom: 0.8rem;

  .a {
    color: #000;
  }

  a:hover {
    color: #089;
    transition: 0.4s ease-in-out;
  }

  .col1 {
    display: flex;
    justify-content: space-around;
  }

  .col2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    flex-direction: column;
    padding-top: 2rem;
  }

  p {
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: 500px) {
    .col2 {
      font-size: 0.9rem;
    }
  }
`;

const Footer = () => (
  <Style className="container">
    <div className="col1">
      <a
        href="https://github.com/vivek1909"
        target="_blank"
        rel="noopener noreferrer"
        className="a"
      >
        <FaGithub />
      </a>
      <a
        href="https://codepen.io/vivek-mittal/"
        target="_blank"
        rel="noopener noreferrer"
        className="a"
      >
        <FaCodepen />
      </a>
      <a
        href="https://www.linkedin.com/in/vivek-mittal/"
        target="_blank"
        rel="noopener noreferrer"
        className="a"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/vivek96_"
        target="_blank"
        rel="noopener noreferrer"
        className="a"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/vivekk.js/"
        target="_blank"
        rel="noopener noreferrer"
        className="a"
      >
        <FaInstagram />
      </a>
    </div>
    <div className="col2">
      <p>© {new Date().getFullYear().toString()} Vivek Mittal</p>
    </div>
  </Style>
);

export default Footer;
