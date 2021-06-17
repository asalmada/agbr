var React = require("react");
var DefaultLayout = require("./layouts/default");

function App(props) {
  return (
    <DefaultLayout>
      <div>
        {props.tracks.map((track) => (
          <div
            key={track.rankingPosition}
            style={{ border: "1px solid black" }}
          >
            <p>{track.name}</p>
            <p>{track.album}</p>
            <img src={track.image.url} height={"30px"} witdh={"30px"} />
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

module.exports = App;
