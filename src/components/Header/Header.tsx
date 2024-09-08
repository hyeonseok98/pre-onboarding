import { logout } from "@/apis/auth/auth.api";
import { HEADER_HEIGHT } from "@/constants/Layout";
import { useIsLoggedIn } from "@/hooks/useUser";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();
  // const { data: userData } = useUserInfos(isLoggedIn);

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
        <button onClick={handleLogout}>로그아웃</button>
      )}
    </header>
  );
}

export default Header;
