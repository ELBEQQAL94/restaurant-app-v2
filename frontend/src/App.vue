<template>
  <div id="#app">
    <app-nav />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    AppNav
  },
  data() {
    return {
      tab: null,
      items: ["home", "about"]
    };
  },
  mounted() {
    this.login(localStorage.token);
    //this.loadCategories();
  },
  methods: mapActions(["login"])
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: black;
  color: wheat;
}

a {
  text-decoration: none;
  color: white;
}
/* error color for login and signup form */
.theme--light .v-messages {
  color: red !important;
}
</style>
