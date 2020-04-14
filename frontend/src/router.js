import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Profile from "./views/Profile.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter(to, from, next) {
        if (store.getters.isLoggedIn) {
          next();
        } else {
          next("/");
        }
      }
    }
  ]
});
