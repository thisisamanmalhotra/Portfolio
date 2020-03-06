import React from "react";
import styled from "styled-components";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
  width: 90%;

  .card {
    display: flex;
    justify-content: center;
    margin: 1rem;
    align-items: center;
    height: 15rem;
    flex: 1;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    flex: 2;
    width: 80%;
  }

  hr {
    border: 1.5px solid #000;
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
        <a href="/blog">BLOG</a>
      </div>
      <hr />
      <div className="description">Collection of all my projects.</div>
    </div>
    <div className="card">
      <div className="heading">
        <a href="/courses">COURSES</a>
      </div>
      <hr />
      <div className="description">Collection of all my projects.</div>
    </div>
  </MainWrapper>
);

export default Card;
