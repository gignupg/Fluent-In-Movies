import { useState, useRef, useEffect } from "react";
import "./App.css";
import M from "materialize-css";
import text from "./text";
import content from "./content";
import Player from "@vimeo/player";

const language = window.navigator.language.replace(/-.*/, "");
const region = language === "es" || language === "de" ? language : "en";

function App() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [pos, setPos] = useState<number>(0);
  const posRef = useRef<number>(0);
  const [userInteraction, setUserInteraction] = useState<boolean>(false);

  const forward = () => {
    const newPos = posRef.current + 1;
    if (newPos < text.length) {
      player?.setCurrentTime(text[newPos].time);
      setPos(newPos);
      posRef.current = newPos;
      player?.play();
    }
  };

  const rewind = () => {
    const newPos = posRef.current - 1;
    if (newPos >= 0) {
      player?.setCurrentTime(text[newPos].time);
      setPos(newPos);
      posRef.current = newPos;
      player?.play();
    }
  };

  const repeat = () => {
    player?.setCurrentTime(text[posRef.current].time);
    player?.play();
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
      if (nextPos < text.length) {
        const diff = text[nextPos].time - time.seconds - 0.1; // We have to stop a tiny bit earlier (0.1 seconds) because Vimeo still plays the audio for about 0.1 seconds after pausing the video!
        if (diff <= 0) {
          player.pause();
        } else if (diff <= 0.25) {
          setTimeout(() => {
            player.pause();
          }, diff * 1000);
        }
      }
    });
    player.on("play", (time) => {
      const nextPos = posRef.current + 1;
      if (nextPos < text.length && time.seconds >= text[nextPos].time) {
        setPos(nextPos);
        posRef.current = nextPos;
      }
    });
  }, []);

  return (
    <center>
      <div className="row">
        <div className="col s12 m8 l6 offset-m2 offset-l3" id="column">
          <div className="video-container">
            <iframe
              width="853"
              height="480"
              src="https://player.vimeo.com/video/784124019?h=8b1452e6ab&amp;badge=0&amp;autoplay=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allowFullScreen
              title="video"
            ></iframe>
          </div>
          {userInteraction && (
            <div className="buttons">
              <button
                className="btn-large waves-effect waves-light col s4"
                onClick={rewind}
              >
                <i className="large material-icons col s4 offset-s4">
                  fast_rewind
                </i>
              </button>
              <button
                className="btn-large waves-effect waves-light col s4"
                onClick={repeat}
              >
                <i className="large material-icons col s4 offset-s4">replay</i>
              </button>
              <button
                className="btn-large waves-effect waves-light col s4"
                onClick={forward}
              >
                <i className="large material-icons col s4 offset-s4">
                  fast_forward
                </i>
              </button>
            </div>
          )}
          <ul className="collapsible">
            {text[pos].subtitles.en.length > 0 && (
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">subtitles</i>
                  {content.subtitles[region]}
                </div>
                <div className="collapsible-body">
                  {text[pos].subtitles.en.map((subtitle: string) => (
                    <p className="flow-text">{subtitle}</p>
                  ))}
                </div>
              </li>
            )}
            {region !== "en" && text[pos].translation[region].length > 0 && (
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">g_translate</i>
                  {content.translation[region]}
                </div>
                <div className="collapsible-body">
                  {text[pos].translation[region].map((translation: string) => (
                    <p className="flow-text">{translation}</p>
                  ))}
                </div>
              </li>
            )}
            {text[pos].vocabulary.length > 0 && (
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">school</i>
                  {content.vocabulary[region]}
                </div>
                <div className="collapsible-body left-align">
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Phrase</th>
                        <th>Definition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {text[pos].vocabulary.map(
                        ([phrase, definition]: string[]) => (
                          <tr>
                            <td>{phrase}</td>
                            <td>{definition}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </center>
  );
}

export default App;
