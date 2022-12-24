import { useState, useEffect } from "react";
import "./App.css";
import M from "materialize-css";
import text from "./text";
import content from "./content";

type Region = "en" | "es" | "de";

const language = window.navigator.language.replace(/-.*/, "");
const defLang = language === "es" || language === "de" ? language : "en";

function App() {
  const [region, setRegion] = useState<Region>(defLang);

  const updateRegion = (elem: Element) => {
    setRegion(elem.id as Region);
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

      <div className="buttons">
        <button className="button">Prev</button>
        <button className="button">Rewind</button>
        <button className="button">Next</button>
      </div>

      <ul className="collapsible col s12 m10 offset-m1">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">subtitles</i>
            {content.subtitles[region]}
          </div>
          <div className="collapsible-body">
            {text[0].subtitles.en.map((subtitle: string) => (
              <p className="flow-text">{subtitle}</p>
            ))}
          </div>
        </li>
        {region !== "en" && (
          <li>
            <div className="collapsible-header">
              <i className="material-icons">g_translate</i>
              {content.translation[region]}
            </div>
            <div className="collapsible-body">
              {text[0].translation[region].map((translation: string) => (
                <p className="flow-text">{translation}</p>
              ))}
            </div>
          </li>
        )}
        {text[0].vocabulary.length > 0 && (
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
                  {text[0].vocabulary.map(([phrase, definition]: string[]) => (
                    <tr>
                      <td>{phrase}</td>
                      <td>{definition}</td>
                    </tr>
                  ))}
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
