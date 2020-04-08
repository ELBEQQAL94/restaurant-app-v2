<template>
  <div id="#app">
    <Header />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",

  components: {
    Header,
  },

  data() {
    return {
      tab: null,
      items: ["home", "about"],
    };
  },
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
}
</style>
