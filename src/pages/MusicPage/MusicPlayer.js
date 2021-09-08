const MusicPlayer = () => {
  return (
    <>
      <div
        className="playerContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          zIndex: 2,
          position: "relative"
        }}
      >
        <div className="chromaticaPlayer">
          <iframe
            title="ChromaticaPlayer"
            src="https://open.spotify.com/embed/album/05c49JgPmL4Uz2ZeqRx5SP"
            width="500px"
            height="600px"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="dawnOfChromaticaPlayer">
          <iframe
            title="DawnOfChromaticaPlayer"
            src="https://open.spotify.com/embed/album/3OevODyllQCrhudfLLnV3y"
            width="500px"
            height="600px"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
