import React from "react";
import styled from "styled-components";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
  width: 90%;

  font-family: "Montserrat Alternates";

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
    font-family: "IBM Plex Mono", monospace;
    flex: 2;
    font-size: 1.2rem;
    width: 80%;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #089;
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
`;

const Card = () => (
  <MainWrapper>
    <div className="card">
      <div className="heading">
        <a href="/projects">PROJECTS</a>
      </div>
      <hr />
      <div className="description">
        Collection of all my projects done so far open source and professional.
      </div>
    </div>
    <div className="card">
      <div className="heading">
        <a href="/blog">BLOGS</a>
      </div>
      <hr />
      <div className="description">
        Tips and tricks to make lives of developers easy.
      </div>
    </div>
    <div className="card">
      <div className="heading">
        <a href="/courses">COURSES</a>
      </div>
      <hr />
      <div className="description">
        Best courses by amazing developers which you can follow.
      </div>
    </div>
  </MainWrapper>
);

export default Card;
