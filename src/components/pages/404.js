import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import error from "../../assets/images/not-found.svg";

const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 0.5rem;
  height: 100%;
  width: 100%;
  font-family: "Montserrat Alternates";

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    padding-bottom: 3rem;
    color: #fff;
    height: 100%;
    text-transform: uppercase;
    text-shadow: 0 0 0.15em #000;
    white-space: nowrap;
    font-family: "Montserrat Alternates";
    filter: blur(0.007em);
    animation: shake 2.5s linear forwards;
  }

  h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
  }

  h1::before,
  h1::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
  }

  h1::before {
    animation: crack1 2.5s linear forwards;
    -webkit-clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
  }

  h1::after {
    animation: crack2 2.5s linear forwards;
    -webkit-clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
  }

  @keyframes shake {
    5%,
    15%,
    25%,
    35%,
    55%,
    65%,
    75%,
    95% {
      filter: blur(0.018em);
      transform: translateY(0.018em) rotate(0deg);
    }

    10%,
    30%,
    40%,
    50%,
    70%,
    80%,
    90% {
      filter: blur(0.01em);
      transform: translateY(-0.018em) rotate(0deg);
    }

    20%,
    60% {
      filter: blur(0.03em);
      transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%,
    85% {
      filter: blur(0.03em);
      transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
      filter: blur(0.007em);
      transform: translate(0) rotate(-0.5deg);
    }
  }

  @keyframes crack1 {
    0%,
    95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-51%, -48%);
    }
  }

  @keyframes crack2 {
    0%,
    95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-49%, -53%);
    }
  }

  p {
    white-space: nowrap;
  }

  img {
    margin-top: 2rem;
    width: 30%;
    height: 30%;
  }

  button {
    margin: 3rem 0;
    border-radius: 24px;
    border: 4px solid #089;
  }

  .btn {
    text-decoration: none;
    font-size: 1rem;
    color: #089;
    font-weight: bold;
  }

  .icon {
    color: #089;
  }

  button:hover {
    transition: 0.5s ease-in-out;
    background: #089;
    .btn,
    .icon {
      color: #fff;
    }
  }
`;

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/notfound");
}

function NoMatch() {
  initializeReactGA();

  return (
    <MainWrapper>
      <h1 data-text="Page Not Found!">
        <span>Page Not Found!</span>
      </h1>
      <p>The page you're trying to reach does not exists.</p>
      <img src={error} alt="Error 404" />
      <button>
        <FaHome className="icon" />
        <Link to="/" className="btn">
          Go Home
        </Link>
      </button>
    </MainWrapper>
  );
}

export default NoMatch;
