import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-itmes: flex-start;
  background: lightgreen;
  width: 150px;
  margin: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const Img = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.4;
`;

function Tile(props) {
  return (
    <Container>
      <Img src={props.img} />
      <Title>Captain America</Title>
    </Container>
  );
}

export default Tile;
