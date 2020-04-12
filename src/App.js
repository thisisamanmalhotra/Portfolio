import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/404";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Project from "./components/pages/Project";
import Courses from "./components/pages/Courses";
import Blog from "./components/pages/Blog";

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
          <Route path="/projects" component={Project} />
          <Route path="/blog" component={Blog} />
          <Route path="/courses" component={Courses} />
          <Route component={Error} />
        </Switch>
      </Layout>
      <Footer />
    </Fragment>
  );
}

export default App;
