const express = require("express");
const passport = require("passport");
require("../../passport/google");

const router = express.Router();
const { signUp, logIn, getAuth } = require("../../controller/auth");

const { validateLoginUser, validateSignUpUser } = require("./auth.middlewares");
const { createTokenSendResponse } = require("../../helpers");

// any route in here is pre-pended with /auth
router.get("/", getAuth);

// POST /auth/signup
router.post("/signup", validateSignUpUser, signUp);

// POST /auth/signup
router.post("/login", validateLoginUser, logIn);

// Login using google strategie

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", async (err, user) => {
    if (err) {
      return next(err);
    }

    // if (!user) {
    //   res.redirect("/login");
    // }
    try {
      const token = await createTokenSendResponse(user);

      res.json({
        token,
      });
    } catch (error) {
      next(error);
    }
    // Create JWT

    // Establish session for auth user
    // req.logIn(user, function (err) {
    //   if (err) {
    //     return next(err);
    //   }
    //   return res.redirect("/users/" + user.username);
    // });
  })(req, res, next);
});

module.exports = router;
