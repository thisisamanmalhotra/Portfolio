import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  .icon {
    margin-right: 0.5rem;
  }
  .btn {
    border: 0;
    border-radius: 20px;
    background: #089;
  }

  .btn:hover {
    animation: jump 0.8s ease-in-out;
  }

  @keyframes jump {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }

  .btn a {
    color: #fff;
    font-size: 0.8rem;
    text-decoration: none;
    font-weight: bold;
  }
`;

function Button2({ link, icon, text }) {
  return (
    <MainWrapper>
      <button className="btn">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon}
          {text}
        </a>
      </button>
    </MainWrapper>
  );
}

export default Button2;
