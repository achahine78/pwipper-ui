import axios from "axios";

const BASE_URL = "http://localhost:3000";

const privateAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "",
  },
});

function addBearerToken(token: string) {
  privateAxios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export { privateAxios, addBearerToken };
