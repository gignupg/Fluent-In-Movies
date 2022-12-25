import { useState, useRef, useEffect } from "react";
import "./App.css";
import M from "materialize-css";
import text from "./text";
import content from "./content";
import Player from "@vimeo/player";
type Region = "en" | "es" | "de";

const language = window.navigator.language.replace(/-.*/, "");
const defLang = language === "es" || language === "de" ? language : "en";

function App() {
  const [region, setRegion] = useState<Region>(defLang);
  const [player, setPlayer] = useState<Player | null>(null);
  const [pos, setPos] = useState<number>(0);
  const posRef = useRef<number>(0);
  const [userInteraction, setUserInteraction] = useState<boolean>(false);

  const updateRegion = (elem: Element) => {
    setRegion(elem.id as Region);
  };

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
    const elem = document.querySelector(".tabs");
    if (elem) {
      const instance = M.Tabs.init(elem, { onShow: updateRegion });
      instance.select(defLang);
    }
    const iframe = document.getElementsByTagName("iframe")[0];
    const player = new Player(iframe);
    setPlayer(player);
    player.on("timeupdate", (time) => {
      setUserInteraction(true);
      const nextPos = posRef.current + 1;
      if (nextPos < text.length) {
        const diff = text[nextPos].time - time.seconds;
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
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <a href="#en">English</a>
          </li>
          <li className="tab col s3">
            <a href="#es">Español</a>
          </li>
          <li className="tab col s3">
            <a href="#de">Deutsch</a>
          </li>
        </ul>
      </div>
      <div id="en" className="col s12"></div>
      <div id="es" className="col s12"></div>
      <div id="de" className="col s12"></div>
      <div className="row">
        <h1>Hancock</h1>
      </div>
      <div className="iframe-container">
        <iframe
          className="iframe"
          src="https://player.vimeo.com/video/784124019?h=8b1452e6ab&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allowFullScreen
          title="video"
        ></iframe>
      </div>
      {userInteraction && (
        <div className="buttons">
          <button className="button" onClick={rewind}>
            Prev
          </button>
          <button className="button" onClick={repeat}>
            Repeat
          </button>
          <button className="button" onClick={forward}>
            Next
          </button>
        </div>
      )}
      <ul className="collapsible col s12 m10 offset-m1">
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
    </center>
  );
}

export default App;
