import { Router, Response, Request } from "express";
import passport from "passport";

const router = Router();

// * Module Globals
const masterRedirect = (_: Request, res: Response) =>
  res.redirect("http://localhost:3000");

// - Google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/google/redirect", passport.authenticate("google"), masterRedirect);

// - Facebook
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook"),
  masterRedirect
);

// - Github
router.get("/github", passport.authenticate("github", { scope: ["email"] }));
router.get("/github/redirect", passport.authenticate("github"), masterRedirect);

// - Twitter
router.get("/twitter", passport.authenticate("twitter", { scope: ["email"] }));
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter"),
  masterRedirect
);

// - Steam
router.get("/steam", passport.authenticate("steam"));
router.get("/steam/redirect", passport.authenticate("steam"), masterRedirect);

// - Spotify
router.get("/spotify", passport.authenticate("spotify"));
router.get(
  "/spotify/redirect",
  passport.authenticate("spotify"),
  masterRedirect
);

module.exports = router;
