import './MusicPage.css';
import MusicPlayer from './MusicPlayer';

const MusicPage = () => {
  return (
    <>
      <div
        className='MusicPage'
        style={{
          position: 'absolute',
          maxWidth: '60vw',
          minHeight: '60vh',
          left: '20vw',
          padding: '5vh auto',
          textAlign: 'center'
        }}>
        <MusicPlayer />
      </div>
    </>
  );
};

export default MusicPage;
