<template>
  <section class="form-section">
    <h1>Signup</h1>
    <v-alert v-if="error" color="#D50000" class="error-alert" type="error">{{errorMessage}}</v-alert>

    <v-form ref="form" v-model="valid" :lazy-validation="lazy" class="signup-form">
      <div class="text-center progress" v-if="loading">
        <v-progress-circular :size="50" color="#D50000" indeterminate></v-progress-circular>
      </div>
      <div v-if="!loading">
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
          type="password"
          label="Password"
          required
        ></v-text-field>
        <v-text-field
          background-color="#FFD54F"
          v-model="ConfirmPassword"
          :rules="confirmPasswordRules"
          type="password"
          label="Re-Password"
          required
        ></v-text-field>
        <v-btn
          color="#FFD54F"
          :disabled="!valid"
          class="mr-4"
          @click="validate"
          background-color="#FFD54F"
        >Signup</v-btn>
      </div>
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

.error-alert {
  width: 70%;
}

.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>

<script>
import { mapState, mapActions } from "vuex";

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
  computed: mapState(["error", "errorMessage", "loading"]),
  methods: {
    ...mapActions(["register"]),
    validate() {
      const validate = this.$refs.form.validate();

      if (validate) {
        const user = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        this.register(user).then(() => this.$router.push("/"));
      }
    }
  }
};
</script>