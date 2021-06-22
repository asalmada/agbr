var React = require("react");

const stylesheet = {
  profile: {
    color: "#04E553",
    fontFamily: "'Gotham Light', sans-serif",
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "14px",
  },
  horizontalAlign: {
    display: "flex",
  },
  profileImg: {
    width: "36px",
    border: "1px solid #04E553",
    borderRadius: "2rem!important",
  },
  profileName: {
    paddingLeft: "0.75rem",
    display: "flex",
    alignItems: "center",
  },
};

function Profile(props) {
  const shortDisplayName = props.user.displayName.split(" ")[0];

  return (
    <div style={{ ...stylesheet.profile, ...props.additionalStyle }}>
      <div style={stylesheet.horizontalAlign}>
        <div>
          <img
            className="img-fluid rounded"
            src={props.user.profileImgUrl}
            style={stylesheet.profileImg}
          />
        </div>
        <div style={stylesheet.profileName}>{`HI, ${shortDisplayName}!`}</div>
      </div>
    </div>
  );
}

module.exports = Profile;
