import { useAuthStore } from "@/store/auth.store";
import { loginProps, signUpProps } from "@/types/Auth";
import * as Sentry from "@sentry/react";
import axiosInstance from "./axiosInstance";

const ACCESS_TOKEN_EXPIRY_TIME = "30m";

const login = async ({ id, password }: loginProps) => {
  try {
    const response = await axiosInstance.post(
      `/login?expiresIn=${ACCESS_TOKEN_EXPIRY_TIME}`,
      {
        id,
        password,
      }
    );

    if (response.data.success) {
      localStorage.setItem("acToken", response.data.accessToken);
      useAuthStore.getState().setLoggedIn(true);
    }

    return response.data;
  } catch (error) {
    Sentry.captureException(error);
    console.error("로그인 에러:", error);
    throw new Error("로그인 중 에러 발생");
  }
};

const logout = () => {
  localStorage.removeItem("acToken");
  useAuthStore.getState().setLoggedIn(false);
  alert("로그아웃 되었습니다.");
};

const signUp = async ({ id, password, nickname }: signUpProps) => {
  try {
    const response = await axiosInstance.post("/register", {
      id,
      password,
      nickname,
    });

    return response.data;
  } catch (error) {
    Sentry.captureException(error);
    console.error("회원가입 에러:", error);
    throw new Error("회원가입 중 에러 발생");
  }
};

export { login, logout, signUp };
