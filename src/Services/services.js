// src/services/api.js
import axios from "axios";

// Cria uma instância do Axios
const api = axios.create({
  baseURL: "https://localhost:7079/api"
});

// // Interceptor para adicionar o token JWT em cada requisição
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // ou onde você armazenou o token
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
