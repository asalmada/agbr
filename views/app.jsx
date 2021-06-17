var React = require("react");
var DefaultLayout = require("./layouts/default");

const stylesheet = {
  card: {
    backgroundColor: "black",
    color: "white",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
  },
};

function App(props) {
  return (
    <DefaultLayout>
      <div>
        <div className="row">
          <div className="col">
            <h2 className="text-center">Top Songs</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-center">
              <a href="/spotify/get-top?time_range=short_term">4 WEEKS</a>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <a href="/spotify/get-top?time_range=medium_term">6 MONTHS</a>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <a href="/spotify/get-top?time_range=long_term">ALL TIME</a>
            </div>
          </div>
        </div>

        {props.tracks.length === 0 && (
          <div className="row">
            <div className="col">
              <p className="text-center">
                Sorry, it looks like you did not listen so much Ariana Grande
                songs in the selected period of time.
              </p>
              <p className="text-center">
                Select another period of time or listen more to Ariana Grande
                songs!
              </p>
            </div>
          </div>
        )}
        {props.tracks.length > 0 &&
          props.tracks.map((track) => (
            <div className="row" key={track.rankingPosition}>
              <div className="col">
                <div className="card mb-3" style={stylesheet.card}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={track.image.url}
                        width={"100%"}
                        height={"auto"}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{track.name}</h5>
                        <p class="card-text">{track.album}</p>
                        <p class="card-text">
                          TOP 50 overall position: {track.rankingPosition}
                        </p>
                        <p class="card-text">
                          <a href={track.url} target="_blank">
                            Click here to listen the song
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </DefaultLayout>
  );
}

module.exports = App;
