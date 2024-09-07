import axiosInstance from "./axiosInstance";

const getUserInfo = async () => {
  const response = await axiosInstance.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("acToken")}`,
    },
  });

  return response.data;
};

export { getUserInfo };
