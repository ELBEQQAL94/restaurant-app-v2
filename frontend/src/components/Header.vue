<template>
  <v-card>
    <v-app-bar color="#4CAF50" dark prominent>
      <v-container>
        <v-layout row>
          <v-flex md9>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <span>
              <router-link class="logo" to="/">FoOd DeLevry</router-link>
            </span>
          </v-flex>
          <v-flex md3>
            <v-layout row>
              <v-flex md6 v-if="!user">
                <a :href="getLoginURL">
                  <v-btn block small color="#00B0FF" dark>login with google</v-btn>
                </a>
              </v-flex>
              <!-- <v-flex md4>
                <v-btn
                  @click="overlay = !overlay"
                  block
                  small
                  color="primary"
                  dark
                  >signup</v-btn
                >
              </v-flex>-->
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer height="100vh" v-model="drawer" absolute temporary dark>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/about">About</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<style scoped>
.logo {
  font-size: 4vmin;
  color: rgb(80, 32, 24) !important;
  margin-left: 5px;
  white-space: nowrap;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  computed: {
    ...mapState(["user"]),
    getLoginURL() {
      if (window.location.hostname === "localhost") {
        return "http://localhost:4040/auth/google";
      } else {
        return "https://restaurant-webapp-server.herokuapp.com/auth/google";
      }
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
