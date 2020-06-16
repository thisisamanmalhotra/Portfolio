import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
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

function Button({ link, text }) {
  return (
    <MainWrapper>
      <button className="btn">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="btn-label">{text}</span>
        </a>
      </button>
    </MainWrapper>
  );
}

export default Button;
