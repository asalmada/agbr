var React = require("react");

const stylesheet = {
  button: {
    border: "1px solid #04E553",
    backgroundColor: "#181717",
    color: "#04E553",
    fontFamily: "'Gotham Light', sans-serif",
    borderRadius: "1rem",
    fontSize: "12px",
  },
};

function Button(props) {
  return (
    <a
      className="btn btn-outline-success"
      href={props.src}
      style={stylesheet.button}
    >
      {props.label}
    </a>
  );
}

module.exports = Button;
