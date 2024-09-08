import { logout } from "@/apis/auth/auth.api";
import { HEADER_HEIGHT } from "@/constants/Layout";
import { useIsLoggedIn } from "@/hooks/useUser";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();
  // const { data: userData } = useUserInfos();

  const handleMoveHomePage = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleMoveMyPage = () => {
    navigate("/my-page");
  };

  return (
    <header
      className={`common-layout flex justify-between items-center w-full h-${HEADER_HEIGHT}`}
      role="banner"
    >
      <h2 className="cursor-pointer" onClick={handleMoveHomePage}>
        logo
      </h2>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>로그인</button>
      ) : (
        <div className="flex gap-4">
          <button onClick={handleMoveMyPage}>마이 페이지</button>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}
    </header>
  );
}

export default Header;
