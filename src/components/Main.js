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
    const tileIndexes = [];
    const tileQuantity = 4 * level;
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

  const handleTileClick = (title) => {
    const _reorderTiles = () => {
      const newTileOrder = [...tiles];
      for (let i = 0; i < tiles.length; i++) {
        let randomIndex = Math.floor(Math.random() * i);
        [newTileOrder[i], newTileOrder[randomIndex]] = [
          newTileOrder[randomIndex],
          newTileOrder[i],
        ];
      }
      setTiles(newTileOrder);
    };
    // Check if the tile has already been clicked
    if (clickedArray.includes(title)) {
      // Run game over function
    } else {
      clickedArray.push(title);
      setCurrentScore(currentScore + 1);
      // Check if current score is greater than high score
      // If so, also increase high score by one
      // ***********
      // Refresh tiles by randomising order of tileIndexes in array
      _reorderTiles();
    }
  };

  return (
    <>
      <ScoreHolder appStyles={props.appStyles}>
        <h3>Current Score: {currentScore}</h3>
        <h3>High Score: 10</h3>
        <h3>Level: 4</h3>
      </ScoreHolder>
      <StyledMain appStyles={props.appStyles}>
        {tiles.map((index) => {
          return <Tile index={index} key={index} onClick={handleTileClick} />;
        })}
      </StyledMain>
    </>
  );
}

export default Main;
