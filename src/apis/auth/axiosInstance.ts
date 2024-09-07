import { createAPI } from "../apis.config";

const axiosInstance = createAPI(import.meta.env.VITE_AUTH_BASE_URL);

axiosInstance.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem("acToken");

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axiosConfig;
});

export default axiosInstance;
