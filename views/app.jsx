var React = require("react");
var DefaultLayout = require("./layouts/default");
var Button = require("./layouts/button");
var Profile = require("./layouts/profile");

const stylesheet = {
  menu: {
    marginTop: "1rem",
  },
  pageTitle: {
    margin: "1rem 0",
  },
  card: {
    backgroundColor: "#181717",
    color: "white",
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    marginTop: "1rem",
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
  timeRange: {
    color: "#04E553",
    textDecorationLine: "underline",
    textUnderlineOffset: "5px",
    lineHeight: "34px",
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
        {/* MOBILE VERSION - TEXT ALIGN RIGHT - PADDING */}
        <div
          className="col-6 col-sm-4 d-sm-none"
          style={{
            ...stylesheet.menu,
            textAlign: "right",
            paddingRight: "2.5rem",
          }}
        >
          <Button label={"TOP SONGS"} src={"/spotify/top-50"} />
        </div>
        {/* DESKTOP VERSION - TEXT ALIGN RIGHT */}
        <div
          className="col-6 col-sm-4 d-none d-sm-block"
          style={{ ...stylesheet.menu, textAlign: "right" }}
        >
          <Button label={"TOP SONGS"} src={"/spotify/top-50"} />
        </div>

        {/* MOBILE VERSION - TEXT ALIGN LEFT */}
        <div
          className="col-6 col-sm-4  d-sm-none"
          style={{
            ...stylesheet.menu,
            textAlign: "left",
          }}
        >
          <Button label={"RECENTLY PLAYED"} src={"/spotify/recently-played"} />
        </div>

        {/* DESKTOP VERSION - TEXT ALIGN CENTER */}
        <div
          className="col-6 col-sm-4 text-center d-none d-sm-block"
          style={stylesheet.menu}
        >
          <Button label={"RECENTLY PLAYED"} src={"/spotify/recently-played"} />
        </div>

        {/* MOBILE VERSION - TEXT ALIGN CENTER IN A NEW ROW */}
        <div className="col-12 col-sm-4 d-sm-none" style={stylesheet.menu}>
          <Profile user={props.user} />
        </div>

        {/* DESKTOP VERSION - TEXT ALIGN RIGHT IN SAME ROW */}
        <div
          className="col-6 col-sm-4 d-none d-sm-block"
          style={stylesheet.menu}
        >
          <Profile
            user={props.user}
            additionalStyle={{ flexDirection: "unset" }}
          />
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col">
            <h2 className="text-center" style={stylesheet.pageTitle}>
              {highlightedTimeRange && "Top Songs"}
              {!highlightedTimeRange && "Recently Played"}
            </h2>
          </div>
        </div>

        {highlightedTimeRange && (
          <div className="row">
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
                  6 MONTHS
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
                  4 WEEKS
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
            <div className="row" key={index}>
              <div className="col">
                <div className="card" style={stylesheet.card}>
                  <div className="row g-0">
                    <div className="col-1" style={stylesheet.cardBodyRanking}>
                      <div style={stylesheet.cardBodyHorizontalAlign}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="col-1">
                      <img
                        className="img-fluid"
                        src={track.image.url}
                        width={"100%"}
                        height={"auto"}
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body" style={stylesheet.cardBody}>
                        <div>
                          <h6
                            className="card-title"
                            style={stylesheet.cardTitle}
                          >
                            {track.name}
                          </h6>
                        </div>
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
