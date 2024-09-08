import { createAPI } from "./apis.config";

const shoesAPI = createAPI(import.meta.env.VITE_SHOES_BASE_URL);

const fetchShoesLists = async () => {
  try {
    const response = await shoesAPI.get("/");
    return response.data;
  } catch (error) {
    console.error("신발 목록 가져오기 도중 에러 발생:", error);
    throw new Error("신발 목록을 불러오는 중 에러 발생"); // 에러 발생
  }
};
export { fetchShoesLists };
