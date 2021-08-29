const MusicPlayer = () => {
  return (
    <div>
      <iframe
        title="ChromaticaPlayer"
        src="https://open.spotify.com/embed/album/05c49JgPmL4Uz2ZeqRx5SP"
        width="40%"
        height="540"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15vh",
          marginLeft: "5vw",
          marginRight: "auto",
        }}
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
