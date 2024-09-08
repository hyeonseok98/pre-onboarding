import { getUserInfo, updateProfile } from "@/apis/auth/user.api";
import { userKeys } from "@/constants/queryKeys";
import { UpdateProfileType, UserProfileResponse } from "@/types/User";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useUserInfos = () => {
  const isLoggedIn = useIsLoggedIn();

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

const useUpdateProfile = (): UpdateProfileType => {
  const queryClient = useQueryClient();
  const { refetch } = useUserInfos();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      const profileData = data as UserProfileResponse;
      console.log("프로필 업데이트 성공", profileData);

      queryClient.invalidateQueries({ queryKey: userKeys.userinfos });
      refetch();

      alert("프로필이 성공적으로 업데이트되었습니다.");
    },
    onError: (error: AxiosError) => {
      console.error("프로필 업데이트 오류", error.response?.data);
      alert(`프로필 업데이트 중 문제가 발생했습니다: ${error.message}`);
    },
  });

  return {
    mutate: (formData: FormData) => mutate(formData),
    isPending,
    isError,
    error: error ? (error as AxiosError) : null,
  };
};

export { useIsLoggedIn, useUpdateProfile, useUserInfos };
