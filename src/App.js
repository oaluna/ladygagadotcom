//import ChromaticaIcon from "images/chromaticaicon.png"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MusicPage from "./pages/MusicPage/MusicPage";
import StyledNavbar from "./components/NavBar/NavBar";

import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <StyledNavbar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/music" component={MusicPage}></Route>
          <Route exact path="/tour" component={HomePage}></Route>
          <Route exact path="/vegas" component={HomePage}></Route>
          <Route exact path="/signup" component={HomePage}></Route>
          <Route exact path="/hauslabs" component={HomePage}></Route>
        </Switch>

        <HomePage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
