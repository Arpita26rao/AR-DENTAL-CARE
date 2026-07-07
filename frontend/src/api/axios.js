import axios from "axios";

const API = axios.create({
  baseURL: "https://ar-dental-care-backend.onrender.com/api",
});

export default API;