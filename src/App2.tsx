import thumbnails from "./thumbnails";

function App2() {
  return (
    <div className="row">
      {thumbnails.map((thumbnail) => (
        <div className="col s3">
          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={thumbnail.url} alt="" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {thumbnail.movieTitle}
                <i className="material-icons right">play_circle_outline</i>
              </span>
              <p>{thumbnail.sceneTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App2;
