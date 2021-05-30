import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
`;

const H1 = styled.h1`
  font-family: Roboto;
`;

function GameOver(props) {
  return (
    <Div>
      <H1>Game over!</H1>
      <Button
        onClick={() => {
          props.handlePlayAgainClick();
        }}
      >
        Play Again?
      </Button>
    </Div>
  );
}

export default GameOver;
