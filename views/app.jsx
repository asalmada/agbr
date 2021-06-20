var React = require("react");
var DefaultLayout = require("./layouts/default");
var Button = require("./layouts/button");
var Profile = require("./layouts/profile");

const stylesheet = {
  menu: {
    marginTop: "2rem",
  },
  pageTitle: {
    fontSize: "calc(2.225rem + .9vw)",
    margin: "4rem 0",
  },
  card: {
    backgroundColor: "#181717",
    color: "white",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
  },
  cardBodyRanking: {
    display: "flex",
    alignItems: "center",
    color: "#04E553",
  },
  cardBodyHorizontalAlign: {
    width: "100%",
    textAlign: "center",
    fontFamily: "'Gotham Bold', sans-serif",
  },
  cardBody: {
    padding: "0 1rem",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  cardTitle: {
    marginBottom: "0",
    fontFamily: "'Gotham Bold', sans-serif",
  },
  timeRangeRow: {
    paddingBottom: "3rem",
  },
  timeRange: {
    color: "#04E553",
    textDecorationLine: "underline",
    textUnderlineOffset: "10px",
  },
  songURL: {
    color: "#04E553",
    textDecorationLine: "underline",
    textUnderlineOffset: "2px",
  },
};

function App(props) {
  let highlightedTimeRange;
  let fontFamilyLongTerm,
    fontFamilyMediumTerm,
    fontFamilyShortTerm = "unset";
  if (props.selectedPath === "/top-50") {
    if (!props.selectedTimeRange || props.selectedTimeRange === "long_term") {
      highlightedTimeRange = "long_term";
      fontFamilyLongTerm = "'Gotham Bold', sans-serif";
    }
    if (props.selectedTimeRange === "medium_term") {
      highlightedTimeRange = "medium_term";
      fontFamilyMediumTerm = "'Gotham Bold', sans-serif";
    }
    if (props.selectedTimeRange === "short_term") {
      highlightedTimeRange = "short_term";
      fontFamilyShortTerm = "'Gotham Bold', sans-serif";
    }
  }

  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-md-6 col-lg-4 text-center" style={stylesheet.menu}>
          <Button label={"TOP SONGS"} src={"/spotify/top-50"} />
        </div>
        <div className="col-md-6 col-lg-4 text-center" style={stylesheet.menu}>
          <Button label={"RECENTLY PLAYED"} src={"/spotify/recently-played"} />
        </div>
        <div className="col-md-12 col-lg-4" style={stylesheet.menu}>
          <Profile user={props.user} />
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col">
            <h2 className="text-center" style={stylesheet.pageTitle}>
              {highlightedTimeRange && "Top Songs"}
            </h2>
          </div>
        </div>

        {highlightedTimeRange && (
          <div className="row" style={stylesheet.timeRangeRow}>
            <div className="col">
              <div className="text-center">
                <a
                  href="/spotify/top-50?time_range=long_term"
                  style={stylesheet.timeRange}
                  style={{
                    ...stylesheet.timeRange,
                    fontFamily: fontFamilyLongTerm,
                  }}
                >
                  ALL TIME
                </a>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <a
                  href="/spotify/top-50?time_range=medium_term"
                  style={{
                    ...stylesheet.timeRange,
                    fontFamily: fontFamilyMediumTerm,
                  }}
                >
                  LAST 6 MONTHS
                </a>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <a
                  href="/spotify/top-50?time_range=short_term"
                  style={{
                    ...stylesheet.timeRange,
                    fontFamily: fontFamilyShortTerm,
                  }}
                >
                  LAST 4 WEEKS
                </a>
              </div>
            </div>
          </div>
        )}

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
          props.tracks.map((track, index) => (
            <div className="row" key={track.rankingPosition}>
              <div className="col">
                <div className="card mb-3" style={stylesheet.card}>
                  <div className="row g-0">
                    <div
                      className="col-md-1"
                      style={stylesheet.cardBodyRanking}
                    >
                      <div style={stylesheet.cardBodyHorizontalAlign}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="col-md-1">
                      <img
                        className="img-fluid"
                        src={track.image.url}
                        width={"100%"}
                        height={"auto"}
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body" style={stylesheet.cardBody}>
                        <h5 className="card-title" style={stylesheet.cardTitle}>
                          {track.name}
                        </h5>
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
