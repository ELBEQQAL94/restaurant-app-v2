const express = require("express");
const passport = require("passport");
require("../../passport/google");

const router = express.Router();
const { signUp, logIn, getAuth } = require("../../controller/auth");

const { validateLoginUser, validateSignUpUser } = require("./auth.middlewares");

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

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router;
