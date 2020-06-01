import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email", "openid"] }),
  (_, res) => res.status(200).json({ test: "test" })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) =>
  res.status(200).json({ test: req.user })
);

// export default router;
module.exports = router;
