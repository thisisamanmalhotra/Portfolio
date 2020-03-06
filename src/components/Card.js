import React from "react";
import styled from "styled-components";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
  width: 100%;

  .card {
    display: flex;
    justify-content: center;
    margin: 1rem;
    align-items: center;
    height: 20rem;
    flex: 1;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .heading {
    flex: 1;
    width: 100%;
  }

  .description {
    flex: 2;
    width: 100%;
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
      <div className="heading">Projects</div>
      <div className="description">Collection of all my projects.</div>
    </div>
    <div className="card">
      <div className="heading">Blog</div>
      <div className="description">Collection of all my projects.</div>
    </div>
    <div className="card">
      <div className="heading">Courses</div>
      <div className="description">Collection of all my projects.</div>
    </div>
  </MainWrapper>
);

export default Card;
