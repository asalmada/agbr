var React = require("react");
var DefaultLayout = require("./layouts/default");

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
  title: {
    fontFamily: "'Gotham Book', sans-serif",
    fontWeight: "bold",
  },
  description: {
    fontFamily: "'Gotham Book', sans-serif",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
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
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p style={stylesheet.title}>PRIVACY POLICY</p>
            <p style={stylesheet.description}>
              My Ariana Stats only intent is to reproduce the data provided by
              Spotify. Your personal information and data from your Spotify
              account will NOT be stored or used in the future by the organizers
              of this website.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p style={stylesheet.title}>POLÍTICA DE PRIVACIDADE</p>
            <p style={stylesheet.description}>
              O My Ariana Stats destina-se apenas a reproduzir as informações
              disponibilizadas pelo Spotify para fins de informação e
              entretenimento. Suas informações pessoais e dados de sua conta no
              Spotify NÃO serão armazenadas ou utilizadas futuramente pelos
              organizadores deste site.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p style={stylesheet.title}>ABOUT US</p>
            <p style={stylesheet.description}>
              My Ariana Stats is a website developed by Ariana Grande Brasil
              with the goal of showing fans their most played Ariana Grande
              songs on Spotify.
            </p>
            <p>
              We fully respect our users' privacy. For more information, take a
              look at our privacy policy or contact us at{" "}
              <a
                href="mailto:contato@arianagrandebrasil.com"
                style={stylesheet.link}
              >
                contato@arianagrandebrasil.com
              </a>
              .
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p style={stylesheet.title}>SOBRE NÓS</p>
            <p style={stylesheet.description}>
              My Ariana Stats é um site desenvolvido pelo fansite Ariana Grande
              Brasil com o objetivo de mostrar aos fãs suas músicas mais tocadas
              de Ariana Grande no Spotify.
            </p>
            <p>
              Respeitamos completamente a privacidade de nossos usuários. Para
              saber mais, consulte nossa política de privacidade ou entre em
              contato por{" "}
              <a
                href="mailto:contato@arianagrandebrasil.com"
                style={stylesheet.link}
              >
                contato@arianagrandebrasil.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

module.exports = Home;
