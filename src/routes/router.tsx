import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import HomePage from "../pages/Home/HomePage";
import MyPage from "../pages/My/MyPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/my-page",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
