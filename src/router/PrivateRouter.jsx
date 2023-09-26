import { Navigate, Outlet } from "react-router-dom";
import { useSearchContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { user } = useSearchContext();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
