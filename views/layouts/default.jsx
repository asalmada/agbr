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
      paddingRight: ".4rem",
    },
  },
  footer: {
    color: "#797979",
  },
  footerLink: {
    color: "inherit",
    textDecoration: "none",
  },
};

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link href="/style/style.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <div
            className="row"
            style={{ ...stylesheet.footer, marginTop: "1rem" }}
          >
            <div className="col text-center">
              <a href="/" target="_blank" style={stylesheet.footerLink}>
                <i class="bi bi-link-45deg" style={{ margin: "0 .5rem" }}></i>
              </a>
              <a
                href="https://github.com/asalmada/agbr"
                target="_blank"
                style={stylesheet.footerLink}
              >
                <i class="bi bi-github" style={{ margin: "0 .5rem" }}></i>
              </a>
              <a
                href="https://twitter.com/arianagrandebr"
                target="_blank"
                style={stylesheet.footerLink}
              >
                <i class="bi bi-twitter" style={{ margin: "0 .5rem" }}></i>
              </a>
            </div>
          </div>
          <div className="row" style={stylesheet.footer}>
            <div className="col text-center">
              Developed by{" "}
              <a
                href="https://github.com/asalmada"
                target="_blank"
                style={stylesheet.footerLink}
              >
                André Almada
              </a>{" "}
              | Design by{" "}
              <a
                href="mailto:andrerodriguex@gmail.com"
                style={stylesheet.footerLink}
              >
                André Rodrigues
              </a>
            </div>
          </div>
          <div className="row" style={stylesheet.footer}>
            <div className="col text-center">
              Part of{" "}
              <a
                href="https://arianagrandebrasil.com"
                target="_blank"
                style={stylesheet.footerLink}
              >
                Ariana Grande Brasil
              </a>
            </div>
          </div>
          <div className="row" style={stylesheet.footer}>
            <div className="col text-center">
              <a
                href="/privacy-policy"
                target="_blank"
                style={stylesheet.footerLink}
              >
                About Us & Privacy Policy
              </a>{" "}
              |{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                style={stylesheet.footerLink}
              >
                Sobre Nós e Política de Privacidade
              </a>
            </div>
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
