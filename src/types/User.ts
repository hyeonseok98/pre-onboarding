export interface UserProfileResponse {
  avatar: string;
  nickname: string;
  message: string;
  success: boolean;
}

export interface UpdateProfileType {
  mutate: (formData: FormData) => void;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
}
