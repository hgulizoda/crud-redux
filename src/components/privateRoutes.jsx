import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.auth.auth);
  console.log(auth);

  if (!auth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
