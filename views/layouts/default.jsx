var React = require("react");

const stylesheet = {
  body: {
    backgroundColor: "#181717",
    color: "white",
    fontFamily: "'Gotham Light', sans-serif",
  },
  header: {
    height: "6.25rem",
    background: '#00e540 url("/images/arianabg.png") center no-repeat',
    fontFamily: "'Circular Spotify Tx T Black', sans-serif",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    icon: {
      padding: ".4rem",
    },
  },
  footer: {
    marginTop: "1rem",
  },
};

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link href="/style/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
        <title>My Ariana Stats - Powered by AGBR</title>
      </head>
      <body style={stylesheet.body}>
        <div style={stylesheet.header}>
          <div style={stylesheet.logo}>
            <i class="bi bi-bar-chart-fill" style={stylesheet.logo.icon}></i>
            <h1 style={{ margin: 0 }}>My Ariana Stats</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">{props.children}</div>
          </div>
          <div className="row" style={stylesheet.footer}>
            <div className="col text-center">
              Developed by André Almada | Design by André Rodrigues
            </div>
          </div>
          <div className="row">
            <div className="col text-center">Part of Ariana Grande Brasil</div>
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
