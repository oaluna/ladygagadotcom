//import ChromaticaIcon from "images/chromaticaicon.png"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MusicPage from "./pages/MusicPage/MusicPage";
import HausLabsPage from "./pages/HausLabsPage/HausLabsPage";
import VegasPage from "./pages/VegasPage/VegasPage";
import TourPage from "./pages/TourPage/TourPage";
import SignUp from "./pages/SignUp/SignUp";
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
           <Route exact path="/tour" component={TourPage}></Route>
          <Route exact path="/vegas" component={VegasPage}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/hauslabs" component={HausLabsPage}></Route>
        </Switch>
        <HomePage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
