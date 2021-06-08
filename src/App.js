
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Components/header';
import chartPage from './Pages/chartPage';
import homePage from './Pages/homePage';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/currencies" component={ chartPage }/>
        <Route to="/" component={ homePage } />
      </Switch>
    </Router>
  );
}

export default App;
