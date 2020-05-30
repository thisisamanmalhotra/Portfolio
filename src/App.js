import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import ScrollToTop from "react-scroll-up";
import Particles from "react-particles-js";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/404";
// import Thankyou from "./components/pages/Thankyou";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Project from "./components/pages/Project";
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
      <Particles
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: "-999",
        }}
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
              },
            },
            size: {
              value: 20,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.5,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out",
            },
            color: {
              value: "#089eca",
            },
          },
        }}
      />
      <ScrollToTop
        showUnder={150}
        duration={1000}
        style={{
          width: "2.2rem",
          height: "2.2rem",
          border: "0",
          borderRadius: "50%",
          background: "#089",
          zIndex: "9999999999",
          textAlign: "center",
          boxShadow: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.3)",
        }}
      >
        <span
          style={{
            fontSize: "1.5rem",
          }}
        >
          ↑
        </span>
      </ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/blog" component={Blog} />
          {/* <Route exact path="/thankyou" component={Thankyou} /> */}
          <Route component={Error} />
        </Switch>
      </Layout>
      <Footer />
    </Fragment>
  );
}

export default App;
