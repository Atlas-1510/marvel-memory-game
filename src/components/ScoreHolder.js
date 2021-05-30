import styled from "styled-components";

const ScoreHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: baseline;
  background: ${(props) => props.appStyles.backgroundColor};
`;

export default ScoreHolder;
