import { useState, useEffect } from "react"
import { useSpring, config } from "react-spring";
import Nav from "../NavBar/NavBar"
import {HeroImage, WideImage} from "./hero-img";
import image from "../../images/LGTextGraphic.jpg"
import imageWide from "../../images/LG-Wide.jpg"
import Light from "./light";

const INIT = "INIT";
const TRANSITION = "TRANSITION";
const FINAL = "FINAL";

function getInitState(state) {
  switch (state) {
    case INIT:
      return { transform: "translateY(0px) scale(1)", opacity: 1 };
    case TRANSITION:
      return { transform: `translateY(50px) scale(1.5)`, opacity: 1 };
    case FINAL:
      return { transform: `translateY(50px) scale(1.5)`, opacity: 0 };
    default:
      throw new Error("I'm unaware of this animations state");
  }
}

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

 function HomeAnimation() {
  const [heroAnim, setHeroAnim] = useState(INIT);
  const [lightAnim, setLightAnim] = useState(INIT);
  const [navAnim, setNavAnim] = useState(INIT);
     const [wideAnim, setWideAnim] = useState(INIT);

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
         config: config.gentle
     });
     const wideProps = useSpring({
         ...getFinalState(wideAnim),
         config: config.gentle
     })
  
  useEffect(() => {
    function handleScroll(e) {
      const percentPosY = Math.floor(
        (window.pageYOffset / window.innerHeight) * 100
      );
      if (percentPosY <= 10) {
        setHeroAnim(INIT);
          setLightAnim(INIT);
          setWideAnim(INIT);
        
      } else if (percentPosY > 10 && percentPosY < 25) {
        setHeroAnim(TRANSITION);
          setLightAnim(TRANSITION);
    setWideAnim(TRANSITION)
    
      } else if (percentPosY >= 30) {
        setHeroAnim(FINAL);
          setNavAnim(FINAL);
          setWideAnim(FINAL);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      css={`
        width: 100%;
        height: 300vh;
        background-color: black;
        background-image: ${imageWide}
      `}
    >
      <Nav style={navProps} />
          {INIT && <HeroImage src={image} style={imageProps} />}
          {FINAL && <WideImage src={imageWide} style={wideProps} />}
      <Light style={lightProps} />
    </div>
  );
}
export default HomeAnimation