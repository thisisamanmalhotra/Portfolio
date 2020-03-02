import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/homepage");
}

function App() {
  initializeReactGA();

  return (
    <Fragment>
      <Nav />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>
      <Footer />
    </Fragment>
  );
}

export default App;
