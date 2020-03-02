import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "./../assets/images/logo.png";
import Layout from "./Layout";

const Styles = styled.div`
  .navbar {
    background-color: #fff;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
  }

  .a:hover {
    color: #fff;
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand="sm" fixed="top">
      <Layout>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="60"
            height="50"
            className="d-inline-block align-top"
            alt="VM"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/about" className="a">
                ABOUT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" className="a">
                CONTACT
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Layout>
    </Navbar>
  </Styles>
);

export default NavigationBar;
