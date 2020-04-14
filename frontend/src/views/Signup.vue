<template>
  <section class="form-section">
    <h1>Signup</h1>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy" class="signup-form">
      <v-text-field
        background-color="#FFD54F"
        v-model="username"
        :rules="usernameRules"
        label="Username"
        required
      ></v-text-field>
      <v-text-field
        background-color="#FFD54F"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        background-color="#FFD54F"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>
      <v-text-field
        background-color="#FFD54F"
        v-model="ConfirmPassword"
        :rules="confirmPasswordRules"
        label="Re-Password"
        required
      ></v-text-field>
      <v-btn
        color="#FFD54F"
        :disabled="!valid"
        class="mr-4"
        @click="validate"
        background-color="#FFD54F"
      >Login</v-btn>
    </v-form>
  </section>
</template>

<style scoped>
.form-section {
  margin-top: 2em;
  padding: 7vmin;
  width: 98vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form-section h1 {
  font-size: 1.8em;
  margin: 1em 0;
}

.signup-form {
  background: #ffffff;
  width: 70%;
  padding: 7vmin;
}
</style>

<script>
import { loginReq } from "@/api/API";

export default {
  name: "Signup",

  data: vm => ({
    valid: true,
    username: "",
    usernameRules: [v => !!v || "Username is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => /^[a-zA-Z0-9]{3,30}$/.test(v) || "Password must be valid"
    ],
    ConfirmPassword: "",
    confirmPasswordRules: [
      ConfirmPassword =>
        ConfirmPassword === vm.password || "Password must match."
    ],
    lazy: false
  }),
  methods: {
    validate() {
      const validate = this.$refs.form.validate();

      if (validate) {
        const user = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        loginReq(user)
          .then(token => {
            console.log("TOKEN", token);
          })
          .catch(err => console.log(err));
        console.log("user: ", user);
        console.log("Logging in...");
      } else {
        console.log("Something wrong!");
      }
    }
  }
};
</script>