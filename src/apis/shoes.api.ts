import { createAPI } from "./apis.config";

const shoesAPI = createAPI(import.meta.env.VITE_SHOES_BASE_URL);

const fetchShoesLists = async () => {
  const response = await shoesAPI.get("/");
  return response.data;
};

export { fetchShoesLists };
