import { useState, useRef, useEffect } from "react";
import "./App.css";
import M from "materialize-css";
import data from "./data";
import content from "./content";
import Player from "@vimeo/player";

const language = window.navigator.language.replace(/-.*/, "");
const region = language === "es" || language === "de" ? language : "en";

function App() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [pos, setPos] = useState<number>(0);
  const posRef = useRef<number>(0);
  const [userInteraction, setUserInteraction] = useState<boolean>(false);
  const [paused, setPaused] = useState(true);
  const [text, setText] = useState({ subs: false, trans: false, vocab: false });
  const [textDisabled, setTextDisabled] = useState({
    subs: false,
    trans: false,
    vocab: false,
  });

  const forward = () => {
    const newPos = posRef.current + 1;
    if (newPos < data.length) {
      player?.setCurrentTime(data[newPos].time);
      setPos(newPos);
      posRef.current = newPos;
      player?.play();
    }
  };

  const rewind = () => {
    const newPos = posRef.current - 1;
    if (newPos >= 0) {
      player?.setCurrentTime(data[newPos].time);
      setPos(newPos);
      posRef.current = newPos;
      player?.play();
    }
  };

  const repeat = () => {
    player?.setCurrentTime(data[posRef.current].time);
    player?.play();
  };

  const handleTextClick = (subs: boolean, trans: boolean, vocab: boolean) => {
    setText({ subs, trans, vocab });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".collapsible");
    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      if (elem) M.Collapsible.init(elem, { accordion: false });
    }
    const iframe = document.getElementsByTagName("iframe")[0];
    const player = new Player(iframe);
    setPlayer(player);
    player.on("timeupdate", (time) => {
      setUserInteraction(true);
      const nextPos = posRef.current + 1;
      if (nextPos < data.length) {
        const diff = data[nextPos].time - time.seconds - 0.1; // We have to stop a tiny bit earlier (0.1 seconds) because Vimeo still plays the audio for about 0.1 seconds after pausing the video!
        if (diff <= 0) {
          player.pause();
        } else if (diff <= 0.25) {
          setTimeout(() => {
            player.pause();
          }, diff * 1000);
        }
      } else if (time.seconds < 1) {
        // When someone reaches the end and goes back to the start
        setPos(0);
        posRef.current = 0;
      }
    });
    player.on("play", (time) => {
      setPaused(false);
      const nextPos = posRef.current + 1;
      if (nextPos < data.length && time.seconds >= data[nextPos].time) {
        setPos(nextPos);
        posRef.current = nextPos;
      }
    });
    player.on("pause", () => {
      setPaused(true);
    });
  }, []);

  useEffect(() => {
    const curr = data[posRef.current];
    setText({ subs: false, trans: false, vocab: false });
    // Disable buttons!
    setTextDisabled({
      subs: curr.subtitles.en.length === 0,
      trans: region === "en" || curr.translation[region].length === 0,
      vocab: curr.vocabulary.length === 0,
    });
    // Disable Translation if region === 'en'
    // Disable Vocab if there is no vocab!
  }, [pos]);

  return (
    <center>
      <div className="row">
        <div className="col s12 m8 l6 offset-m2 offset-l3" id="column">
          <div className="video-container">
            <iframe
              width="853"
              height="480"
              src="https://player.vimeo.com/video/784124019?h=8b1452e6ab&amp;badge=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              title="video"
            ></iframe>
          </div>
          {userInteraction && (
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
              {(!textDisabled.subs ||
                !textDisabled.trans ||
                !textDisabled.vocab) && (
                <div>
                  <button
                    disabled={textDisabled.subs}
                    onClick={() => handleTextClick(true, false, false)}
                    className="btn-large light-blue lighten-5
 black-text waves-effect waves-light col s4"
                  >
                    {content.subtitles[region]}
                  </button>
                  <button
                    disabled={textDisabled.trans}
                    onClick={() => handleTextClick(false, true, false)}
                    className="btn-large light-blue lighten-5
 black-text waves-effect waves-light col s4"
                  >
                    {content.translation[region]}
                  </button>
                  <button
                    disabled={textDisabled.vocab}
                    onClick={() => handleTextClick(false, false, true)}
                    className="btn-large light-blue lighten-5
 black-text waves-effect waves-light col s4"
                  >
                    {content.vocabulary[region]}
                  </button>
                </div>
              )}
            </div>
          )}
          {(text.subs || text.trans || text.vocab) && (
            <div className="col s12">
              <div className="card-panel">
                {text.subs && (
                  <div>
                    {data[pos].subtitles.en.map((subtitle) => (
                      <p className="flow-text">{subtitle}</p>
                    ))}
                  </div>
                )}
                {text.trans && (
                  <div>
                    {data[pos].translation[region].map((translation) => (
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
