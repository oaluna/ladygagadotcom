import React from 'react'
import { Switch, Route } from "react-router-dom";

//import styled, { keyframes } from "styled-components";

import HomePage from "./pages/HomePage/HomePage";
import MusicPage from "./pages/MusicPage/MusicPage";
import HausLabsPage from "./pages/HausLabsPage/HausLabsPage";
import VegasPage from "./pages/VegasPage/VegasPage";
import TourPage from "./pages/TourPage/TourPage";
import SignUp from "./pages/SignUp/SignUp";

import StyledNavbar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"

// const HomeImage = styled.span`
//   background-size: cover;
//   background-position: center;
// `;

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   
//   100% {
//     opacity: 0.25;
//   }
//   `;


// const HomeImageWide = styled.img`
//   position: absolute;
//   max-width: 100vw;
//   min-height: 100vh;
//   background-position: center;
//   transform: scale(1.8) !important;
//   background-attachment: fixed;
//   left: 10vw;
//   top: 5vh;
//   z-index: -1;
//   animation: ${fadeIn} 3s ease-in;
//   &::after {
//     animation: none;
//   }
// `;




const MainRouter = () => {
    return (
      <>
        {/* <HomeImage>
          <HomeImageWide
            src="https://cache.umusic.com/_sites/_halo/artistlg/images/LG-Wide.jpg"
            alt="The album artist in a far away planet"
          />
        </HomeImage> */}
        
        <StyledNavbar />

        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/music" component={MusicPage}></Route>
          <Route exact path="/tour" component={TourPage}></Route>
          <Route exact path="/vegas" component={VegasPage}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/hauslabs" component={HausLabsPage}></Route>
        </Switch>
        <Footer />
      </>
    );
}
export default MainRouter
