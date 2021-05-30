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
  // backgroundColor: "#F1FAEE",
  backgroundColor: "#A8DADC",
};

function App() {
  return (
    <StyledApp>
      <Header appStyles={appStyles} />
      <Main appStyles={appStyles} />
      <Footer />
    </StyledApp>
  );
}

export default App;

// https://www.fontspace.com/end-gamer-font-f38337
