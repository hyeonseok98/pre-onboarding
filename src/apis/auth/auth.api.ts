import { useAuthStore } from "@/store/auth.store";
import { loginProps, signUpProps } from "@/types/Auth";
import axiosInstance from "./axiosInstance";

const ACCESS_TOKEN_EXPIRY_TIME = "30m";

const login = async ({ id, password }: loginProps) => {
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
};

const logout = () => {
  localStorage.removeItem("acToken");
  useAuthStore.getState().setLoggedIn(false);
  alert("로그아웃 되었습니다.");
};

const signUp = async ({ id, password, nickname }: signUpProps) => {
  const response = await axiosInstance.post("/register", {
    id,
    password,
    nickname,
  });

  return response.data;
};

export { login, logout, signUp };
