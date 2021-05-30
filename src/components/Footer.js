import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 3rem;
  width: 100%;
  background: black;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`;

function Footer(props) {
  return (
    <StyledFooter>
      <a href="https://github.com/Atlas-1510/marvel-memory-game">
        <IconContext.Provider
          value={{
            color: `${props.appStyles.backgroundColor}`,
            size: "3rem",
            style: { paddingRight: "0.5rem" },
          }}
        >
          <AiFillGithub />
        </IconContext.Provider>
      </a>
    </StyledFooter>
  );
}

export default Footer;
