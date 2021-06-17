var React = require("react");

const stylesheet = {
  body: {
    backgroundColor: "black",
    color: "white",
  },
};

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>My Ariana Stats - Powered by AGBR</title>
      </head>
      <body style={stylesheet.body}>
        <div>
          <h1>My Ariana Stats</h1>
        </div>
        <div className="container">
          <div class="row">
            <div class="col">{props.children}</div>
          </div>
        </div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
