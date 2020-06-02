import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const SteamStrategy = require("passport-steam").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});
passport.deserializeUser((id, done) => {
  done(null, id);
});

// - Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/google/redirect/",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Google");
      return done(null, profile);
    }
  )
);

// - Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/facebook/redirect/",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Facebook");
      console.log(profile);
      return done(null, profile);
    }
  )
);

// - GitHub
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_APP_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
      callbackURL: "/github/redirect/",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("GitHub");
      console.log(profile);
      return done(null, profile);
    }
  )
);

// - Twitter
passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "/twitter/redirect/",
    },
    (accessToken, tokenSecret, profile, done) => {
      console.log("Twitter");
      console.log(profile);
      return done(null, profile);
    }
  )
);

// - Steam
passport.use(
  new SteamStrategy(
    {
      returnURL: "/steam/redirect/",
      realm: "http://localhost:3000",
      apiKey: process.env.STEAM_KEY,
    },
    (identifier, profile, done) => {
      console.log("Steam");
      console.log(profile);
      return done(null, profile);
    }
  )
);

// - Spotify
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: "/spotify/redirect/",
    },
    (accessToken, refreshToken, expires_in, profile, done) => {
      console.log("Spotify");
      console.log(profile);
      return done(null, profile);
    }
  )
);
