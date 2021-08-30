import styled from "styled-components";
import { animated } from "react-spring";



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
  background-image: url("../../images/LG-Wide.jpg");
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  margin: auto;
`;
