import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import CaptainAmerica from "../img/moviePosters/captainamericathewintersoldier_lob_crd_01_1.jpg";
import BlackWidow from "../img/moviePosters/blackwidow_lob_crd_05.jpg";
import BlackPanther from "../img/moviePosters/blackpanther_lob_crd_01_4.jpg";
import AntMan from "../img/moviePosters/ant-man.jpg";

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
  return (
    <StyledMain appStyles={props.appStyles}>
      <Tile img={CaptainAmerica} />
      <Tile img={BlackWidow} />
      <Tile img={BlackPanther} />
      <Tile img={AntMan} />
    </StyledMain>
  );
}

export default Main;
