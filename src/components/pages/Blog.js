import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

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

  @keyframes title {
    0% {
      transform: translate(20px, 20px);
    }
  }

  .blog-title {
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
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
    font-family: 'Montserrat', sans-serif;
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

  .btn {
    background: transparent;
    text-align: center;
    font-size: 1.4em;
    line-height: 1.2em;
    border: 5px solid #089;
    overflow: hidden;
    transition: all 0.5s;
    border-radius: 4px;
  }

  .btn:hover, .btn:active {
    text-decoration: none;
    color:#fff;
    border-color:#089;
    background:#089;
  }

  .btn-label {
    display:inline-block;
    position:relative;
    padding-right:0;
    transition:padding-right 0.5s;
    color:#089;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  .btn-label:after {
    content: "";
    position:absolute;
    right:-50px;
    opacity:0;
    top:22%;
    width:10px;
    height:10px;
    margin-right:-10px;
    background:rgba(0,0,0,0);
    border:3px solid #fff;
    border-top:none;
    border-right:none;
    transition: opacity 0.5s, top 0.5s, right 0.5s;
    transform:rotate(225deg);
  }

  .btn:hover .btn-label,
  .btn:active .btn-label {
    padding-right:30px;
    color:#f5f1e7;
  }

  .btn:hover .btn-label:after,
  .btn:active .btn-label:after {
    transition:opacity: 0.5s, top 0.5s, right 0.5s;
    opacity:1;
    right:10px;
    top:22%;
  }
`;

const Blog = () => (
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
    <p className="blog-title">1. AJAX 4 Way Requests</p>
    <p className="blog-desc">
      Whenever it comes to choosing which AJAX method to use for sending the
      requests, developers gets pretty confused. There was not much content
      about which method to use, so I wrote up this blog.
    </p>
    <button className="btn">
      <a
        href="https://medium.com/@vivekmittal199/ajax-4-way-requests-a9dd5531093e"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="btn-label">Link to Blog</span>
      </a>
    </button>
  </MainWrapper>
);

export default Blog;
