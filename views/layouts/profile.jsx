var React = require("react");

const stylesheet = {
  profile: {
    color: "#04E553",
    fontFamily: "'Gotham Light', sans-serif",
    textTransform: "uppercase",
  },
  profileImg: {
    width: "36px",
    border: "1px solid #04E553",
    borderRadius: "2rem!important",
  },
  profileName: {
    display: "flex",
    alignItems: "center",
  },
};

function Profile(props) {
  const shortDisplayName = props.user.displayName.split(" ")[0];

  return (
    <div style={stylesheet.profile}>
      <div className="row">
        <div className="col-2">
          <img
            className="img-fluid rounded"
            src={props.user.profileImgUrl}
            style={stylesheet.profileImg}
          />
        </div>
        <div
          className="col-10 g-0"
          style={stylesheet.profileName}
        >{`HI, ${shortDisplayName}!`}</div>
      </div>
    </div>
  );
}

module.exports = Profile;
