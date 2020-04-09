<template>
  <div>
    <h1>Logging in...</h1>
  </div>
</template>

<style scoped>
div {
  color: #ffffff !important;
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  mounted() {
    const { token } = this.$route.params;
    if (token) {
      this.login(token);
      this.$router.push("/forum");
    } else {
      this.$router.push("/login");
    }
  },
  methods: mapActions(["login"])
};
</script>