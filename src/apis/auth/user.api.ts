import { UserProfileResponse } from "@/types/User";
import axiosInstance from "./axiosInstance";

const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("acToken")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("getUserInfo Error 발생:", error);
    throw new Error("유저 정보를 불러오는 중 에러 발생");
  }
};

const updateProfile = async (
  formData: FormData
): Promise<UserProfileResponse> => {
  try {
    const response = await axiosInstance.patch<UserProfileResponse>(
      "/profile",
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("acToken")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      `프로필 업데이트 중 문제가 발생했습니다. 다시 시도해주세요: ${error}`
    );
  }
};

export { getUserInfo, updateProfile };
