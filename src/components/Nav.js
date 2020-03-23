import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

import logo from "./../assets/images/logo.png";

const Style = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.theme.mode === "dark" ? "#222" : "#EEE")};
  -webkit-box-shadow: ${props =>
    props.theme.mode === "dark"
      ? "0 8px 6px -6px #111"
      : "0 8px 6px -6px #999"};
  -moz-box-shadow: ${props =>
    props.theme.mode === "dark"
      ? "0 8px 6px -6px #111"
      : "0 8px 6px -6px #999"};
  box-shadow: ${props =>
    props.theme.mode === "dark"
      ? "0 8px 6px -6px #111"
      : "0 8px 6px -6px #999"};

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
    color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#222")};
  }

  a:hover {
    color: #089;
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props =>
      props.theme.mode === "dark" ? "#222" : "#EEE"};
    color: ${props => (props.theme.mode === "dark" ? "#cecece" : "#222")};
  }

  .card {
    background-color: ${props =>
      props.theme.mode === "dark" ? "#222" : "#EEE"};
  }

  .lmao {
    color: ${props => (props.theme.mode === "dark" ? "#cecece" : "#222")};
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
                <li>
                  <button
                    onClick={e =>
                      setTheme(
                        theme.mode === "dark"
                          ? { mode: "light" }
                          : { mode: "dark" }
                      )
                    }
                  >
                    Toggle
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
