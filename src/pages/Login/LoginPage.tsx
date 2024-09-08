import { login } from "@/apis/auth/auth.api";
import Input from "@/components/Commons/Input/Input";
import { HEADER_HEIGHT } from "@/constants/Layout";
import { useValidation } from "@/hooks/useValidation";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const { errors, validateForm } = useValidation();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const id = idRef.current?.value.trim() || "";
    const password = passwordRef.current?.value.trim() || "";

    if (validateForm(id, password)) {
      login({ id, password })
        .then(() => {
          alert("로그인 성공");
          navigate("/");
        })
        .catch((error) => {
          console.log("로그인 실패:", error);
        });
    }
  };

  const handleMoveSignUpPage = () => {
    navigate("/sign-up");
  };

  return (
    <section
      className={`flex flex-col justify-center items-center h-[calc(100vh_-_${HEADER_HEIGHT})]`}
    >
      <h2 className="text-2xl font-bold mb-12">로그인</h2>
      <form
        className="flex flex-col w-[310px] p-4 gap-6 sm:w-[450px] sm:gap-8"
        onSubmit={handleLogin}
      >
        <Input
          type="text"
          name="id"
          label="아이디"
          ref={idRef}
          placeholder="아이디를 입력하세요"
          errorMessage={errors.idError}
        />
        <Input
          type="password"
          name="password"
          label="패스워드"
          ref={passwordRef}
          placeholder="패스워드를 입력하세요"
          errorMessage={errors.passwordError}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:opacity-80"
        >
          로그인
        </button>
      </form>

      <h4 className="text-gray-500 text-center">
        아직 회원이 아니신가요? <br />
        <span
          className="underline hover:text-black cursor-pointer"
          onClick={handleMoveSignUpPage}
        >
          회원가입 하기
        </span>
      </h4>
    </section>
  );
}

export default LoginPage;
