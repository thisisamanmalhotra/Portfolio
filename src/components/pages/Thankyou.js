import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

import Button2 from "../Button2";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  height: 80vh;
  text-align: center;
  line-height: 3rem;
  align-items: center;
  font-size: 1.3rem;
  justify-content: center;
`;

function Thankyou() {
  return (
    <MainWrapper>
      <p>Thankyou.</p>
      <p>I'll contact you shortly!🤟</p>
      <Button2 link="/" icon={<FaHome className="icon" />} text="Go Home" />
    </MainWrapper>
  );
}

export default Thankyou;
