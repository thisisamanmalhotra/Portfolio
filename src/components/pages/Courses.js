import React from "react";
import styled from "styled-components";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Roboto", sans-serif;

  h2 {
    color: #089;
    font-weight: bold;
  }
`;

const Courses = () => (
  <MainWrapper>
    <h2>COURSES</h2>
  </MainWrapper>
);

export default Courses;
