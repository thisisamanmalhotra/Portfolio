import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
  width: 90%;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1rem;

  .card {
    display: flex;
    justify-content: center;
    margin: 1rem;
    align-items: center;
    height: 19rem;
    flex: 1;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .card:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 2px dotted brown;
  }

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 80%;
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    flex: 2;
    font-size: 1.2rem;
    width: 80%;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #089;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  a:hover {
    color: #000;
    opacity: 0.7;
    transition: 0.2s ease-in-out;
  }

  hr {
    border: 1.2px solid #000;
    opacity: 0.6;
    width: 80%;
  }

  @media (max-width: 991px) {
    padding: 1rem;
    .card {
      flex: 50%;
    }
  }

  .crd1 {
    animation: crdEffect1 1.5s ease;
  }

  .crd2 {
    animation: crdEffect2 1.5s ease;
  }

  @keyframes crdEffect1 {
    0% {
      transform: translate(-30px, -30px);
    }
  }

  @keyframes crdEffect2 {
    0% {
      transform: translate(30px, 30px);
    }
  }
`;

const data = [
  {
    id: "1",
    heading: "PROJECTS",
    link: "/projects",
    desc:
      "Collection of all my projects done so far open source and professional.",
  },
  {
    id: "2",
    heading: "BLOGS",
    link: "/blog",
    desc: "Tips and tricks to make lives of developers easy.",
  },
];

const Card = () => (
  <MainWrapper>
    {data.map((element) => {
      return (
        <div className="card">
          <div className="heading" key={element.id}>
            <Link to={element.link}>{element.heading}</Link>
          </div>
          <hr />
          <div className="description">{element.desc}</div>
        </div>
      );
    })}
  </MainWrapper>
);

export default Card;
