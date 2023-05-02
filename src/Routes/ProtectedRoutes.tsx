import { Navigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const ProtectedRoutes: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={"/auth?mode=login"} replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
