import { loginProps, signUpProps } from "@/types/Auth";
import axiosInstance from "./axiosInstance";

const ACCESS_TOKEN_EXPIRY_TIME = "15m";

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
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("acToken");
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
