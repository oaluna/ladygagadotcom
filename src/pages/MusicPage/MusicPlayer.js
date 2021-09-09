const MusicPlayer = () => {
  return (
    <>
      <div
        className="playerContainer"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-evenly",
          zIndex: 2,
          position: "relative",
        }}
      >
        <div className="chromaticaPlayer" style={{ marginTop: "25vh" }}>
          <label
            htmlFor="ChromaticaPlayer"
            style={{ zIndex: 2, fontSize: "24px", color: "#f16e70" }}
          >
            Listen to <em>Chromatica</em>
          </label>
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
        <div className="dawnOfChromaticaPlayer" style={{ marginTop: "25vh" }}>
          <label
            htmlFor="dawnOfChromaticaPlayer"
            style={{ zIndex: 2, fontSize: "24px", color: "#f16e70" }}
          >
            Listen to <em>Dawn of Chromatica</em>
          </label>
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
