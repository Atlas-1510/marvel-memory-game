import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
`;

const appStyles = {
  backgroundColor: "#d3d3d3",
};

function App() {
  return (
    <StyledApp>
      <Header appStyles={appStyles} />
      <Main appStyles={appStyles} />
      <Footer appStyles={appStyles} />
    </StyledApp>
  );
}

export default App;
