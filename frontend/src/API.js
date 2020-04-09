import axios from "axios";

let API_URL = "https://restaurant-webapp-server.herokuapp.com";

if (window.location.hostname === "localhost") {
  API_URL = "http://localhost:4040";
}

export async function isAdmin() {
  const response = await axios.get(`${API_URL}/auth/isAdmin`);
  return response.json();
}
