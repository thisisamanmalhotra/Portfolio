import React from "react";
import styled from "styled-components";

const MainWrapper = styled.section`
  background: #000;
`;

const Card = () => (
  <MainWrapper>
    <div className="card">
      <div className="heading">Projects</div>
      <div className="description">Collection of all my projects.</div>
    </div>
  </MainWrapper>
);

export default Card;
