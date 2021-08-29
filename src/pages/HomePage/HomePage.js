import { useState, useEffect, useRef } from "react";
import { animated, config, useSpring } from "react-spring";
import Fade from "react-reveal";
import styled, { keyframes } from "styled-components";

import HomeIntroImg from "../../images/LGTextGraphic.jpg";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  margin: 0;
  padding: 0;

  max-width: 100vw;
  background: #000;
`;

const HomeIntroSeq = styled.span`
  background-size: cover;
  background-position: center;
`;

const HomeImage = styled.span`
  background-size: cover;
  background-position: center;
`;


export const AnimatedHeroImage = styled(animated.img)`
  width: 250px;
  display: block;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  user-select: none;
  bottom: -40px;
  z-index: 2;
`;

export const AnimatedNav = styled(animated.nav)`
  width: 50%;
  min-width: 400px;
  padding: 20px;
  position: fixed;
  z-index: 3;
`;

export const AnimatedLight = styled(animated.div)`
  width: 350px;
  height: 350px;
  background: rgb(209, 69, 6);
  background: linear-gradient(
    43deg,
    rgba(209, 69, 6, 1) 0%,
    rgba(147, 28, 5, 1) 100%
  );
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  margin: auto;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  b
  100% {
    opacity: 0.25;
  }
  `;
const fadeInHomeLink = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`;
const fadeIntro = keyframes`
  0% {
    opacity: 0;

  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const HomeIntroImage = styled.img`
  position: absolute;
  max-width: 100vw;
  min-height: 100vh;
  background-position: center;
  transform: scale(1.8) !important;
  background-attachment: fixed;
  left: 10vw;
  top: 5vh;
  z-index: -1;
  animation: ${fadeIntro} 5s ease-in-out;
`;

const HomeImageWide = styled.img`
  position: absolute;
  max-width: 100vw;
  min-height: 100vh;
  background-position: center;
  transform: scale(1.8) !important;
  background-attachment: fixed;
  left: 10vw;
  top: 5vh;
  z-index: -1;
  animation: ${fadeIn} 3s ease-in;
`;
const HomeImageOverlay = styled.div`
  position: absolute;
  left: 0vw;
  top: 35vh;
  width: 100%;
  height: auto;
  transform: scale(1.75, 2.5);
  opacity: 0.25;
  mix-blend-mode: color-dodge;
  animation: ${fadeIn} 5s ease-in;
`;
const HomePageHeader = styled.h1`
  width: 30vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 75vh;
  left: 0vw;
  z-index: 180;
  animation: ${fadeInHomeLink} 7s ease-in;
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

const INIT = "INIT";
const TRANSITION = "TRANSITION";
const FINAL = "FINAL";

const getInitState = (state) => {
  switch (state) {
    case INIT:
      return {
        transform: "translateY(0px) scale(1)",
        opacity: 1
      };
    case TRANSITION:
      return {
        transform: `translateY(50px) scale(1.5)`,
        opacity: 1
      };
    case FINAL:
      return {
        transform: `translateY(50px) scale(1.5)`,
        opacity: 0
      };
    default:
      throw new Error("I'm unaware of this animations state");
  }
};

function getTransitionState(state) {
  switch (state) {
    case INIT:
      return { borderRadius: "50%", width: "350px", height: "350px" };
    case TRANSITION:
      return {
        borderRadius: "0%",
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
      };

    case FINAL:
      return {};
    default:
      return {
        borderRadius: "50%",
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
      };
  }
}

function getFinalState(state) {
  switch (state) {
    case INIT:
      return { opacity: 0 };
    case TRANSITION:
      return { opacity: 0.5 };
    default:
      return { opacity: 1 };
  }
}


const Home = () => {
const [heroAnim, setHeroAnim] = useState(INIT);
const [lightAnim, setLightAnim] = useState(INIT);
const [navAnim, setNavAnim] = useState(INIT);

const imageProps = useSpring({
  ...getInitState(heroAnim),
  config: config.gentle,
});
const lightProps = useSpring({
  ...getTransitionState(lightAnim),
  config: config.gentle,
});
const navProps = useSpring({
  ...getFinalState(navAnim),
  config: config.gentle,
});

useEffect(() => {
  function handleScroll(e) {
    const percentPosY = Math.floor(
      (window.pageYOffset / window.innerHeight) * 100
    );
    if (percentPosY <= 10) {
      setHeroAnim(INIT);
      setLightAnim(INIT);
      setNavAnim(INIT);
    } else if (percentPosY > 10 && percentPosY < 25) {
      setHeroAnim(TRANSITION);
      setLightAnim(TRANSITION);
      setNavAnim(TRANSITION);
    } else if (percentPosY >= 30) {
      setHeroAnim(FINAL);
    }
  }

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <HomePage>
      <HomeIntroSeq>
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
      </HomeImage>

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

      <HomeImageOverlay>
        <img
          className="out-now"
          src="https://cache.umusic.com/_sites/_halo/artistlg/images/outnow.png"
          alt="Chromatica - out now!"
        />
      </HomeImageOverlay>

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
