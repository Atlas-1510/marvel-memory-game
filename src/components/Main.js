import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScoreHolder from "./ScoreHolder";
import Tile from "./Tile";

const StyledMain = styled.main`
  background: ${(props) => props.appStyles.backgroundColor};
  height: 100%;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

const StyledTitle = styled.h3`
  padding: 1rem;
  font-size: 2rem;
`;

function Main(props) {
  const [level, setLevel] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [currentScore, setCurrentScore] = useState(1);
  const [highScore, setHighScore] = useState(1);
  const [clickedArray, setClickedArray] = useState([]);

  // Load next level
  useEffect(() => {
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
  }, [level]);

  // Update high score if necessary
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);

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
      console.log("GAME OVER");
    } else {
      clickedArray.push(title);
      setCurrentScore(currentScore + 1);
      // Check if all the tiles have been clicked (level is complete)
      if (clickedArray.length === tiles.length) {
        setClickedArray([]);
        setLevel(level + 1);
      } else {
        // Refresh tiles by randomising order of tileIndexes in array
        _reorderTiles();
      }
    }
  };

  return (
    <>
      <ScoreHolder appStyles={props.appStyles}>
        <StyledTitle>CURRENT SCORE: {currentScore}</StyledTitle>
        <StyledTitle>HIGH SCORE: {highScore}</StyledTitle>
        <StyledTitle>LEVEL: {level}</StyledTitle>
      </ScoreHolder>
      <StyledMain appStyles={props.appStyles}>
        {tiles.map((index) => {
          return (
            <Tile index={index} key={index} handleClick={handleTileClick} />
          );
        })}
      </StyledMain>
    </>
  );
}

export default Main;
