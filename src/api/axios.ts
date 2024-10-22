import axios from "axios";
import { useUserStore } from "../stores/user";
import { logout } from "../common/util";

const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

HttpClient.interceptors.request.use((request) => {
  const user = useUserStore.getState().user;
  if (user && user.accessToken) {
    request.headers.Authorization = "bearer " + user.accessToken;
  }
  return request;
});

HttpClient.interceptors.response.use(
  (config) => config.data,
  (error) => {
    if (error.config.url !== "/auth" && error.status === 401) {
      logout();
    }
    throw error?.response?.data;
  }
);

export const healthCheck = () => HttpClient.get("/health");
export default HttpClient;
