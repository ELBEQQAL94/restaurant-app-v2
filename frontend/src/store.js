import Vue from "vue";
import Vuex from "vuex";
import { registerReq, loginReq } from "@/api/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    error: false,
    loading: false,
    errorMessage: "",
    token: localStorage.getItem("token") || "",
    user: null,
    categories: [],
  },
  mutations: {
    // setCategories(state, categories) {
    //   state.categories = categories;
    // },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status = "success";
      state.token = payload.token;
      state.user = payload.user;
    },
    auth_error(state, payload) {
      state.status = "error";
      state.error = true;
      state.errorMessage = payload;
      state.loading = false;
    },
    loading_user(state) {
      state.loading = true;
    },
    clear_error(state) {
      state.error = false;
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  actions: {
    login({ commit }, user) {
      loginReq(user, commit);
    },
    register({ commit }, user) {
      registerReq(user, commit);
    },
    // isAdmin({ state }) {
    //   return state.user.role_id === 2;
    // },
    // async loadCategories({ commit }) {
    //   const categories = await getAllCategories();
    //   console.log(categories);
    //   commit("setCategories", categories);
    // }
  },
});
