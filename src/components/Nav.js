import React from "react";
import styled from "styled-components";
import logo from "./../assets/images/logo.png";

const Style = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.8rem;
  font-weight: bold;
  width: 100%;
  opacity: 0.97;
  position: fixed;
  z-index: 1;

  .unordered {
    display: flex;
    list-style: none;
    cursor: pointer;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .column1 {
    width: 75%;
  }

  .column2 {
    width: 25%;
  }

  @media (max-width: 1000px) {
    .column1,
    .column2 {
      width: 50%;
    }
  }

  a {
    color: #000;
  }

  a:hover {
    color: #089;
    transition: 0.4s ease-in-out;
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <Style>
      <div className="container">
        <div className="row">
          <div className="column1">
            <a href="/">
              <img src={logo} width="60" height="50" alt="Vivek" />
            </a>
          </div>
          <div className="column2">
            <ul className="unordered">
              <li>
                <a href="/about">ABOUT ME</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Nav;
