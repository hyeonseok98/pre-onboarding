import axios from "axios";

const createAPI = (baseURL: string) => {
  return axios.create({
    baseURL: baseURL,
  });
};

export { createAPI };
