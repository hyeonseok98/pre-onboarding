import { getUserInfo } from "@/apis/auth/user.api";
import { userKeys } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: userKeys.user,
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
};
