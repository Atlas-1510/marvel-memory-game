import React from "react";
import styled from "styled-components";

import antMan from "../img/moviePosters/antMan.jpg";
import antManAndTheWasp from "../img/moviePosters/antManAndTheWasp.jpg";
import antManQuantumania from "../img/moviePosters/antManQuantumania.jpg";
import avengersAgeOfUltron from "../img/moviePosters/avengersAgeOfUltron.jpg";
import avengersEndgame from "../img/moviePosters/avengersEndgame.jpg";
import avengersInfinityWar from "../img/moviePosters/avengersInfinityWar.jpg";
import blackPanther from "../img/moviePosters/blackPanther.jpg";
import blackPanther2 from "../img/moviePosters/blackPanther2.jpg";
import blackWidow from "../img/moviePosters/blackWidow.jpg";
import blade from "../img/moviePosters/blade.jpg";
import captainAmericaWinterSoldier from "../img/moviePosters/captainAmericaWinterSoldier.jpg";
import captainAmerica from "../img/moviePosters/captainAmerica.jpg";
import captainAmericaCivilWar from "../img/moviePosters/captainAmericaCivilWar.jpg";
import captainMarvel from "../img/moviePosters/captainMarvel.jpg";
import doctorStrange from "../img/moviePosters/doctorStrange.jpg";
import doctorStrange2 from "../img/moviePosters/doctorStrange2.jpg";
import eternals from "../img/moviePosters/eternals.jpg";
import falconAndWinterSoldier from "../img/moviePosters/falconAndWinterSoldier.jpg";
import fantasticFour from "../img/moviePosters/fantasticFour.jpg";
import guardiansOfTheGalaxy from "../img/moviePosters/guardiansOfTheGalaxy.jpg";
import guardiansOfTheGalaxy2 from "../img/moviePosters/guardiansOfTheGalaxy2.jpg";
import incredibleHulk from "../img/moviePosters/incredibleHulk.jpg";
import ironMan from "../img/moviePosters/ironMan.jpg";
import ironMan2 from "../img/moviePosters/ironMan2.jpg";
import ironMan3 from "../img/moviePosters/ironMan3.jpg";
import loki from "../img/moviePosters/loki.jpg";
import marvels from "../img/moviePosters/marvels.jpg";
import shangChi from "../img/moviePosters/shangChi.jpg";
import spiderManFarFromHome from "../img/moviePosters/spiderManFarFromHome.jpg";
import spiderManHomeComing from "../img/moviePosters/spiderManHomeComing.jpg";
import spiderManNoWayHome from "../img/moviePosters/spiderManNoWayHome.jpg";
import thor from "../img/moviePosters/thor.jpg";
import thorLoveAndThunder from "../img/moviePosters/thorLoveAndThunder.jpg";
import thorRagnarok from "../img/moviePosters/thorRagnarok.jpg";
import thorTheDarkWorld from "../img/moviePosters/thorTheDarkWorld.jpg";
import wandavision from "../img/moviePosters/wandavision.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  margin: 1rem;
  position: relative;
  top: 0;
  transition: top ease 0.3s;

  :hover {
    top: -1rem;
  }
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  src: ${(props) => props.src};
`;

const Title = styled.h2`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.4;
  font-size: 0.8rem;
  text-align: center;
  font-family: Roboto;
`;

// Add tile object array here
const tileArray = [
  {
    img: antMan,
    title: "Ant Man",
  },
  {
    img: antManAndTheWasp,
    title: "Ant Man and the Wasp",
  },
  {
    img: antManQuantumania,
    title: "Ant Man and the Wasp: Quantumania",
  },
  {
    img: avengersAgeOfUltron,
    title: "Avengers: Age Of Ultron",
  },
  {
    img: avengersEndgame,
    title: "Avengers: Endgame",
  },
  {
    img: avengersInfinityWar,
    title: "Avengers: Infinity War",
  },
  {
    img: blackPanther,
    title: "Black Panther",
  },
  {
    img: blackPanther2,
    title: "Black Panther: Wakanda Forever",
  },
  {
    img: blackWidow,
    title: "Black Widow",
  },
  {
    img: blade,
    title: "Blade",
  },
  {
    img: captainAmericaWinterSoldier,
    title: "Captain America: The Winter Soldier",
  },
  {
    img: captainAmerica,
    title: "Captain America",
  },
  {
    img: captainAmericaCivilWar,
    title: "Captain America: Civil War",
  },
  {
    img: captainMarvel,
    title: "Captain Marvel",
  },
  {
    img: doctorStrange,
    title: "Doctor Strange",
  },
  {
    img: doctorStrange2,
    title: "Doctor Strange: The Multiverse of Madness",
  },
  {
    img: eternals,
    title: "The Eternals",
  },
  {
    img: falconAndWinterSoldier,
    title: "The Falcon and the Winter Soldier",
  },
  {
    img: fantasticFour,
    title: "Fantastic Four",
  },
  {
    img: guardiansOfTheGalaxy,
    title: "The Guardians of the Galaxy",
  },
  {
    img: guardiansOfTheGalaxy2,
    title: "The Guardians of the Galaxy 2",
  },
  {
    img: incredibleHulk,
    title: "The Incredible Hulk",
  },
  {
    img: ironMan,
    title: "Iron Man",
  },
  {
    img: ironMan2,
    title: "Iron Man 2",
  },
  {
    img: ironMan3,
    title: "Iron Man 3",
  },
  {
    img: loki,
    title: "Loki",
  },
  {
    img: marvels,
    title: "The Marvels",
  },
  {
    img: shangChi,
    title: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    img: spiderManFarFromHome,
    title: "Spider-Man: Far From Home",
  },
  {
    img: spiderManHomeComing,
    title: "Spider-Man: Homecoming",
  },
  {
    img: spiderManNoWayHome,
    title: "Spider-Man: No Way Home",
  },
  {
    img: thor,
    title: "Thor",
  },
  {
    img: thorLoveAndThunder,
    title: "Thor: Love and Thunder",
  },
  {
    img: thorRagnarok,
    title: "Thor: Ragnarok",
  },
  {
    img: thorTheDarkWorld,
    title: "Thor: The Dark World",
  },
  {
    img: wandavision,
    title: "WandaVision",
  },
];

function Tile(props) {
  const title = tileArray[props.index].title;
  const img = tileArray[props.index].img;
  return (
    <Container onClick={() => props.handleClick(title)}>
      <Img src={img} />
      <Title>{title}</Title>
    </Container>
  );
}

export default Tile;
