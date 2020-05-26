import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import Button from "../Button";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;

  .title {
    transform: skew(-3deg, -3deg);
    box-shadow: 3px 3px 3px #888888;
    background: #089;
    padding: 0.4rem;
    animation: title 1s ease;

    h2 {
      font-weight: bold;
      color: #fff !important;
      letter-spacing: 0.1rem;
    }
  }

  .blog {
    margin-bottom: 5rem;
  }

  @keyframes title {
    0% {
      transform: translate(20px, 20px);
    }
  }

  .blog-title {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 2rem;
    animation: blog-title 1s ease;
  }

  @keyframes blog-title {
    0% {
      transform: translateX(-30px);
    }
  }

  .blog-desc {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    line-height: 2.5rem;
    padding-bottom: 2rem;
    animation: blog-desc 1s ease;
  }

  @keyframes blog-desc {
    0% {
      transform: translateX(30px);
    }
  }
`;

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/blog");
}

function Blog() {
  initializeReactGA();

  return (
    <MainWrapper>
      <Helmet>
        <title>Vivek Mittal | Blogs</title>
        <meta
          name="description"
          content="This page contains all the blogs written by Vivek Mittal"
        />
      </Helmet>

      <div className="title">
        <h2>Blogs</h2>
      </div>
      <hr />
      <hr />

      <div className="blog">
        <p className="blog-title">1. AJAX 4 Way Requests</p>
        <p className="blog-desc">
          Whenever it comes to choosing which AJAX method to use for sending the
          requests, developers gets pretty confused. There was not much content
          about which method to use, so I wrote up this blog.
        </p>
        <Button
          link="https://medium.com/@vivekmittal199/ajax-4-way-requests-a9dd5531093e"
          text="Link"
        />
      </div>

      <div className="blog">
        <p className="blog-title">
          2. Create POKEMON DECK using HTML5, CSS3, Vanilla JavaScript
        </p>
        <p className="blog-desc">
          A simple yet interesting small project. I took a little detour and
          wanted to refresh my mind as well as help others, so wrote this up.
        </p>
        <Button
          link="https://medium.com/@vivekmittal199/create-a-pokedex-using-html5-css3-and-vanilla-javascript-d367681cc63d?source=friends_link&sk=7175403a83dc94d856728d8aebaf0e92"
          text="Link"
        />
      </div>
    </MainWrapper>
  );
}

export default Blog;
