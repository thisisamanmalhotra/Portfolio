import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";

const MainWrapper = styled.section`
  padding-top: 7rem;
`;

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/notfound");
}

function NoMatch() {
  initializeReactGA();

  return (
    <MainWrapper>
      <h1>Page not found!</h1>
    </MainWrapper>
  );
}

export default NoMatch;
