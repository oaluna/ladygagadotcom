import { Component } from 'react';
import * as $ from 'jquery';

const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'f24466db19cf4bee96076db82a922ba8';
const redirectUri = 'http://localhost:3000';
export const scopes = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state'
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = '';

const Player = (props) => {
  const backgroundStyles = {
    backgroundImage: `url(${props.item.album.images[0].url})`
  };

  const progressBarStyles = {
    width: (props.progress_ms * 100) / props.item.duration_ms + '%'
  };

  return (
    <div
      className='Player'
      style={{
position: 'static',
        zIndex: 400,
        marginTop: '25vh',
        marginLeft: '35vw',
        padding: '45px auto',
        maxWidth: '35vw',
        width: '100%'
      }}>
      <div className='main-wrapper'>
        <div className='now-playing__img'>
          <img src={props.item.album.images[0].url} alt='album artwork' />
        </div>
        <div className='now-playing__side'>
          <div className='now-playing__name'>{props.item.name}</div>
          <div className='now-playing__artist'>
            {props.item.artists[0].name}
          </div>
          <div className='now-playing__status'>
            {props.is_playing ? 'Playing' : 'Paused'}
          </div>
          <div className='progress'>
            <div className='progress__bar' style={progressBarStyles} />
          </div>
        </div>
        <div className='background' style={backgroundStyles} />{' '}
      </div>
    </div>
  );
};

class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = {
      token:
        'BQAyhOirZF1yl4526zIEBToY_gAlzu72g1TsPo6OjrQSbuDO_QRS4rmbbks1h52_fzo0yERH0zn76fJ-RaJ2qi8eUkWR_s921izdgDdnWtpTjpaflYTfHNvvQ2NSMc8d5i1X_aKgucOpD5D8w4CNtAB5IdA5J78XIYT4',
      item: {
        album: {
          images: [
            {
              url:
                'https://i.scdn.co/image/ab67616d0000b2736040effba89b9b00a6f6743a'
            }
          ]
        },
        name: 'Chromatica',
        artists: [{ name: 'Lady Gaga' }],
        duration_ms: 60400
      },
      is_playing: 'playing',
      progress_ms: 0,
      no_data: false
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
        token: _token
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
      url: 'https://api.spotify.com/v1/me/player',
      type: 'GET',
      beforeSend: (xhr) => {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      },
      success: (data) => {
        // Checks if the data is not empty
        if (!data) {
          this.setState({
            no_data: true
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false /* We need to "reset" the boolean, in case the
                            user does not give F5 and has opened his Spotify. */
        });
      }
    });
  }

  render() {
    return (
      <div
        className='MusicPlayer'
        style={{
          zIndex: 400,
          marginTop: '20vh',
          background: 'rgba(241, 110, 112, 0.8)',
          maxWidth: '80vw',
          backdropFilter: 'normal',
          opacity: 1,
          mixBlendMode: 'normal',
          width: '100%',
          minHeight: '60vh',
          height: '100%',
          padding: '45px auto',
          borderRadius: '50px',
          justifyContent: 'center',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 4px )'
        }}>
        {!this.state.token && (
          <button style={{ position: 'absolute', top: '50vh', zIndex: 300 }}>
            <a
              className='btn btn--loginApp-link'
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                '%20'
              )}&response_type=token&show_dialog=true`}>
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
