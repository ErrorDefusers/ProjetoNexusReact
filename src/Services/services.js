// src/services/api.js
import axios from "axios";

const apiExterna = "https://apivenuework-b9hbangtb2bcapd3.brazilsouth-01.azurewebsites.net/api";

const apiInterna = "https://localhost:7079/api";

// Cria uma instância do Axios
const api = axios.create({
  baseURL: apiInterna
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
