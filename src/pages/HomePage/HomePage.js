<<<<<<< HEAD
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal";
=======
import styled, { keyframes } from 'styled-components';
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  margin: 0;
  padding: 0;
  max-width: 100vw;
<<<<<<< HEAD
  background: #000;
=======
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
`;

const HomeImage = styled.span`
  background-size: cover;
  background-position: center;
`;
<<<<<<< HEAD

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
}`

=======
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
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
<<<<<<< HEAD
  animation: ${fadeIn} 3s ease-in;
  
`;
=======
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

>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
const HomeImageOverlay = styled.div`
  position: absolute;
  left: 0vw;
  top: 35vh;
  width: 100%;
  height: auto;
<<<<<<< HEAD
  transform: scale(1.75, 2.5);
  opacity: 0.25;
  mix-blend-mode: color-dodge;
  animation: ${fadeIn} 5s ease-in;
  `;
=======
  transform: scale(1.5, 2.2);
  opacity: 0.25;
  mix-blend-mode: color-dodge;
  animation: ${fadeIn} 3s ease-in;
`;
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
const HomePageHeader = styled.h1`
  width: 30vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
<<<<<<< HEAD
  top: 75vh;
  left: 0vw;
  z-index: 180;
  animation: ${fadeInHomeLink} 7s ease-in;
  
=======
  top: 100vh;
  left: 0vw;
  z-index: 180;
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
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
<<<<<<< HEAD
  left: 30vw;
=======
 left: 30vw;
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
  transform: scale(0.3);
  z-index: 0;
  mix-blend-mode: lighten;
`;

const Home = () => (
<<<<<<< HEAD
  <HomePage>
    <HomeImage>
      <HomeImageWide
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
=======
<div className="HomePage">
    <HomeImage>
      <HomeImageWide
        src='https://cache.umusic.com/_sites/_halo/artistlg/images/LG-Wide.jpg'
        alt='The album artist in a far away planet'
      />
    </HomeImage>
    <HomePageHeader>
      ENTER{' '}
      <HomeLink
        href='https://ladygaga.com'
        target='_blank'
        rel='noopener noreferrer'>
        LADYGAGA.COM
      </HomeLink>
    </HomePageHeader>
    <HomeImageOverlay>
      <img
        className='out-now'
        src='https://cache.umusic.com/_sites/_halo/artistlg/images/outnow.png'
        alt='Chromatica - out now!'
      />
    </HomeImageOverlay>

    <TrackList
      src='https://cache.umusic.com/_sites/_halo/artistlg/images/TRACKLIST.png'
      alt='Chromatica tracklist'
    />
    </div>
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
);

export default Home;
