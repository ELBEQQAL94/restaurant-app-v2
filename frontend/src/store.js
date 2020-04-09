import Vue from "vue";
import Vuex from "vuex";
import { parseJwt } from "./helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
  },
  actions: {
    login({ commit }, token) {
      if (token) {
        commit("setToken", token);
        const user = parseJwt(token);
        commit("setUser", user);
      } else {
        commit("setToken", "");
        commit("setUser", null);
      }
    },
    isAdmin({ state }) {
      return state.user.role_id === 2;
    },
  },
});
