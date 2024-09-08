import defaultAvatarImg from "@/assets/avatar-gray.svg";
import Input from "@/components/Commons/Input/Input";
import { useUpdateProfile, useUserInfos } from "@/hooks/useUser";
import { useEffect, useRef } from "react";

function MyPage() {
  // const navigate = useNavigate();
  const { data: userInfos } = useUserInfos();
  const { mutate, isPending } = useUpdateProfile();

  const nicknameRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nicknameRef.current && userInfos?.nickname) {
      nicknameRef.current.value = userInfos.nickname;
    }

    if (avatarRef.current && userInfos?.avatarImg) {
      avatarRef.current.value = userInfos.avatarImg;
    }
  }, [userInfos]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();

    const nickname = nicknameRef.current?.value || "";
    const avatar = avatarRef.current?.files?.[0] || null;

    const formData = new FormData();
    formData.append("nickname", nickname);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    mutate(formData);
  };

  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh_-_52px)]">
      <h2 className="text-2xl font-bold mb-6">My Page</h2>
      <img
        src={userInfos?.avatar || defaultAvatarImg}
        alt="avatar"
        className="w-24 h-24 mb-4 rounded-full border border-gray-200 object-cover"
      />

      <form
        className="flex flex-col w-[310px] p-4 gap-6 sm:w-[450px] sm:gap-8"
        onSubmit={handleUpdateProfile}
      >
        <Input
          type="text"
          name="nickname"
          label="닉네임"
          ref={nicknameRef}
          placeholder="닉네임을 입력하세요"
        />
        <Input
          type="file"
          name="nickname"
          label="프로필 이미지"
          ref={avatarRef}
        />

        <button
          type="submit"
          className="w-full py-2 px-4 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:opacity-80"
          disabled={isPending}
        >
          프로필 변경
        </button>
      </form>
    </section>
  );
}

export default MyPage;
