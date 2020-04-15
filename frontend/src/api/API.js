import axios from "axios";
import { parseJwt } from "@/helpers";

let API_URL = "https://restaurant-webapp-server.herokuapp.com";

if (window.location.hostname === "localhost") {
  API_URL = "http://localhost:4040";
}

// export async function isAdmin() {
//   try {
//     const response = await axios.get(`${API_URL}/auth/isAdmin`);
//     return response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }

// request get all categories
// export async function getAllCategories() {
//   return axios
//     .get(`${API_URL}/api/v1/categories`)
//     .then((response) => {
//       return response.data.categories;
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });
// }

export function registerReq(user, commit) {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    axios({ url: `${API_URL}/auth/signup`, data: user, method: "POST" })
      .then((resp) => {
        const payload = resp.data;
        localStorage.setItem("token", payload.token);
        axios.defaults.headers.common["Authorization"] = payload.token;
        commit("loading_user");
        commit("clear_error");
        commit("auth_success", payload);
        resolve(resp);
      })
      .catch((err) => {
        const error = new Error(
          JSON.parse(JSON.stringify(err.response.data.message))
        );
        commit("auth_error", error);
        localStorage.removeItem("token");
        reject(err);
      });
  });
}

export function loginReq(user, commit) {
  console.log("req login is running...");
  console.log(user);
  return new Promise((resolve, reject) => {
    commit("auth_request");
    axios({ url: `${API_URL}/auth/login`, data: user, method: "POST" })
      .then((resp) => {
        const token = resp.data;
        const user = parseJwt(resp.data);
        const payload = {
          token,
          user,
        };
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("loading_user");
        commit("clear_error");
        commit("auth_success", payload);
        resolve(resp);
      })
      .catch((err) => {
        const error = new Error(
          JSON.parse(JSON.stringify(err.response.data.message))
        );
        commit("auth_error", error);
        localStorage.removeItem("token");
        reject(err);
      });
  });
}
