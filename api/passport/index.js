import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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
      callbackURL: "/google/redirect",
      proxy: true,
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      console.log(req);
      console.log({ accessToken, refreshToken, profile });
      return done(null, profile);
    }
  )
);
