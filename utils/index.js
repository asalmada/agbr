function getSpotifyAuthCallbackURL() {
  if (process.env.ENVIRONMENT === "local") {
    return "http://localhost:3000/spotify/auth/callback";
  }

  if (process.env.ENVIRONMENT === "dev") {
    return "https://agbr-rested-meerkat-sh.mybluemix.net/spotify/auth/callback";
  }

  return "https://my-ariana-stats.mybluemix.net/spotify/auth/callback";
}

module.exports = {
  getSpotifyAuthCallbackURL,
};
