const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const users = require("../../queries/users");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      const email = profile.emails[0].value;
      const googleUser = {
        username: profile.displayName,
        password: "password",
        email,
        google_id: profile.id,
        image_url: profile.photos[0].value,
        phone: "+212675058801",
        role_id: 1,
      };
      try {
        let user = await users.findUserByEmail(email);
        if (user) {
          // update user
          //googleUser.role_id = user.role_id;
          user = await users.update(user.id, googleUser);
        } else {
          // insert user
          user = await users.insert(googleUser);
        }
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);
