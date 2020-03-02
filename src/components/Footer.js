import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaLinkedin,
  FaCodepen,
  FaGithub,
  FaTwitter
} from "react-icons/fa";

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 2rem;
  padding: 4rem;

  .a {
    color: #000;
  }

  a:hover {
    color: #089;
    transition: 0.5s ease-in-out;
  }
`;

const Footer = () => (
  <Style className="container">
    <a
      href="https://github.com/vivek1909"
      target="_blank"
      rel="noopener noreferrer"
      className="a"
    >
      <FaGithub />
    </a>
    <a
      href="https://codepen.io/vivek-mittal"
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
      href="https://www.instagram.com/vivek96_/"
      target="_blank"
      rel="noopener noreferrer"
      className="a"
    >
      <FaInstagram />
    </a>
  </Style>
);

export default Footer;
