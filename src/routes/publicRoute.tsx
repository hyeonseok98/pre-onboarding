import { useAuthStore } from "@/store/auth.store";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    return null;
  }

  return children;
};

export default PublicRoute;
