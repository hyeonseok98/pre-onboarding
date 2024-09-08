import { getUserInfo } from "@/apis/auth/user.api";
import { userKeys } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

const useUserInfos = (isLoggedIn: boolean) => {
  return useQuery({
    queryKey: userKeys.user,
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
    enabled: isLoggedIn,
  });
};

const useIsLoggedIn = () => {
  const token = localStorage.getItem("acToken");
  return !!token;
};

export { useIsLoggedIn, useUserInfos };
