import React from "react";
import styled from "styled-components";
import headerBackground from "../img/headerImage.png";

const StyledImg = styled.img`
  width: 100%;
  display: block;

  @media only screen and (max-width: 1300px) {
    min-height: 10vw;
    object-fit: cover;
  }
`;

function Header(props) {
  return <StyledImg src={headerBackground} />;
}

export default Header;
