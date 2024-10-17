import axios from "axios";

const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

HttpClient.interceptors.response.use(
  (config) => config,
  (error) => {
    throw error;
  }
);

export const healthCheck = () => HttpClient.get("/health");
export default HttpClient;
