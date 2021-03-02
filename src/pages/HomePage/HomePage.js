import styled from 'styled-components';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 36px;
  margin: 0;
  padding: 0;
  max-width: 100vw;
`;

const HomePageHeader = styled.h1`
  width: auto;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 100vh;
  left: 0vw;
`;

const HomeLink = styled.a`
top: 5vh;
margin-left: 25px;
  font-size: 72px;
  text-align: center;
`;
const HomeImage = styled.span`
  width: 100%;
  background-size: cover;
`;
const HomeImageWide = styled.img`
  position: absolute;
  transform: scale(100%, 100%);
  left: -30vw;
  top: -32vh;
  z-index: -1;
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
`;

const TrackList = styled.img`
position: absolute;
margin-top: -10vh;
margin-left: -4vw;
transform: scale(0.18);
z-index: 0;
`

const Home = () => (
  <HomePage>
    <HomePageHeader>
      ENTER{' '}
      <HomeLink
        href='https://ladygaga.com'
        target='_blank'
        rel='noopener noreferrer'>
        LADYGAGA.COM
      </HomeLink>
    </HomePageHeader>
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

      <TrackList src="https://cache.umusic.com/_sites/_halo/artistlg/images/TRACKLIST.png" alt="Chromatica tracklist" />

  </HomePage>
);

export default Home;
