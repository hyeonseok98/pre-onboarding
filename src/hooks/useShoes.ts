import { useQuery } from "@tanstack/react-query";
import { fetchShoesLists } from "../apis/shoes.api";
import { shoesKeys } from "../constants/queryKeys";
import { Shoes } from "../types/Shoes";

const useShoesList = () => {
  return useQuery<Shoes[]>({
    queryKey: shoesKeys.all,
    queryFn: fetchShoesLists,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};

export { useShoesList };
