var React = require("react");
var DefaultLayout = require("./layouts/default");
var Button = require("./layouts/button");

const stylesheet = {
  home: {
    border: "1px solid #04E553",
    margin: "2rem 0",
    padding: "1rem",
    borderRadius: "1.25rem",
  },
  header: {
    fontFamily: "'Circular Spotify Tx T Black', sans-serif",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    color: "#00e540",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginBottom: "1rem",
    icon: {
      padding: ".4rem",
    },
  },
  description: {
    fontFamily: "'Gotham Book', sans-serif",
  },
};

function Home(props) {
  return (
    <DefaultLayout>
      <div className="text-center" style={stylesheet.home}>
        <div style={stylesheet.header}>
          <div style={stylesheet.logo}>
            <i class="bi bi-bar-chart-fill" style={stylesheet.logo.icon}></i>
            <h2 style={{ margin: 0 }}>My Ariana Stats</h2>
          </div>
        </div>
        <p style={stylesheet.description}>
          Login with your Spotify account to find out your most played Ariana
          Grande songs under your Top 50 tracks in the last four weeks, 6 months
          or of all time!
        </p>
        <p style={stylesheet.description}>
          Faça login com a sua conta do Spotify para descobrir suas músicas mais
          tocadas da Ariana Grande dentro de seu top 50 nas últimas quatro
          semanas, seis meses ou de todos os tempos!
        </p>
        <Button
          label={"LOGIN WITH SPOTIFY"}
          src={"/spotify/auth"}
          type={"Homepage"}
        />
      </div>
    </DefaultLayout>
  );
}

module.exports = Home;
