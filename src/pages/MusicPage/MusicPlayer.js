import { Component } from "react";
import * as $ from "jquery";
require("dotenv");

const authEndpoint =
  process.env.ENDPOINT ||
  "https://api.spotify.com/v1/playlists/37i9dQZF1DXaB4n0u69YR3";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId =
  process.env.SPOTIFY_CLIENT_ID || "f24466db19cf4bee96076db82a922ba8";
const redirectUri = process.env.REDIRECT_URI || "http://localhost:3000";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

const Player = (props) => {
  const backgroundStyles = {
    backgroundImage: `url(${props.item.album.images[0].url})`,
    position: "relative",
    margin: "20px auto",
    padding: 0,
  };

  const progressBarStyles = {
    width: (props.progress_ms * 100) / props.item.duration_ms + "%",
  };

  return (
    <div className="main-player" style={{ maxWidth: "40vw" }}>
      <div className="wrapper">
        <div className="now-playing__img">
          <img
            src={props.item.album.images[0].url}
            alt="album artwork"
            className="album-artwork"
          />
        </div>
        <div className="now-playing__side">
          <h2 className="title">{props.item.name}</h2>
          <h3 className="title artist">{props.item.artists[0].name}</h3>
          <div className="buttons">
            <div className="player-buttons shuffle"></div>
            <div className="player-buttons previously"></div>
            <div className="player-buttons play"></div>
            <div className="player-buttons next"></div>
            <div className="player-buttons repeat"></div>
          </div>
          <div className="now-playing__status">
            {props.is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div className="progress__bar" style={progressBarStyles} />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    </div>
  );
};

class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = {
      token:
        process.env.TOKEN ||
        "BQAJAY_bM5iewaKMotPR5ZN6lwgUyYSab_fKCx-gB4m4nEyBPpqxMWyr6iKavFpxmP8PNmhJpVoibkeuehQ2rRP7aB82oiz3nDZzQqV1peZRupM-wb9L9nAJv7hVwXX5LnwarfxATdUG0emq0BWRmJSOo4sqkfP02vhy",
      item: {
        album: {
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d0000b2736040effba89b9b00a6f6743a",
            },
          ],
        },
        name: "Chromatica",
        artists: [{ name: "Lady Gaga" }],
        duration_ms: 60400,
      },
      is_playing: "playing",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if (this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        // Checks if the data is not empty
        if (!data) {
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the
                            user does not give F5 and has opened his Spotify. */,
        });
      },
    });
  }

  render() {
    return (
      <div className="MusicPlayer">
        {!this.state.token && (
          <button style={{ position: "absolute", top: "50vh", zIndex: 300 }}>
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          </button>
        )}
        {this.state.token && !this.state.no_data && (
          <Player
            item={this.state.item}
            is_playing={this.state.is_playing}
            progress_ms={this.state.progress_ms}
          />
        )}
        {this.state.no_data && (
          <p>
            You need to be playing a song on Spotify, for something to appear
            here.
          </p>
        )}
      </div>
    );
  }
}
export default MusicPlayer;
