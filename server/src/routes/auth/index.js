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

router.get("/isAdmin", async (req, res) => {
  if (req.user) {
    if (req.user.role_id === 2) {
      return res.json({ isAdmin: true });
    }
  } else {
    res.json({ isAdmin: false });
  }
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", async (err, user) => {
    if (err) {
      return next(err);
    }
    try {
      const token = await createTokenSendResponse(user);

      res.redirect(`${process.env.RIDERECT_CLIENT_URL}/${token}`);
    } catch (error) {
      res.redirect(`${process.env.RIDERECT_CLIENT_URL_ERROR}/`);
    }
  })(req, res, next);
});

module.exports = router;
