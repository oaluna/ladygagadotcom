import "./MusicPage.css";
import MusicPlayer from "./MusicPlayer";
import LGCover from "../../images/LG-Cover.jpg";

const MusicPage = () => {
  return (
    <>
      <div className="MusicPage">
        <MusicPlayer />
      </div>
      <img
        src={LGCover}
        alt="Gaga on a round contraption"
        style={{ left: "20vw", width: "100vw", verticalAlign: "middle" }}
      />
    </>
  );
};

export default MusicPage;
