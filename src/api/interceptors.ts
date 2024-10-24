import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { logout } from "../common/util";
import { useUserStore } from "../stores/user";
import { AuthService } from "./auth";
import HttpClient from "./axios";

/** 요청 인터셉터 */
export const requestInterceptor = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  setHeader(config);
  return config;
};

/** 응답 인터셉터 */
export const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response.data ? response.data : response;
};

let isRefreshing = false; // 엑세스 토큰 재발급 상태 여부
let originReqs: any = []; // 원본 요청 스택 배열 (401 응답받은 req만)

/**
 * 에러 응답 핸들러
 * @param error 에러
 */
export const onResponseError = async (error: AxiosError) => {
  // 인증 에러 발생시
  if (
    error.response &&
    error.response.status === 401 &&
    error.config?.url !== "/auth"
  ) {
    if (error.config?.url === "/auth/refresh") {
      alert(error.config.data.message);
      logout();
    }
    return await getRefreshToken(error);
  }
  throw error.response?.data;
};

/** 헤더에 액세스 토큰 설정 */
const setHeader = (config: InternalAxiosRequestConfig) => {
  const user = useUserStore.getState().user;
  if (user && user.accessToken) {
    config.headers.Authorization = "bearer " + user.accessToken;
  }
};

/** 리프레시 토큰 재발급 중 */
const getRefreshToken = async (error: AxiosError) => {
  if (!error.response) {
    return Promise.reject(error);
  }

  try {
    const { response: errRes } = error;
    const retryOriginRequests = new Promise((resolve, reject) => {
      addOriginReq(() => {
        try {
          setHeader(errRes.config);
          resolve(HttpClient(errRes.config));
        } catch (err) {
          reject(err);
        }
      });
    });

    // 액세스 토큰 재발급
    if (!isRefreshing) {
      isRefreshing = true;

      const user = useUserStore.getState().user;

      if (!user || !user.accessToken || !user.refreshToken) {
        logout();
        location.href = "/";
      }

      const newAccessToken = await AuthService.refresh({
        accessToken: user!.accessToken,
        refreshToken: user!.refreshToken,
      });

      if (!newAccessToken) {
        logout();
      } else {
        user!.accessToken = newAccessToken;
        useUserStore.setState({ user });
        onAccessTokenRefreshed();
        isRefreshing = false;
      }
    }

    return retryOriginRequests;
  } catch (error) {
    return Promise.reject(error);
  }
};

const addOriginReq = (callback: any) => {
  originReqs.push(callback);
};

/** 액세스 토큰 재발급 이후 원본 요청 목록 실행 */
const onAccessTokenRefreshed = () => {
  originReqs.forEach((callback: any) => callback());
  originReqs = [];
};
