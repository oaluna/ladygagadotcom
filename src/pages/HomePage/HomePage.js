///import { useState, useEffect, useRef } from "react";
///import { config, useSpring } from "react-spring";
///import HomeAnimation from "../../components/HomeAnimation/HomeAnimation"
import Fade from "react-reveal";
import styled from "styled-components";

//import HomeIntroImg from "../../images/LGTextGraphic.jpg";

 const HomePage = styled.div`
   display: flex;
   flex-direction: column;
   font-size: 36px;
   margin: 0;
   padding: 0;

   max-width: 100vw;
   background: #000;
 `;

// const HomeIntroSeq = styled.span`
//   background-size: cover;
//   background-position: center;
// `;

// const HomeImage = styled.span`
//   background-size: cover;
//   background-position: center;
// `;




// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   b
//   100% {
//     opacity: 0.25;
//   }
//   `;
// const fadeInHomeLink = keyframes`
// 0% {
//   opacity: 0;
// }
// 100% {
//   opacity: 1;
// }`;
// const fadeIntro = keyframes`
//   0% {
//     opacity: 0;

//   }
//   50% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `;
// const HomeIntroImage = styled.img`
//   position: absolute;
//   max-width: 100vw;
//   min-height: 100vh;
//   background-position: center;
//   transform: scale(1.8) !important;
//   background-attachment: fixed;
//   left: 10vw;
//   top: 5vh;
//   z-index: -1;
//   animation: ${fadeIntro} 5s ease-in-out;
// `;

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
// `;
// const HomeImageOverlay = styled.div`
//   position: absolute;
//   left: 0vw;
//   top: 35vh;
//   width: 100%;
//   height: auto;
//   transform: scale(1.75, 2.5);
//   opacity: 0.25;
//   mix-blend-mode: color-dodge;
//   animation: ${fadeIn} 5s ease-in;
// `;
 const HomePageHeader = styled.h1`
   width: 30vw;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   position: absolute;
   top: 75vh;
   left: 0vw;
   z-index: 180;
 `;

const HomeLink = styled.a`
  top: 5vh;
  margin-left: 0px;
  font-size: 72px;
  text-align: center;
  z-index: 100;
  &:hover {
    text-shadow: 0px 0px 10px #f16e70;
    color: #fff;
    transition: 3s;
  }
`;
const TrackList = styled.img`
  position: absolute;
  top: 48vh;
  left: 30vw;
  transform: scale(0.3);
  z-index: 0;
  mix-blend-mode: lighten;
`;


const Home = () => {
  return (
    <HomePage>
      {/* <HomeIntroSeq>
        <HomeIntroImage
          ref="imageRefOne"
          src={HomeIntroImg}
          alt="Chromatica text graphic"
        />
      </HomeIntroSeq>
      <HomeImage>
        <HomeImageWide
          ref="imageRefTwo"
          src="https://cache.umusic.com/_sites/_halo/artistlg/images/LG-Wide.jpg"
          alt="The album artist in a far away planet"
        />
      </HomeImage> */}

      <HomePageHeader>
        ENTER{" "}
        <HomeLink
          href="https://ladygaga.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LADYGAGA.COM
        </HomeLink>
      </HomePageHeader>

      {/* <HomeImageOverlay>
        <img
          className="out-now"
          src="https://cache.umusic.com/_sites/_halo/artistlg/images/outnow.png"
          alt="Chromatica - out now!"
        />
      </HomeImageOverlay> */}

      <Fade right delay="100">
        <TrackList
          src="https://cache.umusic.com/_sites/_halo/artistlg/images/TRACKLIST.png"
          alt="Chromatica tracklist"
        />
      </Fade>
    </HomePage>
  );
};

export default Home;
