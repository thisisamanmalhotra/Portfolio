import React from "react";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/notfound");
}

function NoMatch() {
  initializeReactGA();

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Oops! Page Not Found</h1>
    </div>
  );
}

export default NoMatch;
