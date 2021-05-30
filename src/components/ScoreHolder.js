import styled from "styled-components";

const ScoreHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-itmes: baseline;
  background: ${(props) => props.appStyles.backgroundColor};
  font-family: MarvelRegular;
`;

export default ScoreHolder;
