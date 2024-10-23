import axios from "axios";
import {
  onResponseError,
  requestInterceptor,
  responseInterceptor,
} from "./interceptors";

const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const healthCheck = () => HttpClient.get("/health");

HttpClient.interceptors.request.use(requestInterceptor);
HttpClient.interceptors.response.use(responseInterceptor, onResponseError);
export default HttpClient;
