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
  buttonHome: {
    border: "1px solid #04E553",
    backgroundColor: "#04E553",
    color: "white",
    fontFamily: "'Gotham Book', sans-serif",
    borderRadius: "1rem",
    fontSize: "12px",
  }
};

function Button(props) {
  if (!props.type) {
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

  {/* HOME BUTTON STYLE */}
  return (
    <a
      className="btn btn-outline-success"
      href={props.src}
      style={stylesheet.buttonHome}
    >
      {props.label}
    </a>
  )
}

module.exports = Button;
