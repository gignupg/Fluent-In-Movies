import clips from "./clips";
import "./Catalog.css";
import "materialize-css/dist/js/materialize.min.js";

function Catalog({
  setHome,
}: {
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = (e: any) => {
    if (e.target.id !== "info-icon") setHome(false);
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper light-blue lighten-5">
          <a href="#!" className="brand-logo black-text">
            Fluent In Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
            <li>
              <a href="sass.html" className="black-text">
                <i className="material-icons left black-text">language</i>EN
              </a>
            </li>
            <li>
              <a href="badges.html" className="black-text">
                Search
              </a>
            </li>
            <li>
              <a href="collapsible.html" className="black-text">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        {clips.map((clip, idx) => (
          <div className="col s6 m4 l3" key={idx}>
            <div className="card small pointer">
              <div
                className="card-image waves-effect waves-block waves-light"
                onClick={handleClick}
              >
                <img
                  src={`http://img.youtube.com/vi/${clip.id}/mqdefault.jpg`}
                  alt=""
                />
              </div>
              <div className="card-content" onClick={handleClick}>
                <span className="card-title grey-text text-darken-4">
                  {clip.title}
                  <i className="material-icons right activator" id="info-icon">
                    info_outline
                  </i>
                </span>
                <p>{clip.subtitle}</p>
              </div>
              <div className="card-reveal no-pointer">
                <span className="card-title grey-text text-darken-4">
                  Extra Info
                  <i className="material-icons right">close</i>
                </span>
                <table className="highlight">
                  <tbody>
                    <tr>
                      <td>Duration: </td>
                      <td>{clip.duration}</td>
                    </tr>
                    <tr>
                      <td>Category: </td>
                      <td>{clip.category}</td>
                    </tr>
                    <tr>
                      <td>People: </td>
                      <td>{clip.people.join(", ")}</td>
                    </tr>
                    <tr>
                      <td>Channel: </td>
                      <td>
                        <a
                          href={clip.channelURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {clip.channelName}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
