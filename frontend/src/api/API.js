import axios from "axios";

let API_URL = "https://restaurant-webapp-server.herokuapp.com";

if (window.location.hostname === "localhost") {
  API_URL = "http://localhost:4040";
}

export async function isAdmin() {
  try {
    const response = await axios.get(`${API_URL}/auth/isAdmin`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

// request get all categories
export async function getAllCategories() {
  // try {
  //   const response = await axios.get(`${API_URL}/api/v1/categories`);
  //   return response.data;
  // } catch (error) {
  //   console.error(error);
  // }

  return axios
    .get(`${API_URL}/api/v1/categories`)
    .then(response => {
      return response.data.categories;
    })
    .catch(error => {
      console.log("Error: ", error);
    });
}

export function loginReq(user) {
  return axios
    .post(`${API_URL}/auth/login`, user)
    .then(res => {
      localStorage.token = res.data.token;
    })
    .catch(err => {
      console.log(JSON.parse(JSON.stringify(err.response.data.message)));
    });
}
