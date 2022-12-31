import { useState, useRef, useEffect } from "react";
import "./Video.css";
import M from "materialize-css";
import data from "./data";
import translations from "./translations";
import content from "./content";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import clips from "./clips";

const language = window.navigator.language.replace(/-.*/, "");
const region = language === "es" || language === "de" ? language : "en";

const options: YouTubeProps["opts"] = {
  height: "390",
  width: "640",
  playerVars: {
    start: clips[0].start,
    end: clips[0].end,
    playinline: 1,
    autoplay: 1,
    controls: 0,
    iv_load_policy: 3,
    modestbranding: 1,
    origin: window.location.origin,
    widget_referrer: window.location.origin,
    rel: 0,
    fs: 0,
  },
};

function App() {
  const playerRef = useRef();
  const [pos, setPos] = useState<number>(0);
  const posRef = useRef<number>(0);
  const [paused, setPaused] = useState(true);
  const [text, setText] = useState({ subs: false, trans: false, vocab: false });

  const forward = () => {
    const player = playerRef.current as YouTubePlayer;
    const newPos = posRef.current + 1;
    if (newPos < data.length) {
      player.seekTo(data[newPos].time, true);
      setPos(newPos);
      posRef.current = newPos;
      player.playVideo();
    }
  };

  const rewind = () => {
    const player = playerRef.current as YouTubePlayer;
    const newPos = posRef.current - 1;
    if (newPos >= 0) {
      player.seekTo(data[newPos].time);
      setPos(newPos);
      posRef.current = newPos;
      player.playVideo();
    }
  };

  const repeat = () => {
    const player = playerRef.current as YouTubePlayer;
    player.seekTo(data[posRef.current].time);
    player.playVideo();
  };

  const handleTextClick = (subs: boolean, trans: boolean, vocab: boolean) => {
    if ((text.subs && subs) || (text.trans && trans) || (text.vocab && vocab)) {
      setText({ subs: false, trans: false, vocab: false });
    } else {
      setText({ subs, trans, vocab });
    }
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    const player = event.target;
    playerRef.current = player;
  };

  const onPlay = () => {
    const player = playerRef.current as YouTubePlayer;
    const currentTime = player.getCurrentTime();
    setPaused(false);
    const nextPos = posRef.current + 1;
    if (nextPos < data.length && currentTime >= data[nextPos].time) {
      setPos(nextPos);
      posRef.current = nextPos;
    }
  };

  const onPause = () => {
    setPaused(true);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".collapsible");
    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      if (elem) M.Collapsible.init(elem, { accordion: false });
    }
    // Checking every 250 seconds the current time (ontimeupdate doesn't exist on youtube api)
    setInterval(() => {
      const player = playerRef.current as YouTubePlayer;
      if (player) {
        const currentTime = player.getCurrentTime();
        const nextPos = posRef.current + 1;
        if (nextPos < data.length) {
          const diff = data[nextPos].time - currentTime - 0.1; // We have to stop a tiny bit earlier (0.1 seconds) because YouTube still plays the audio for about 0.1 seconds after pausing the video! On mobile it's even longer. 0.2 or maybe even 0.3 seconds delay.
          if (diff <= 0) {
            player.pauseVideo();
          } else if (diff <= 0.25) {
            setTimeout(() => {
              player.pauseVideo();
            }, diff * 1000);
          }
        }
      }
    }, 250);
  }, []);

  useEffect(() => {
    // When listening to a new phrase, subtitles, translations and vocabulary should not be visible
    // so the users can focus on the audio without looking at the subtitles immediately
    setText({ subs: false, trans: false, vocab: false });
  }, [pos]);

  return (
    <center>
      <div className="row">
        <div className="col s12 m8 l6 offset-m2 offset-l3" id="column">
          <div className="video-container">
            <YouTube
              videoId="dgM9V3lEZvE"
              opts={options}
              onReady={onPlayerReady}
              onPause={onPause}
              onPlay={onPlay}
            />
          </div>
          <div>
            <button
              className="btn-large light-blue accent-1 black-text waves-effect waves-light col s4"
              onClick={rewind}
            >
              <i className="large material-icons col s4 offset-s4">
                fast_rewind
              </i>
            </button>
            <button
              className="btn-large light-blue accent-1 black-text waves-effect waves-light col s4"
              onClick={repeat}
            >
              <i className="large material-icons col s4 offset-s4">replay</i>
            </button>
            <button
              className="btn-large light-blue accent-1 black-text waves-effect waves-light col s4"
              onClick={forward}
            >
              <i className="large material-icons col s4 offset-s4">
                {paused ? "play_arrow" : "fast_forward"}
              </i>
            </button>
            <button
              disabled={data[pos].subtitles.length === 0}
              onClick={() => handleTextClick(true, false, false)}
              className="btn-large light-blue lighten-5
 black-text waves-effect waves-light col s4"
            >
              {content.subtitles[region]}
            </button>
            <button
              disabled={
                region === "en" || translations[pos][region].length === 0
              }
              onClick={() => handleTextClick(false, true, false)}
              className="btn-large light-blue lighten-5
 black-text waves-effect waves-light col s4"
            >
              {content.translation[region]}
            </button>
            <button
              disabled={data[pos].vocabulary.length === 0}
              onClick={() => handleTextClick(false, false, true)}
              className="btn-large light-blue lighten-5
 black-text waves-effect waves-light col s4"
            >
              {content.vocabulary[region]}
            </button>
          </div>
          {(text.subs || text.trans || text.vocab) && (
            <div className="col s12">
              <div className="card-panel">
                {text.subs && (
                  <div>
                    {data[pos].subtitles.map((subtitle) => (
                      <p className="flow-text">{subtitle}</p>
                    ))}
                  </div>
                )}
                {region !== "en" && translations[pos][region].length > 0 && (
                  <div>
                    {translations[pos][region].map((translation) => (
                      <p className="flow-text">{translation}</p>
                    ))}
                  </div>
                )}
                {text.vocab && (
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Phrase</th>
                        <th>Definition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data[pos].vocabulary.map(
                        ([phrase, definition]: string[]) => (
                          <tr>
                            <td>{phrase}</td>
                            <td>{definition}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </center>
  );
}

export default App;
