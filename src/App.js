//import ChromaticaIcon from "images/chromaticaicon.png"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import StyledNavbar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <StyledNavbar />
        <Switch>
          <Route exact path='/' component={HomePage}>
            <HomePage />
          </Route>
          <Route exact path='/music' component={HomePage}>
            <p>LISTEN</p>
          </Route>
          <Route exact path='/tour' component={HomePage}>
            <p> TOUR</p>
          </Route>
          <Route exact path='/vegas' component={HomePage}>
            <p>VEGAS</p>
          </Route>
          <Route exact path='/signup' component={HomePage}>
            <p>SIGN UP</p>
          </Route>
          <Route exact path='/hauslabs' component={HomePage}>
            <p> HAUS LABORATORIES</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
