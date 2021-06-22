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
};

function Home(props) {
  return (
    <DefaultLayout>
      <div className="text-center" style={stylesheet.home}>
        <h2>My Ariana Stats</h2>
        <p>
          Login with your Spotify account to find out your most played Ariana
          Grande songs in the last four weeks, 6 months or all time!
        </p>
        <p>
          Faça login com a sua conta do Spotify para descobrir suas músicas mais
          tocadas da Ariana Grande nas últimas quatro semanas, seis meses ou de
          todos os tempos!
        </p>
        <Button label={"LOGIN WITH SPOTIFY"} src={"/spotify/auth"} />
      </div>
    </DefaultLayout>
  );
}

module.exports = Home;
