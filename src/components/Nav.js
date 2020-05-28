import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import storage from "local-storage-fallback";
import { NavLink } from "react-router-dom";

import logo1 from "./../assets/images/logo1.svg";
import { ReactComponent as SunIcon } from "./../assets/images/sun.svg";
import { ReactComponent as MoonIcon } from "./../assets/images/moon.svg";
import GlobalStyle from "../components/global";

const Style = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#202224" : "#EEE"};

  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 8px 6px -6px #111"
      : "0 8px 6px -6px #999"};

  transition: 0.2s ease-in-out;

  font-family: "Montserrat", sans-serif;
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

  .unordered li {
    letter-spacing: 0.1rem;
  }

  .column1 {
    width: 70%;
  }

  .main-nav-link {
    color: #089;
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
      width: 20%;
    }

    .column2 {
      width: 80%;
    }

    img {
      margin-left: 0.8rem;
      width: 80px;
    }
  }

  a {
    color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#202224")};
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
      props.theme.mode === "dark" ? "#202224" : "#fff"};
    display: flex;
    justify-content: space-around;
    align-items: center;
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

  li {
    animation: animate 1.5s ease;
  }

  li:nth-child(1) {
    animation-delay: 0s;
  }

  li:nth-child(2) {
    animation-delay: 0.1s;
  }

  li:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes animate {
    0% {
      transform: translateY(-150px);
    }

    40% {
      transform: translateY(0);
    }

    60% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "dark" };
};

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
              <NavLink exact to="/">
                <img src={logo1} width="150" height="50" alt="Vivek" />
              </NavLink>
            </div>
            <div className="column2">
              <ul className="unordered">
                <li>
                  <NavLink exact to="/about" activeClassName="main-nav-link">
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/contact" activeClassName="main-nav-link">
                    CONTACT
                  </NavLink>
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
