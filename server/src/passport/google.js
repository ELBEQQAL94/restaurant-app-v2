const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const users = require("../../queries/users");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      const email = profile.emails[0].value;
      console.log({ email });
      const user = await users.findUserByEmail(email);
      const googleUser = {
        username: profile.displayName,
        password: "password",
        email,
        google_id: profile.id,
        image_url: profile.photos[0].value,
        phone: "+212675058801",
        active: true,
        role: 1,
      };
      console.log("google user: ", googleUser);
      return cb(new Error("WOrking on it..."));
      //   User.findOrCreate({ googleId: profile.id }, (err, user) => {
      //     return cb(err, user);
      //   });
    }
  )
);
