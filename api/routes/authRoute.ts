import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/google",
  (_1, _2, next) => {
    next();
  },
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/fail",
    session: false,
  }),
  (_, res) => {
    console.log("second fired");
    res.redirect("http://localhost:3000/");
  }
);

// export default router;
module.exports = router;
