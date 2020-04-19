import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
import { Link } from "react-router-dom";

import logo from "./../assets/images/logo.png";
import { ReactComponent as SunIcon } from "./../assets/images/sun.svg";
import { ReactComponent as MoonIcon } from "./../assets/images/moon.svg";

const Style = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#222" : "#EEE"};
  transition: 0.2s ease-in-out;
  -webkit-box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 8px 6px -6px #111"
      : "0 8px 6px -6px #999"};
  transition: 0.2s ease-in-out;

  -moz-box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 8px 6px -6px #111"
      : "0 8px 6px -6px #999"};
  transition: 0.2s ease-in-out;

  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 8px 6px -6px #111"
      : "0 8px 6px -6px #999"};
  transition: 0.2s ease-in-out;

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
    width: 70%;
  }

  .column2 {
    width: 30%;
  }

  @media (max-width: 1000px) {
    .column1 {
      width: 50%;
    }

    .column2 {
      width: 50%;
    }
  }

  @media (max-width: 700px) {
    .column1 {
      width: 25%;
    }

    .column2 {
      width: 75%;
    }
  }

  a {
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#222")};
    transition: 0.2s ease-in-out;
  }

  a:hover {
    color: #089;
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }

  button {
    border-radius: 25px;
    border: 1.5px solid black;
    font-weight: bold;
    height: 3.5vh;
    outline: none;
    transition: 0.2s ease-in-out;
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#222" : "#fff"};
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    position: relative;

    svg {
      height: auto;
      width: 1rem;
      transition: all 0.3s linear;

      &:first-child {
        transform: ${(props) =>
          props.theme.mode === "dark" ? "translateY(-100px)" : "translateY(0)"};
      }

      &:nth-child(2) {
        transform: ${(props) =>
          props.theme.mode === "dark" ? "translateY(0)" : "translateY(100px)"};
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#222" : "#EEE"};
    color: ${(props) => (props.theme.mode === "dark" ? "#cecece" : "#222")};
    transition: 0.2s ease-in-out;
  }

  .card {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#222" : "#EEE"};
      transition: 0.2s ease-in-out;
  }

  .lmao {
    color: ${(props) => (props.theme.mode === "dark" ? "#cecece" : "#222")};
    transition: 0.2s ease-in-out;
  }
`;

function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

const Nav = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Style>
        <GlobalStyle />
        <div className="container">
          <div className="row">
            <div className="column1">
              <Link to="/">
                <img src={logo} width="60" height="50" alt="Vivek" />
              </Link>
            </div>
            <div className="column2">
              <ul className="unordered">
                <li>
                  <Link to="/about">ABOUT ME</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <button
                    onClick={(e) =>
                      setTheme(
                        theme.mode === "dark"
                          ? { mode: "light" }
                          : { mode: "dark" }
                      )
                    }
                  >
                    <SunIcon />
                    <MoonIcon />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Style>
    </ThemeProvider>
  );
};

export default Nav;
