import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScoreHolder from "./ScoreHolder";
import Tile from "./Tile";

const StyledMain = styled.main`
  background: pink;
  height: 100%;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

function Main(props) {
  const [level, setLevel] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [currentScore, setCurrentScore] = useState(1);
  const [highScore, setHighScore] = useState(1);
  const [clickedArray, setClickedArray] = useState([]);

  const loadLevel = () => {
    const tileQuantity = 4 * level;
    const tileIndexes = [];
    // Get (tileQuantity) number of random tile objects
    for (let i = 0; i < tileQuantity; i++) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 36);
      } while (tileIndexes.includes(randomNumber));

      tileIndexes.push(randomNumber);
    }
    setTiles(tileIndexes);
  };

  useEffect(() => {
    loadLevel();
  }, []);

  return (
    <>
      <ScoreHolder appStyles={props.appStyles}>
        <h3>Current Score: 5</h3>
        <h3>High Score: 10</h3>
      </ScoreHolder>
      <StyledMain appStyles={props.appStyles}>
        {tiles.map((index) => {
          return <Tile index={index} key={index} />;
        })}
      </StyledMain>
    </>
  );
}

export default Main;
