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
        <h1>{content.title[region]}</h1>
      </div>
      <div className="row">
        <p className="flow-text col s8 offset-s2">
          {content.usageInstructions[region]}
        </p>
      </div>
      <div className="row">
        <h3>{content.context[region]}</h3>
      </div>
      <div className="row">
        <p className="flow-text col s8 offset-s2">
          {content.introductoryText[region]}
        </p>
      </div>
      <div className="row">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/781670633?h=2514b21dd7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="video1.mp4"
          ></iframe>
        </div>
      </div>
      <div className="row">
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
                    {text[0].vocabulary.map(
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
    </center>
  );
}

export default App;
