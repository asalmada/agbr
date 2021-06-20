var express = require("express");
const axios = require("axios");
var passport = require("passport");
var passportSpotify = require("passport-spotify");

const utils = require("../utils");

var SpotifyStrategy = passportSpotify.Strategy;
var router = express.Router();

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the SpotifyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, expires_in
//   and spotify profile), and invoke a callback with a user object.
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: utils.getSpotifyAuthCallbackURL(),
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      profile.expires_in = expires_in;
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed. Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/spotify/auth");
}

// GET /auth/
//   Use passport.authenticate() as route middleware to authenticate the
//   request. The first step in spotify authentication will involve redirecting
//   the user to spotify.com. After authorization, spotify will redirect the user
//   back to this application at /auth/spotify/callback
router.get(
  "/auth",
  passport.authenticate("spotify", {
    scope: ["user-top-read", "user-read-recently-played", "user-read-private"],
    showDialog: true,
  })
);

//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   login page. Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  "/auth/callback",
  passport.authenticate("spotify", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/spotify/top-50");
  }
);

router.get("/top-50", ensureAuthenticated, function (req, res) {
  axios({
    method: "get",
    url: "https://api.spotify.com/v1/me/top/tracks",
    headers: {
      Authorization: "Bearer " + req.session.passport.user.accessToken,
    },
    params: {
      time_range: req.query.time_range ? req.query.time_range : "long_term",
      limit: "50",
    },
  })
    .then(function (response) {
      let tracks = response.data.items;

      // Remove non Ariana Grande tracks
      const ariana_tracks = tracks.filter((track) => {
        let is_ariana = false;
        track.artists.forEach((artist) => {
          if (artist.name === "Ariana Grande") {
            is_ariana = true;
          }
        });
        return is_ariana;
      });

      // Filter only the desired data from Ariana's tracks
      const filtered_tracks_data = ariana_tracks.map((track) => ({
        name: track.name,
        url: track.external_urls["spotify"],
        album: track.album.name,
        image: track.album.images[0],
      }));

      const filtered_user_data = {
        displayName: req.session.passport.user.displayName,
        profileUrl: req.session.passport.user.profileUrl,
        profileImgUrl: req.session.passport.user.photos[0].value,
      };

      res.render("app", {
        tracks: filtered_tracks_data,
        user: filtered_user_data,
        selectedTimeRange: req.query.time_range,
        selectedPath: req.path,
      });
    })
    .catch(function (error) {
      res.render(error);
    });
});

router.get("/recently-played", ensureAuthenticated, function (req, res) {
  axios({
    method: "get",
    url: "https://api.spotify.com/v1/me/player/recently-played",
    headers: {
      Authorization: "Bearer " + req.session.passport.user.accessToken,
    },
    params: {
      limit: "50",
    },
  })
    .then(function (response) {
      let tracks = response.data.items.map((item) => item.track); // remove item.context

      // Remove non Ariana Grande tracks
      const ariana_tracks = tracks.filter((track) => {
        let is_ariana = false;
        track.artists.forEach((artist) => {
          if (artist.name === "Ariana Grande") {
            is_ariana = true;
          }
        });
        return is_ariana;
      });

      // Filter only the desired data from Ariana's tracks
      const filtered_tracks_data = ariana_tracks.map((track) => ({
        name: track.name,
        url: track.external_urls["spotify"],
        album: track.album.name,
        image: track.album.images[0],
      }));

      const filtered_user_data = {
        displayName: req.session.passport.user.displayName,
        profileUrl: req.session.passport.user.profileUrl,
        profileImgUrl: req.session.passport.user.photos[0].value,
      };

      res.render("app", {
        tracks: filtered_tracks_data,
        user: filtered_user_data,
        selectedTimeRange: req.query.time_range,
        selectedPath: req.path,
      });
    })
    .catch(function (error) {
      res.render(error);
    });
});

module.exports = router;
