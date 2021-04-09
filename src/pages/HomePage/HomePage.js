import styled, { keyframes } from 'styled-components';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  margin: 0;
  padding: 0;
  max-width: 100vw;
`;


const HomeImage = styled.span`
  background-size: cover;
  background-position: center;
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

const HomeImageOverlay = styled.div`
  position: absolute;
  left: 0vw;
  top: 35vh;
  width: 100%;
  height: auto;
  transform: scale(1.5, 2.2);
  opacity: 0.25;
  mix-blend-mode: color-dodge;
  animation: ${fadeIn} 3s ease-in;
`;
const HomePageHeader = styled.h1`
  width: 30vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 100vh;
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
  margin-top: 38vh;
  margin-left: 32vw;
  transform: scale(0.35);
  z-index: 0;
  mix-blend-mode: lighten;
`;

const Home = () => (
  <HomePage>

    <HomeImage>
      <HomeImageWide
        src='https://cache.umusic.com/_sites/_halo/artistlg/images/LG-Wide.jpg'
        alt='The album artist in a far away planet'
      />
    </HomeImage>

    <HomeImageOverlay>
      <img
        className='out-now'
        src='https://cache.umusic.com/_sites/_halo/artistlg/images/outnow.png'
        alt='Chromatica - out now!'
      />
    </HomeImageOverlay>
    <HomePageHeader>
      ENTER{' '}
      <HomeLink
        href='https://ladygaga.com'
        target='_blank'
        rel='noopener noreferrer'>
        LADYGAGA.COM
      </HomeLink>
    </HomePageHeader>
    <TrackList
      src='https://cache.umusic.com/_sites/_halo/artistlg/images/TRACKLIST.png'
      alt='Chromatica tracklist'
    />
  </HomePage>
);

export default Home;
