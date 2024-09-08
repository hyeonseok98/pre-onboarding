import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="max-w-[1024px] w-full h-screen mx-auto">
      <Header />
      <main role="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
