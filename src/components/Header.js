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

const ScoreHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: baseline;
  background: ${(props) => props.appStyles.backgroundColor};
`;

function Header(props) {
  return (
    <div>
      <StyledImg src={headerBackground} />
      <ScoreHolder appStyles={props.appStyles}>
        <h3>Current Score: 5</h3>
        <h3>High Score: 10</h3>
      </ScoreHolder>
    </div>
  );
}

export default Header;
