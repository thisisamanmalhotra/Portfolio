import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { FaPaperPlane } from "react-icons/fa";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.05rem;

  .title {
    transform: skew(-3deg, -3deg);
    box-shadow: 3px 3px 3px #888888;
    background: #089;
    padding: 0.4rem;
    animation: title 1s ease;

    h2 {
      font-weight: bold;
      color: #fff !important;
    }
  }

  @keyframes title {
    0% {
      transform: translate(20px, 20px);
    }
  }

  span {
    font-style: italic;
    font-weight: bold;
  }

  .contactform {
    width: 60%;
    padding: 1rem;
    animation: para 1s ease;
  }

  @keyframes para {
    0% {
      transform: translateX(-20px);
    }
  }

  .contactdirect {
    width: 60%;
    padding: 1rem;
    animation: para1 1s ease;
  }

  @keyframes para1 {
    0% {
      transform: translateX(20px);
    }
  }

  .contactdirect {
    text-align: center;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  form p {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  input,
  textarea {
    border-radius: 5px;
    color: #000;
    outline: none;
    background: #eee;
    border: 1.5px solid #089;
  }

  label {
    font-size: 1.3rem;
  }

  button {
    font-weight: bold;
    border: 0;
    padding: 0.5rem;
    background: #089eca;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
    font-weight: bold;

    :hover {
      color: #089;
    }
  }

  @media (max-width: 1000px) {
    .contactform,
    .contactdirect {
      width: 90%;
    }
  }
`;

function initializeReactGA() {
  ReactGA.initialize("UA-159444607-1");
  ReactGA.pageview("/contact");
}

function Contact() {
  initializeReactGA();

  return (
    <MainWrapper>
      <Helmet>
        <title>Vivek Mittal | Contact</title>
        <meta
          name="description"
          content="This page contains the contact details of Vivek Mittal"
        />
      </Helmet>

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <br />
      <br />
      <br />

      <div className="contactform">
        <h1>Get in touch!</h1>
        <form
          name="contact"
          method="post"
          // action="/thankyou"
          // onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name:</label>
            <input type="text" name="name" />
          </p>
          <p>
            <label>Email:</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label>Message:</label>
            <textarea name="message"></textarea>
          </p>
          <br />
          <br />
          <p>
            <button type="submit">
              SEND <FaPaperPlane />
            </button>
          </p>
        </form>
      </div>

      <br />
      <br />

      <div className="contactdirect">
        <p>Already filled too many forms lately? 😴</p>
        <p>
          Feel <span>free</span> to <span>reach me</span> at:
        </p>
        <br />
        <a href="mailto: vivekmittal199@gmail.com" className="lmao">
          vivekmittal199@gmail.com
        </a>
      </div>
    </MainWrapper>
  );
}

export default Contact;
