import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/header";
import chartPage from "./Pages/chartPage";
import homePage from "./Pages/homePage";
import styled from "styled-components";

const CryptoContainer = styled.div`
  display:"flex";
  flex-direction:column;
  margin:auto;
  align-content:center;
  min-height:100vh;
  width:80vw;
`

function App() {
  return (
    <CryptoContainer>
      <Router>
        <Header />
        <Switch>
          <Route path="/criptocurrencies/:id" component={chartPage} />
          <Route to="/" component={homePage} />
        </Switch>
      </Router>
    </CryptoContainer>
  );
}

export default App;
