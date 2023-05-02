import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import HomePage from "../Pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import Logout from "../Pages/Logout";
import Authenticate from "../Pages/auth/Authenticate";

const useRoute = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "auth",
      element: <Authenticate />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
  ]);
};

export default useRoute;
