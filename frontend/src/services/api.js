import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-rbac-app.onrender.com/api",
});

// Attach token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
